package com.membersCRUD.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.membersCRUD.model.Member;
import com.membersCRUD.service.MemberService;

import java.util.List;

@RestController
@RequestMapping("/games")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
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