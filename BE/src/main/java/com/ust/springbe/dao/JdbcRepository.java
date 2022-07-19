package com.ust.springbe.dao;

import com.ust.springbe.model.User;
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

    @Override
    public int createUser(User user) {
        String sql = "INSERT INTO USERS(UNAME, PASSWORD) VALUES(?,?)";
        return jdbcTemplate.update(sql,
                new Object[]{user.getUname(), user.getPassword()});
    }

    @Override
    public int deleteUser(String uname) {
        String sql = "DELETE FROM USERS WHERE UNAME=?";
        return jdbcTemplate.update(sql, uname);
    }

    @Override
    public User findUserByName(String uname) {
        User user = null;
        try {
            String sql = "SELECT * FROM USERS WHERE UNAME=?";
            user = jdbcTemplate.queryForObject(sql,
                    BeanPropertyRowMapper.newInstance(User.class), uname);
            return user;
        }
        catch (IncorrectResultSizeDataAccessException e){
            return user;
        }
    }

    @Override
    public int updateUser(String uname, User user) {
        String sql = "UPDATE USERS SET UNAME=?, PASSWORD=? WHERE UNAME=?";
        
        return jdbcTemplate.update(sql,
         user.getUname(), user.getPassword(), uname);
    }

}
