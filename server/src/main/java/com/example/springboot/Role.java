package com.example.springboot;

public class Role {
	private RoleName roleName = RoleName.MAFIA;

	public RoleName getRoleName() {
		return roleName;
	}

	public void setRoleName(RoleName roleName) {
		this.roleName = roleName;
	}
}

enum RoleName {
	MAFIA,
	VILLAGER,
}