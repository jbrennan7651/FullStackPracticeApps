package com.ust.springbe.dao;

import com.ust.springbe.model.User;
import com.ust.springbe.model.UserInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserRepository{

    // default int createUser(User user){
    //     int id = 0;
    //     return createUser(id, user);
    // }
   
    //User Methods
    int createUser(User user);
    int deleteUser(String uname);

    User findUserByName(String uname);

    int updateUser(String uname, User user);

    // Optional<User> findUserById(int id);
    //User Info Methods

    int createUserInfo(String uname);
    int deleteUserInfo(String uname);
    UserInfo findUserInfoByName(String uname);
    int updateUserInfo(String uname, UserInfo userInfo);
    List<User> queryUsers();
    List<UserInfo> queryUsersInfo();




}
