import React, { useState } from 'react'
import "../css/ProductCard.css"
import { FaStar } from "react-icons/fa";
// import { NikeData } from '../data/NikeDataset';

const ProductCard = ({ data }) => {

    // const [productCount, setProductCount] = useState(0);

    // const displayedData = NikeData.slice(productCount, productCount + 3);
    const [imageNum, setImageNum] = useState(0);
    // let imageNum = 1;


    return (
        <>
            <div className="product-card" key={data['Product ID']} onMouseEnter={() => setImageNum(4)} onMouseLeave={() => setImageNum(0)} >
                <div key={imageNum} className="product-img-cont">
                    <img key={imageNum} className='product-img' src={data.Images[imageNum]} alt="" />
                </div>
                <h2 className='product-title'>{data['Product Name']}</h2>
                <div className="rating"><FaStar fontSize={20} /> <FaStar fontSize={20} /> <FaStar fontSize={20} /> <FaStar fontSize={20} /> <FaStar fontSize={20} /></div>
                <h3 className='product-price'>${data['Sale Price']}</h3>
            </div>


        </>
    )
}

export default ProductCard