import React,{ useEffect, useState }  from 'react'
import CartItem from '../../components/Itemcart';
import { SBooking } from './style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Booking = () => {
    const image_path='https://image.tmdb.org/t/p/w500'
    const [carts, setCarts] = useState([]);
    const movieItem=JSON.parse(localStorage.getItem('itemBook'))
const navigate = useNavigate();
useEffect(() => {
    const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    if(!current){
        navigate('../sign-in', {replace: true});
        toast.error('Bạn cần phải đăng nhập trước!');
        return;
    }})
    const [count,setcount] =useState(0);
    useEffect(() =>{
        const fc=localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) : 0;
        setcount(fc);
    },[])
    const handlePay = (e) => {
        const usersbooked = localStorage.getItem('usersbooked') ? JSON.parse(localStorage.getItem('usersbooked')) : [];
        const idTicket = uuidv4();
        const nameFilm=movieItem.original_title;
        const price=count*70000;
        const date= new Date();
        const newUser = {
            price,
            count,
            idTicket,
            nameFilm,
            date,
        }
        localStorage.setItem('usersbooked', JSON.stringify([...usersbooked, newUser]));
        toast.success('Movie order successfully!!!');
    }
  const handleIncreaseCount = () => {
    const a=count+1;
    setcount(a);
    localStorage.setItem("count",a);
  }
    
  const handleDecrease = (id) => {
    const a=count-1;
    setcount(a);
    localStorage.setItem("count",a);
  }

  return (
    <SBooking>
      <h1 className="total-carts">Your film is </h1>
      <div className="list-cart">
          <CartItem
            count={count}
            cart={movieItem}
            url={image_path+ movieItem.poster_path}
            handleIncreaseCount={handleIncreaseCount}
            handleDecrease={handleDecrease}
            handlePay={handlePay}
          />
      </div>
    </SBooking>
  );
}

export default Booking
