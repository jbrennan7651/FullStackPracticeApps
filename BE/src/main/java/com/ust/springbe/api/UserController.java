package com.ust.springbe.api;

import com.ust.springbe.model.User;
import com.ust.springbe.model.UserInfo;
import com.ust.springbe.service.UserService;

import java.lang.StackWalker.Option;
import java.util.List;
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
  
    //LOGIN Authorization Method
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginUser(@RequestBody User userData){
        System.out.println(userData);
        User user = userService.findUserByName(userData.getUname());
        if(user.getPassword().equals(userData.getPassword())){
            return ResponseEntity.ok(user);
        }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
    //GET Methods
    @GetMapping(value = "")
    List<User> queryUsers(){
        return userService.findUsers();
    }
    @GetMapping(value = "/{uname}")
    User queryUserByName(@PathVariable("uname") String uname){
        queryUserInfoByName(uname);
        return userService.findUserByName(uname);
    }
    @GetMapping(value = "/info")
    List<UserInfo> queryUsersInfo(){
        return userService.findUsersInfo();
    }
    @GetMapping(value = "/{uname}/info")
    UserInfo queryUserInfoByName(@PathVariable("uname") String uname){
        return userService.findUserInfoByName(uname);
    }

    //POST Methods
    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    int createUser(@RequestBody User user){
        int userInfo = userService.createUserInfo(user.getUname());
        return userService.createUser(user);
    }

    @PostMapping(value = "/{uname}/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    int createUserInfo(@RequestBody String uname){
        return userService.createUserInfo(uname);
    }

    //PUT Methods
    @PutMapping(value = "/{uname}")
    int updateUser(@PathVariable("uname")String uname, @RequestBody User user){
        return userService.updateUser(uname, user);
    }

    @PutMapping(value = "/{uname}/info")
    int updateUserInfo(@PathVariable("uname")String uname, @RequestBody UserInfo userInfo){
        return userService.updateUserInfo(uname, userInfo);
    }
    
    //DELETE Methods
    @DeleteMapping(value = "/{uname}")
    int deleteMovie(@PathVariable("uname")String uname){
        int userInfo = this.userService.deleteUserInfo(uname);
        return userService.deleteUser(uname);
    }

    @DeleteMapping(value = "/{uname}/info")
    int deleteUserInfo(@PathVariable("uname")String uname){
        return userService.deleteUserInfo(uname);
    }
 
}
