package com.gamescrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamescrud.model.Game;
import com.gamescrud.service.GameSevice;

@RestController
public class GameController {
	@Autowired
	private GameSevice gameService;
	
	@GetMapping({"/games", "/", ""})
	public List<Game> getAllGames() {
		List<Game> allGames = gameService.getAllGames();
		return allGames;
	}
	
	@GetMapping({"/gamesbyid"})
	public Game getGamesId(@RequestParam Long id) {
		Game game = gameService.getGamesId(id);
		return game;
	}
	
	@PostMapping("/games")
    public Game postGames(@RequestBody Game game) {
        return gameService.save(game);
    }
	
	@PutMapping({"/games/id"})
	public Game updateGames(@RequestBody Game game, @RequestParam Long id) {
		Game updateGame = gameService.updateGames(game, id);
		return updateGame;
	}
	
	@DeleteMapping({"/games/id"})
	public String deleteGames(@RequestParam Long id) {
		gameService.deleteGames(id);
		return "Game is deleted";
	}
	public static void main(String[] args) {
		
	}

}
