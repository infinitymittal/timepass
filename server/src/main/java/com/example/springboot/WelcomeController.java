package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class WelcomeController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/")
	public String index() {
		return "Welcome to Mafia server.";
	}

}