import { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './assets/Components/Header/NavigationBar';
import SearchMain from './assets/Components/Hero/SearchMain';
import Categories from './assets/Components/Products/Categories';
import ProductsDisplay from './assets/Components/Products/ProductsDisplay';
import productsData from './data/products.json';
import ProductBundle from './assets/Components/Products/ProductBundle';
import Review from './assets/Components/Clients/Review';
import Footer from './assets/Components/Footer/Footer';

function App() {

  const loadCartFromLocalStorage = () => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error parsing cart data from localStorage:', error);
      return [];
    }
  };
  

  const [selectedCategory, setSelectedCategory] = useState('Vegetables');
  const [cart, setCart] = useState(loadCartFromLocalStorage);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);


  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const updateCartQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const removeCartItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };


  const clearCart = () => {
  setCart([]);
};


const categories_box = [
    { name: 'Fish & Meat', image: '/images/fish-icon.jpg' },
    { name: 'Vegetables', image: '/images/veg-icon.png' },
    { name: 'Fruits', image: '/images/fruits-icon.png' },
    { name: 'Beauty', image: '/images/beauty-icon.png' },
    { name: 'Office', image: '/images/office-icon.png' },
    { name: 'Gardening', image: '/images/gardening-icon.jpeg' },
  ];


  const popularBundlePacks = [
    {
      id : 101,
      name: 'Vegetable Delight',
      image: '/images/product-images/veg_delight.png',
      quantity: 'Tomato, Onion, Carrot x 4',
      price: '$10.99',
    },
    {
      id : 102,
      name: 'Fruit Fiesta',
      image: '/images/product-images/fruit_fiesta.png',
      quantity: 'Apple, Banana, Grapes x 3',
      price: '$15.49',
    },
    {
      id : 103,
      name: 'Breakfast Essentials',
      image: '/images/product-images/breakfast_essentials.png',
      quantity: 'Milk, Eggs, Bread x 6',
      price: '$12.99',
    },
    {
      id : 104,
      name: 'Protein Powder Pack',
      image: '/images/product-images/protein.png',
      quantity: 'Protein Powder, Creatine x 3',
      price: '$20.99',
    },
    {
      id : 105,
      name: 'Snack Time Combo',
      image: '/images/product-images/snack.png',
      quantity: 'Chips, Cookies, Juice x 4',
      price: '$8.49',
    },
    {
      id : 106,
      name: 'Dairy Favorites',
      image: '/images/product-images/diary.png',
      quantity: 'Milk, Cheese, Yogurt x 3',
      price: '$14.99',
    },
  ];

  return (
    <>
      <NavigationBar
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeCartItem={removeCartItem}
        clearCart={clearCart}
      />
      <SearchMain />
      <Categories ctg_box={categories_box} onCategorySelect={handleCategorySelect} />
      <ProductsDisplay
        selectedCategory={selectedCategory}
        products={productsData}
        addToCart={addToCart}
      />
      <ProductBundle
  products={popularBundlePacks}
  addToCart={addToCart}
  
/>


      <Review />
      <Footer />
    </>
  );
}

export default App;
