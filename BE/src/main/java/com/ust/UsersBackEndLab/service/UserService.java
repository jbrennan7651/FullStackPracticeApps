package com.ust.UsersBackEndLab.service;

import com.ust.UsersBackEndLab.dao.UserDao;
import com.ust.UsersBackEndLab.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("UserRepository")UserDao userDao) {
        this.userDao = userDao;
    }
    public int insertUser(User user) {
        return userDao.insertUser(user) ;
    }
    public int UpdateUser(String uname, User user) {
        return userDao.updateUser(uname, user);
    }
    public int deleteUser(String uname) {
        return userDao.deleteUser(uname) ;
    }
    public List<User> queryUsers() {
        return userDao.queryUsers() ;
    }
    public Optional<User> queryUser(String uname) {
        return userDao.queryUser(uname) ;
    }
}
