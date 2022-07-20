package com.ust.springbe.service;

import com.ust.springbe.dao.UserRepository;

import com.ust.springbe.model.User;
import com.ust.springbe.model.UserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(@Qualifier("UserRepository") UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //Global Methods
    public List<User> findUsers() {
        return userRepository.queryUsers();
    }

    //User Methods

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


    //User Info Methods

    public int createUserInfo(UserInfo userInfo){
        return userRepository.createUserInfo(userInfo);
    }
    public int deleteUserInfo(String uname){
        return userRepository.deleteUserInfo(uname);
    }

    public UserInfo findUserInfoByName(String uname) {
        return userRepository.findUserInfoByName(uname);
    }

    public int updateUserInfo(String uname,UserInfo userInfo) {
        return userRepository.updateUserInfo(uname, userInfo);
    }

   


}
