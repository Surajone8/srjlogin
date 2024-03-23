import React, { useState } from 'react'
import { useAppContext } from '../contexts/Context'
import { useNavigate } from 'react-router-dom';
// import { isButtonElement } from 'react-router-dom/dist/dom';
import { NikeData } from '../data/NikeDataset';
import "../css/Home.css"
import { CarouselData } from '../data/CarouselData';
import CoverImages from '../components/CoverImages';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import FeaturedProduct from '../components/FeaturedProduct';


const Home = () => {

    // const [user, setUser] = useState(null);

    const { isLogin } = useAppContext();
    const navigate = useNavigate();

    const [carouselNum, setCarouselNum] = useState(0);
    const [leftbtn, setLeftBtn] = useState(false);
    const [rightbtn, setRightBtn] = useState(false);


    // console.log(user);
    const redirectToLogin = () => {
        navigate('/');
    }

    setTimeout(() => {
        if (carouselNum < CarouselData.length - 1) {
            setCarouselNum(carouselNum + 1);
        } else {
            setCarouselNum(0);
        }
    }, 4000)

    return (
        <>
            {isLogin ?
                <>
                    <div className="home-cont">
                        <button className='carousel-btn left' onMouseEnter={() => setLeftBtn(true)} onMouseLeave={() => setLeftBtn(false)} style={leftbtn ? { backgroundImage: `url(${CarouselData[carouselNum].img})` } : { backgroundImage: `none` }} ><FaChevronLeft fontSize={30} /></button>
                        {/* <button>one</button> */}
                        <div className="ball">
                            <div className="ball-images">
                                <img key={CarouselData[carouselNum].id} className='sneaker' src={CarouselData[carouselNum].img} alt="" />
                                <h3 className='title'>{CarouselData[carouselNum].title}<br />{CarouselData[carouselNum].title2}</h3>
                                <img className='grid-dots' src={"https://demo.kallyas.net/sneakers-shop/wp-content/uploads/sites/107/revslider/homeslider/grid_dots.png"} alt="" />
                            </div>
                        </div>
                        {/* <button className='carousel-btn right' style={{ backgroundImage: `url(${CarouselData[carouselNum].img})` }}>Two</button> */}
                        <button className='carousel-btn right' onMouseEnter={() => setRightBtn(true)} onMouseLeave={() => setRightBtn(false)} style={rightbtn ? { backgroundImage: `url(${CarouselData[carouselNum].img})` } : { backgroundImage: `none` }} ><FaChevronRight fontSize={30} /></button>
                    </div>
                    <CoverImages />
                    <FeaturedProduct male={true} />
                    <FeaturedProduct male={false} />
                </> :
                <>
                    <h1>You Have To Login First</h1>
                    <button onClick={redirectToLogin}>Login</button>
                </>}

        </>
    )
}

export default Home



// {isLogin ? <>
//     <h1>home</h1>
//     {NikeData.map((item) => {
//         return (
//             // <p>{item.brand}</p>
//             <>

//                 <img src={item.Images[0]} alt="" width={300} />
//                 <p>{item.price}</p>
//             </>
//         )
//     })}
// </> :
//     <>
//         <h1>You Have To Login First</h1>
//         <button onClick={redirectToLogin}>Login</button>
//     </>}
