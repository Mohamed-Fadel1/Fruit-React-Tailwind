import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { menuFruit } from "../Menu/MenuData"
import close from "../../assets/cart_cross_icon.png"
import { Link } from "react-router-dom"
const Cart = () => {

  const {cart ,removeCart ,clearCart} = useContext(ShopContext);

  const total = menuFruit.reduce((acc , ele)=> {
    return acc + (cart[ele.id] || 0) * ele.price
  },0)

  return (
    <>
      <div className="container">
        <div className=" flex items-center justify-between">
          <Link to={"/fruit"}>          <button className="text-white bg-primary px-6 py-2 rounded-xl active:scale-90 duration-75 hover:bg-orange-500 my-5 ">Back Shop</button>
          </Link>
        <button onClick={()=>{clearCart()}} className="text-white bg-primary px-6 py-2 rounded-xl active:scale-90 duration-75 hover:bg-orange-500 my-5 ">Clear Cart</button>

        </div>
        {menuFruit.map((fruit)=>{
          if (cart[fruit.id] > 0) {
            return (
              <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-20 border-b-2 p-2" key={fruit.id}>
                <img className="w-20" loading="lazy" src= {fruit.img} alt="" />
              <p className="font-bold text-xl"> Name : <span className="text-secondary">{fruit.name}</span> </p>
              <p className="font-bold text-xl"> Price : <span className="text-secondary">{fruit.price}</span> </p>
              <p className="font-bold text-xl">Quantity : <span className="text-secondary"> {cart[fruit.id]} </span></p>
              <p className="font-bold text-xl">Total : <span className="text-secondary"> {(cart[fruit.id]* fruit.price).toFixed(2)} </span></p>
              <p onClick={()=>removeCart(fruit.id)} className="font-bold text-xl cursor-pointer"> <img src= {close} alt="close" /> </p>
              </div>
              
            )

          }

          return null
        })}

        <div className="text-3xl mt-10 mb-6 font-bold">Cart Totals : <span className="text-primary">{total.toFixed(2)}</span> </div>
      </div>
    </>
  )
}

export default Cart
