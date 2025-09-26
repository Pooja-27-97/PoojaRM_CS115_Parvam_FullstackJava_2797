package com.membersCRUD.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.membersCRUD.model.Member;
import com.membersCRUD.repository.MemberRepository;

@Service
public class MemberService {
	private MemberRepository memberRepository;

	public List<Member> getAllMembers() {
		List<Member> games = memberRepository.findAll();
		return games;
	}

	public Member getMembersById(Long id) {
		Optional<Member> byId = memberRepository.findById(id);
		Member game = byId.get();
		return game;
	}

	public void deleteMembersById(Long id) {
		memberRepository.deleteById(id);
	}

	public Member updateMembersById(Member game, Long id) {
		Optional<Member> oldGame = memberRepository.findById(id);
		Member oldGame1 = oldGame.get();
		oldGame1.setMemberName(game.getMemberName());
		oldGame1.setMemberEmail(game.getMemberEmail());
		oldGame1.setJoinDate(game.getJoinDate());
		oldGame1.setMemberPhone(game.getMemberPhone());
		oldGame1.setBalance(game.getBalance());
		oldGame1.setStatus(game.getStatus());
		Member save = memberRepository.save(oldGame1);
		return save;
	}
	
	public Member save(Member member) {
	    return memberRepository.save(member);
	}
}