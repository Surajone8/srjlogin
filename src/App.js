import React from 'react';
import LogSign from "./pages/LogSign"
// import BrowserRouter from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useAppContext } from './contexts/Context';


function App() {
  const { isLogin } = useAppContext();
  // const [username, setUsername] = useState('');
  // const [productId, setProductId] = useState('');
  // const [quantity, setQuantity] = useState('');
  // const [user, setuser] = useState(null);
  // const navigate = useNavigate();


  // const UserExists = () => {

  // }





  // UserExists();

  // const handleAddToCart = async () => {
  //   try {
  //     const parsedQuantity = parseInt(quantity, 10);
  //     await axios.post('http://localhost:5000/add-to-cart', { username, productId, quantity: parsedQuantity });
  //     console.log('Item added to cart successfully!');
  //   } catch (error) {
  //     console.error('Failed to add item to cart:', error.response.data.error);
  //   }
  // };

  return (
    <>
      {isLogin ? <Navbar /> : ""}

      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <p>---------------------------------------------------------------------------------------</p>
      <div className="App">
        <h1>Shopping Cart</h1>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div> */}
      {/* <LogSign /> */}
      <Routes>
        <Route path="/" element={<LogSign />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>

  );
}

export default App;

