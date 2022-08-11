package com.santosediego.WOLSystem.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class WolDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	@NotBlank(message = "Preenchimento obrigatório!")
	private String ip;

	@NotBlank(message = "Preenchimento obrigatório!")
	private String mac;

	@NotNull(message = "Preenchimento obrigatório!")
	private Integer port;
	private String mask;

	public WolDTO() {
	}

	public WolDTO(String ip, String mac, Integer port, String mask) {
		this.ip = ip;
		this.mac = mac;
		this.port = port;
		this.mask = mask;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getMac() {
		return mac;
	}

	public void setMac(String mac) {
		this.mac = mac;
	}

	public Integer getPort() {
		return port;
	}

	public void setPort(Integer port) {
		this.port = port;
	}

	public String getMask() {
		return mask;
	}

	public void setMask(String mask) {
		this.mask = mask;
	}
}
