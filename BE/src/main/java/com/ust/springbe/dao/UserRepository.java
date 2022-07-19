package com.ust.springbe.dao;

import com.ust.springbe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserRepository{

    // default int createUser(User user){
    //     int id = 0;
    //     return createUser(id, user);
    // }
   
    int createUser(User user);
    int deleteUser(String uname);

    User findUserByName(String uname);

    int updateUser(String uname, User user);

    // Optional<User> findUserById(int id);




}
