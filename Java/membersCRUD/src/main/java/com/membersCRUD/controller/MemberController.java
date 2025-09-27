package com.membersCRUD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.membersCRUD.model.Member;
import com.membersCRUD.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping({"/member"})
	public List<Member> getAllMembers() {
		List<Member> allMembers = memberService.getAllMembers();
		return allMembers;
	}

    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable Long id) {
        return memberService.getMembersById(id);
    }

    @PostMapping
    public Member postMember(@RequestBody Member member) {
        return memberService.save(member);
    }

    @PutMapping("/{id}")
    public Member updateMemberById(@RequestBody Member member, @PathVariable Long id) {
        return memberService.updateMembersById(member, id);
    }

    @DeleteMapping("/{id}")
    public String deleteMemberById(@PathVariable Long id) {
        memberService.deleteMembersById(id);
        return "Member is deleted";
    }
}