import './App.css';
import { ProductCard } from './ProductCard';
import { Products } from './ProductList';

function App() {
  
  function handlePurchase(product) {
    alert(`You want to purchase ${product.name} for $${product.price}`);
  }

  return (
    <div className="App">
      <h1>Our Products</h1>
      <div className="products-container">
        {
           Products.map((product, index) => (
          <ProductCard 
            ky={index}
            name={product.name}
            image={product.image}
            specifications={product.specifications}
            price={product.price}
            onPurchase={handlePurchase}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
