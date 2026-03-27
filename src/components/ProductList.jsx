function ProductList({ products, onAddToCart }) {  // ← Add onAddToCart prop
  return (
    <div className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}  // ← Pass it down
          />
        ))}
      </div>
    </div>
  );
}