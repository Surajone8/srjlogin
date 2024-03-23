import React, { useState } from 'react'
import maleimg from "../images/male-model.jpg";
import femaleimg from "../images/female-model.jpg";
import "../css/FeaturedProduct.css"
import ProductCard from './ProductCard'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../css/ProductCard.css";
import { NikeData } from '../data/NikeDataset';

const FeaturedProduct = ({ male }) => {

  const [productCount, setProductCount] = useState(0);
  const displayedData = NikeData.slice(productCount, productCount + 3);





  return (
    <>
      {male ? <div className="feature_product_cont">
        <img className='feature-img' src={maleimg} alt="" />
        <div className="feature-product">
          <h1>Men's Collections</h1>
          <div className="products">
            <button className='products-control' onClick={productCount > 0 ? () => setProductCount(productCount - 3) : () => setProductCount(0)}><FaArrowLeft fontSize={20} /></button>
            {displayedData.map((data) => {
              return (
                <ProductCard data={data} />
              )
            })}
            {/* <ProductCard productCount={productCount} /> */}
            <button className='products-control' onClick={() => setProductCount(productCount + 3)}><FaArrowRight fontSize={20} /></button>
          </div>
        </div>
      </div> : <div className="feature_product_cont_female">
        <div className="feature-product">
          <h1>Women's Collections</h1>
          <div className="products">
            <button className='products-control' onClick={productCount > 0 ? () => setProductCount(productCount - 3) : () => setProductCount(0)}><FaArrowLeft fontSize={20} /></button>
            {displayedData.map((data) => {
              return (
                <ProductCard data={data} />
              )
            })}
            {/* <ProductCard productCount={productCount} /> */}
            <button className='products-control' onClick={() => setProductCount(productCount + 3)}><FaArrowRight fontSize={20} /></button>
          </div>
        </div>
        <img className='feature-img' src={femaleimg} alt="" />
      </div>}
    </>
  )
}

export default FeaturedProduct