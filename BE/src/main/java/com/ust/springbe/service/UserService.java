package com.ust.springbe.service;

import com.ust.springbe.dao.UserRepository;

import com.ust.springbe.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(@Qualifier("UserRepository") UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public int createUser(User user){
        return userRepository.createUser(user);
    }
    public int deleteUser(String uname){
        return userRepository.deleteUser(uname);
    }

    public User findUserByName(String uname) {
        return userRepository.findUserByName(uname);
    }

    public int updateUser(String uname,User user) {
        return userRepository.updateUser(uname, user);
    }
}
