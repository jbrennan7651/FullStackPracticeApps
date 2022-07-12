package com.ust.testbackendserver.dao;

import com.ust.testbackendserver.model.Product;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface ProductDao {
    default int insertProduct( Product product) {
        Random rand = new Random();
        int id = rand.nextInt();
        return insertProduct(id, product);
    }
    int insertProduct(int id, Product product);
    int updateProduct(int id, Product product);
    int deleteProduct(int id);
    List<Product> queryProducts();
    Optional<Product> queryProductByID(int id);
}
