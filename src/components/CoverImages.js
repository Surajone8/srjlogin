import React from 'react'
import { CoverImageData } from '../data/CoverImageData'
import "../css/CoverImages.css"

const CoverImages = () => {
    return (
        <>
            <div className="coverImage-cont">
                {CoverImageData.map((item, id) => {
                    return (
                        // <div className="coverImage" key={item.id}>
                        //     <img src={item.img} alt="" />
                        // </div>
                        <div key={id} className={id < 2 ? "full-height" : ""}>
                            <img src={item.img} alt={`Image ${id + 1}`} />
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default CoverImages