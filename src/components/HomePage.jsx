import React from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p>Found {filtered.length} products</p>
      )}

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={filtered} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default HomePage;