package com.ust.springbe.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

// @Entity
// @Table(name="users")
public class User {
    //
    //Data Members
    //
    private String uname;
    private String password;


    //Constructors
    public User(){}

    public User(
                @JsonProperty("uname") String uname,
                @JsonProperty("password") String password) {
        // this.id = id;           
        this.uname = uname;
        this.password = password;
    }

    //
    //Accessors
    //
    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
