package com.ust.UsersBackEndLab.api;

import com.ust.UsersBackEndLab.model.User;
import com.ust.UsersBackEndLab.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="users/")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value="", consumes = MediaType.APPLICATION_JSON_VALUE)
    int insertUser(@RequestBody User user){
        return userService.insertUser(user);
    }

    @PutMapping(value="{uname}")
    int updateUser(@PathVariable("uname") String uname,@RequestBody User user){
        return userService.UpdateUser(uname,user);
    }
    @DeleteMapping(value="{uname}")
    int deleteUser(@PathVariable("uname") String uname){
        return userService.deleteUser(uname);
    }
    @GetMapping
    List<User> queryUsers(){
        return userService.queryUsers();
    }
    @GetMapping(value = "{uname}")
    Optional<User> queryUser(@PathVariable("uname") String uname){
        return userService.queryUser(uname);
    }
}
