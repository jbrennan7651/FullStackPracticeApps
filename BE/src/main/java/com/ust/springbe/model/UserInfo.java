package com.ust.springbe.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserInfo {
    //
    //Data Members
    //
    private String uname;
    private String email;
    private String phone;
    private String street;
    private String city;
    private String country;

    //
    //Constructors
    //
    public UserInfo(){}

    public UserInfo(@JsonProperty("uname") String uname,
                    @JsonProperty("email") String email,
                    @JsonProperty("phone") String phone,
                    @JsonProperty("street") String street,
                    @JsonProperty("city") String city,
                    @JsonProperty("country") String country) {
        this.uname = uname;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.country = country;
    }

    //
    //Accessors
    //


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

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
