package com.ust.testbackendserver.service;

import com.ust.testbackendserver.model.Product;
import com.ust.testbackendserver.dao.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductService {
    private final ProductDao productDao;

    @Autowired
    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }
    public int insertProduct(int id, Product product) {
        return productDao.insertProduct( id, product);
    }
    public int insertProduct(Product product) {
        return productDao.insertProduct( product);
    }
    public int updateProduct(int id, Product product) {
        return productDao.updateProduct( id, product);
    }
    public int deleteProduct(int id) {
        return productDao.deleteProduct(id);
    }
    public List<Product> queryProducts() {
        return productDao.queryProducts();
    }
    public Optional<Product> queryProduct(int id) {
        return productDao.queryProductByID( id);
    }
}