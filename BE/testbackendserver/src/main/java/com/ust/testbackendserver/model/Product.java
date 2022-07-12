package com.ust.testbackendserver.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Product {
    private final int id;
    private final double price;
    private final String brand;

    public Product(@JsonProperty("id") int id,
                   @JsonProperty("price") double price,
                   @JsonProperty("brand") String brand) {
        this.id = id;
        this.price = price;
        this.brand = brand;
    }

    public int getId() {
        return id;
    }

    public double getPrice() {
        return price;
    }

    public String getBrand() {
        return brand;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", price=" + price +
                ", brand='" + brand + '\'' +
                '}';
    }
}

