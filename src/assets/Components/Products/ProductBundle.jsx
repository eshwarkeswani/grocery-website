import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './ProductBundle.css';

function ProductBundle({ products, addToCart }) {
  return (
    <section id="popular-bundle-pack">
      <div className="product-heading">
        <h3>Popular Bundle Pack</h3>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <span className="quantity">{product.quantity}</span>
            <span className="price">{product.price}</span>

            <button
              className="cart-btn"
              onClick={() =>
                addToCart({
                  ...product,
                  price: parseFloat(product.price.replace('$', '')), 
                })
              }
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

export default ProductBundle;
