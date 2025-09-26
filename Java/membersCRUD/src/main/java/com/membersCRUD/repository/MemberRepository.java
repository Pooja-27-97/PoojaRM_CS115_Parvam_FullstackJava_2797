package com.membersCRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.membersCRUD.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

}
