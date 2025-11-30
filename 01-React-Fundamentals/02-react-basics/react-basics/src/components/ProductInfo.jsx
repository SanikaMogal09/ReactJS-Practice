
const ProductInfo = () => {
    const product = {
        name:'Laptop',
        price: 120000,
        availability:'In stock'
    };

  return (
    <div>
        <h1>Name : {product.name}</h1>
        <h1>Price :  {product.price}</h1>
        <h1>Availablilty :  {product.availability}</h1>
    </div>
  )
}

export default ProductInfo