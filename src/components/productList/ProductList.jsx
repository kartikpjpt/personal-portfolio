import React from 'react';
import './productList.css';
import Product from '../product/Product';
import {products} from '../../data';

const ProductList = () => {
    return ( 
        <div className="pl">
            <div className="pl-texts"> 
                <h1 className="pl-title">Create & Inspire.<br/> Projects. </h1>
                <p className="pl-desc">
                    few of the project & many coming soon...
                </p>
            </div>
            <div className="pl-list">
                {
                    products.map((item) => {
                        return (<Product key={item.id} img={item.img} link={item.link} title={item.title} />)
                    })
                }

            </div>
        </div>
    )
}

export default ProductList;
