package com.ust.testbackendserver.dao;

import com.ust.testbackendserver.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Repository("FakeProductDao")
public class FakeProductDataServiceAccess implements ProductDao {

    private static List<Product> products = new ArrayList<>();

    @Override
    public int insertProduct(int id, Product product) {
        products.add( new Product( id, product.getPrice(), product.getBrand()));
        return 1;
    }

    @Override
    public int updateProduct(int id, Product product) {
        return queryProductByID( id)
                .map( origProduct -> {
                    int idx = products.indexOf( origProduct);
                    if (idx > 0) {
                        products.set( idx, product);
                        return 1;
                    }
                    return 0;
                }).orElse( 0);
    }

    @Override
    public int deleteProduct(int id) {
        Optional<Product> productO = queryProductByID( id);
        if (productO.isEmpty())
            return 0;
        products.remove( productO.get());
        return 1;
    }

    @Override
    public List<Product> queryProducts() {
        return products;
    }

    @Override
    public Optional<Product> queryProductByID(int id) {
        return products.stream().filter( product -> product.getId() == id).findFirst();
    }
}