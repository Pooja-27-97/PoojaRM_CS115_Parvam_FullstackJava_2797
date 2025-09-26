package com.gamescrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamescrud.model.Game;
import com.gamescrud.repository.GamesRepository;

@Service
public class GameSevice {
	@Autowired
	private GamesRepository gameRepository;
	
	public List<Game> getAllGames() {
		List<Game> games = gameRepository.findAll();
		return games;
	}
	
	public Game getGamesId(Long id) {
		Optional<Game> byId = gameRepository.findById(id);
		Game game = byId.get();
		return game;
	}
	
	public void deleteGames(Long id) {
		gameRepository.deleteById(id);
	}
	
	public Game updateGames(Game game, Long id) {
		Optional<Game> oldGame = gameRepository.findById(id);
		Game oldGame1 = oldGame.get();
		oldGame1.setGameName(game.getGameName());
		oldGame1.setCostPerHour(game.getCostPerHour());
		oldGame1.setStatus(game.getStatus());
		Game save = gameRepository.save(oldGame1);
		return save;
	}
	
	public Game save(Game member) {
	    return gameRepository.save(member);
	}
	public static void main(String[] args) {
		
	}

}
