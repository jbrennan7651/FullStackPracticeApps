package com.ust.UsersBackEndLab.dao;

import com.ust.UsersBackEndLab.model.User;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface UserDao {

    default int insertUser( User user) {
        Random rand = new Random();
        int id = rand.nextInt();
        return insertUser(String.valueOf(id), user);
    }
    int insertUser(String uname, User user);
    int updateUser(String uname, User user);
    int deleteUser(String uname);
    List<User> queryUsers();
    Optional<User> queryUser(String uname);
}
