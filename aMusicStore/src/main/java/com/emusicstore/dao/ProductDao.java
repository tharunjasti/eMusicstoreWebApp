package com.emusicstore.dao;

import java.util.List;

import com.emusicstore.model.Product;

public interface ProductDao {
	
	void addProduct(Product product);
	
	Product getProductById(String id);
	
	List<Product> getAllProducts();
	
	void deleteProduct(String id);

	void editProduct(Product product);

}
