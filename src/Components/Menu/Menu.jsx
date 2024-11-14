import { useContext } from "react";
import { menuFruit } from "./MenuData";
import { motion } from "framer-motion";
import { ShopContext } from "../Context/ShopContext";

const Menu = () => {
    const {addCart} = useContext(ShopContext)

    const faderight = (delay)=>{
        return {
            hidden :{
                opacity : 0 ,
                x : 150
            } ,

            show :{
                opacity :1 ,
                x : 0 ,
                transition : {
                    delay : delay ,
                    duration : 1
                }
            } 
        }
    }
  return (
    <>
      <div className="container py-20 space-y-6 lg:space-y-0 " id="products">
        <h2 className="text-3xl font-bold py-10">Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuFruit.map((ele,index)=>{
                return (
                    <motion.div
                    onClick={()=>addCart(ele.id)}
                    variants={faderight(0.2*index)}
                    initial = "hidden"
                    whileInView= "show"
                    whileHover={{scale : 1.08 , transition :{duration : 0.2}}}
                    whileTap={{
                        scale: 0.95, 
                        transition: { duration: 0.1 }, 
                    }}
                    className="flex items-end gap-3 shadow-[0px_0px_20px_rgba(0,0,0,0.15)] px-5 py-1 rounded-3xl cursor-pointer" key={ele.id}>
                        <img className="w-[80px] -translate-y-10" loading="lazy" src= {ele.img} alt="imgFruit" />
                        <div>
                            <p className="text-lg font-semibold">{ele.name}</p>
                            <p className="font-bold text-primary text-lg"> {ele.price} </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Menu
