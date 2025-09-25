package com.gamescrud.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "games")
public class Game {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "game_id")
	private Long gameId;
	@Column(name = "game_name", length = 100)
	private String gameName;
	@Column(name = "cost_per_hour", precision = 10, scale = 2)
	private BigDecimal costPerHour;
	@Column(name = "status")
	@Enumerated(EnumType.STRING)
	private Status status;
	
	public static void main(String[] args) {
		
	}

}
