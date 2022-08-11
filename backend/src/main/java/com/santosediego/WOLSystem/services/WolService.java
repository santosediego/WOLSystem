package com.santosediego.WOLSystem.services;

import java.io.Serializable;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

import org.springframework.stereotype.Service;

import com.santosediego.WOLSystem.dto.WolDTO;

@Service
public class WolService implements Serializable {

	private static final long serialVersionUID = 1L;

	public String WolStartMachine(WolDTO dto) {

		try {
			byte[] macBytes = getMacBytes(dto.getMac());
			byte[] bytes = new byte[6 + 16 * macBytes.length];

			for (int i = 0; i < 6; i++) {
				bytes[i] = (byte) 0xff;
			}

			for (int i = 6; i < bytes.length; i += macBytes.length) {
				System.arraycopy(macBytes, 0, bytes, i, macBytes.length);
			}

			InetAddress address = InetAddress.getByName(dto.getIp());
			DatagramPacket packet = new DatagramPacket(bytes, bytes.length, address, dto.getPort());
			DatagramSocket socket = new DatagramSocket();
			socket.send(packet);
			socket.close();

			return "Wake-on-LAN packet sent!";
		} catch (Exception e) {
			throw new IllegalArgumentException("Failed to send Wake-on-LAN packet: " + e.getMessage());
		}
	}

	private static byte[] getMacBytes(String macStr) throws IllegalArgumentException {

		byte[] bytes = new byte[6];
		String[] hex = macStr.split("(\\:|\\-)");

		if (hex.length != 6) {
			throw new IllegalArgumentException("Invalid MAC address.");
		}

		try {
			for (int i = 0; i < 6; i++) {
				bytes[i] = (byte) Integer.parseInt(hex[i], 16);
			}
		} catch (NumberFormatException e) {
			throw new IllegalArgumentException("Invalid hex digit in MAC address.");
		}
		return bytes;
	}
}
