package com.gamescrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gamescrud.model.Game;

public interface GamesRepository extends JpaRepository<Game, Long> {
	public static void main(String[] args) {
		
	}
}
