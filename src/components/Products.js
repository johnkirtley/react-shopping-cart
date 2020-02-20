import React from 'react';

// Components
import Product from './Product';

const Products = props => {
	return (
		<div className="products-container">
			{console.log(props.products)}
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
