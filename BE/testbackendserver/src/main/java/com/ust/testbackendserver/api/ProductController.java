package com.ust.testbackendserver.api;

import com.ust.testbackendserver.model.Product;
import com.ust.testbackendserver.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="products/")  // localhost:8080/products/
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    //    @PostMapping(value="", consumes = MediaType.APPLICATION_JSON_VALUE)
//    int insertProduct(@PathVariable("id") int id, @RequestBody Product product) {
//        return productService.insertProduct( id, product);
//    }
    @PostMapping(value="", consumes = MediaType.APPLICATION_JSON_VALUE)
    int insertProduct( @RequestBody Product product) {
        return productService.insertProduct( product);
    }
    @PutMapping(value="{id}")
    int updateProduct(@PathVariable("id") int id, @RequestBody Product product) {
        return productService.updateProduct( id, product);
    }
    @DeleteMapping(value="{id}")
    int deleteProduct(@PathVariable("id") int id) {
        return productService.deleteProduct(id);
    }
    @GetMapping
    List<Product> queryProducts() {
        return productService.queryProducts();
    }
    @GetMapping(value="{id}")
    Optional<Product> queryProduct(@PathVariable("id") int id) {
        return productService.queryProduct( id);
    }
}

