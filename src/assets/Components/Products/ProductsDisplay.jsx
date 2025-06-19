import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './ProductsDisplay.css';

function ProductsDisplay({ selectedCategory, products, addToCart }) {
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <section id="products">
            <div className="product-heading">
                <h3>Products</h3>
                <span>{selectedCategory || 'Vegetables'}</span>
            </div>

            <div className="product-container">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-box">
                        <img
                            className="product-image"
                            srcSet={product.image}
                            alt={product.name}
                            onError={(e) => {
                                e.target.src = '/images/placeholder.jpg';
                                e.target.onerror = null;
                            }}
                        />
                        <strong className="product-name">{product.name}</strong>
                        <span className="quantity">{product.quantity}</span>
                        <span className="price">${product.price}</span>

                        <button
                            className="cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductsDisplay;
