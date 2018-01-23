package com.emusicstore.model;

public class CartItem {
	
	private Product product;
	private int quantity;
	private double totalPrice;
	
	public CartItem(Product product) {
		this.product = product;
		this.quantity = 1;
		this.totalPrice = product.getProductPrice();
	}
	

	public Product getProduct() {
		return product;
	}

	/*public CartItem(Product product, int quantity, double totalPrice) {
		super();
		this.product = product;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
	}*/

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
	

}
