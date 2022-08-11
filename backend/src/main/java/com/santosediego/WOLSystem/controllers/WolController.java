package com.santosediego.WOLSystem.controllers;

import java.io.Serializable;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.santosediego.WOLSystem.dto.WolDTO;
import com.santosediego.WOLSystem.services.WolService;

@RestController
@RequestMapping(value = "/wolstart")
public class WolController implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private WolService service;

	@PostMapping
	public ResponseEntity<String> insert(@Valid @RequestBody WolDTO dto) {

		String response = service.WolStartMachine(dto);
		return ResponseEntity.ok().body(response);
	}
}
