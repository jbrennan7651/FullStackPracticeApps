package com.ust.springbe.api;

import com.ust.springbe.model.User;
import com.ust.springbe.service.UserService;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginUser(@RequestBody User userData){
        System.out.println(userData);
        User user = userService.findUserByName(userData.getUname());
        if(user.getPassword().equals(userData.getPassword())){
            return ResponseEntity.ok(user);
        }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }


    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    int createMovie(@RequestBody User user){
        return userService.createUser(user);
    }

    @DeleteMapping(value = "/{uname}")
    int deleteMovie(@PathVariable("uname")String uname){
        return userService.deleteUser(uname);
    }

    @GetMapping(value = "/{uname}")
    User queryUserByName(@PathVariable("uname") String uname){
        return userService.findUserByName(uname);
    }

    @PutMapping(value = "/{uname}")
    int updateUser(@PathVariable("uname")String uname, @RequestBody User user){
        return userService.updateUser(uname, user);
    }
}
