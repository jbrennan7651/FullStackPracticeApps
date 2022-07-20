package com.ust.springbe.model;

public class UserInfo {
    //
    //Data Members
    //
    private String uname;
    private String email;

    //
    //Constructors
    //
    public UserInfo(){}

    public UserInfo(String uname, String email) {
        this.uname = uname;
        this.email = email;
    }

    //
    //Accessors
    //
    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
