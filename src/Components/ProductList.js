import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

  
  showProductList = () => {
    let {productList,addToCart} = this.props;
    return productList.map((product) => {
        let { id } = product;
        return <div className="col-3 mt-3" key={`shoes${id}`}>
            <ProductItem addToCart={addToCart} product={product} />
        </div>
    })
}
  render() {
    return (
      
        <div className="row">
          {this.showProductList()}
        </div>
    
    )
  }
}
