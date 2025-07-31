export function ProductCard({ name, image, specifications, price, onPurchase }) {
  const product = { name, image, specifications, price };

  return (
    <div className="product-card">
      <div className="product-name-tag">
        <h3 className="product-name">{name}</h3>
      </div>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
       
        <div className="product-specifications">
          <h4>Specifications:</h4>
          <ul>
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <div className="product-price">
          <button onClick={() => onPurchase(product)} className="price">${price}</button>
        </div>
      </div>
    </div>
  );
}