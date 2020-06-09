package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class PlayerController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/game/{gameId}/player/{playerId}/role")
	public Role getRole() {
		return new Role();
	}
}