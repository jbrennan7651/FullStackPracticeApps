package com.ust.springbe.dao;

import com.ust.springbe.model.User;
import com.ust.springbe.model.UserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("UserRepository")
public class JdbcRepository implements UserRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private static List<User> users = new ArrayList<>();

    //Post Methods

    @Override
    public int createUser(User user) {
        String sql = "INSERT INTO USERS(UNAME, PASSWORD) VALUES(?,?);";
        return jdbcTemplate.update(sql,
                new Object[]{user.getUname(), user.getPassword()});
    }

    
    @Override
    public int createUserInfo(String uname) {
        UserInfo userInfo = new UserInfo();
        String sql = "INSERT INTO USERINFO(UNAME, EMAIL, PHONE, STREET, CITY, COUNTRY) VALUES(?,?,?,?,?,?);";
        return jdbcTemplate.update(sql,
                new Object[]{uname, userInfo.getEmail(), userInfo.getPhone(), userInfo.getStreet(), userInfo.getCity(), userInfo.getCountry()});
    }

    //Delete Methods

    @Override
    public int deleteUser(String uname) {
        String sql = "DELETE FROM USERS WHERE UNAME=?";
        return jdbcTemplate.update(sql, uname);
    }

    @Override
    public int deleteUserInfo(String uname) {
        String sql = "DELETE FROM USERINFO WHERE UNAME=?";
        return jdbcTemplate.update(sql, uname);
    }


    //Get Methods
    @Override
    public List<User> queryUsers() {
        String sql = "SELECT * FROM USERS";
         return jdbcTemplate.query(sql,
                    BeanPropertyRowMapper.newInstance(User.class));
        
    }
    @Override
    public List<UserInfo> queryUsersInfo() {
        String sql = "SELECT * FROM USERINFO";
         return jdbcTemplate.query(sql,
                    BeanPropertyRowMapper.newInstance(UserInfo.class));
    }

    @Override
    public User findUserByName(String uname) {
        User user = null;
        try {
            String sql = "select * from users, userinfo where users.uname=userinfo.uname AND userinfo.uname=?";
            user = jdbcTemplate.queryForObject(sql,
                    BeanPropertyRowMapper.newInstance(User.class), uname);
            return user;
        }
        catch (IncorrectResultSizeDataAccessException e){
            return user;
        }
    }

    @Override
    public UserInfo findUserInfoByName(String uname) {
        UserInfo userInfo = null;
        try {
            String sql = "SELECT * FROM USERINFO WHERE UNAME=?";
            userInfo = jdbcTemplate.queryForObject(sql,
                    BeanPropertyRowMapper.newInstance(UserInfo.class), uname);
            return userInfo;
        }
        catch (IncorrectResultSizeDataAccessException e){
            return userInfo;
        }
    }

    //Put Methods

    @Override
    public int updateUser(String uname, User user) {
        String sql = "UPDATE USERS SET UNAME=?, PASSWORD=? WHERE UNAME=?";
        
        return jdbcTemplate.update(sql,
         user.getUname(), user.getPassword(), uname);
    }

    @Override
    public int updateUserInfo(String uname, UserInfo userInfo) {
        String sql = "UPDATE USERINFO SET UNAME=?, EMAIL=?, PHONE=?, STREET=?, CITY=?, COUNTRY=? WHERE UNAME=?";
        
        return jdbcTemplate.update(sql,
         userInfo.getUname(), userInfo.getEmail(), userInfo.getPhone(), userInfo.getStreet(), userInfo.getCity(), userInfo.getCountry(), uname);
    }


   


  

}
