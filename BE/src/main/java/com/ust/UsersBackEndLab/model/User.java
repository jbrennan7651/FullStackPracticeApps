package com.ust.UsersBackEndLab.model;

public class User {
    private int id;
    private String  uName;
    private String pWord;

    public User() {
    }

    public User(int id, String uName, String pWord) {
        this.id = id;
        this.uName = uName;
        this.pWord = pWord;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public String getpWord() {
        return pWord;
    }

    public void setpWord(String pWord) {
        this.pWord = pWord;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", uName='" + uName + '\'' +
                ", pWord='" + pWord + '\'' +
                '}';
    }
}
