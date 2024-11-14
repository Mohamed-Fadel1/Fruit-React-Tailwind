import shopImg from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";

const Shop = () => {

    const fadeup = (delay)=>{
        return {
            hidden :{
                opacity : 0 ,
                x : 100
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
      <div className="container flex flex-col lg:flex-row py-20 items-center justify-between" id="shop">

        <div className="lg:w-[400px] text-center md:text-left">
            <div className="space-y-5">
                <motion.h2 
                    variants={fadeup(0.2)}
                    initial = "hidden"
                    whileInView= "show"
                className=" text-3xl lg:text-6xl font-bold uppercase">Online Fruit Store</motion.h2>
                <motion.p 
                   variants={fadeup(0.3)}
                   initial = "hidden"
                   whileInView= "show"
                className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
                <motion.p
                   variants={fadeup(0.4)}
                   initial = "hidden"
                   whileInView= "show"
                className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>

                <motion.button
                     variants={fadeup(0.5)}
                     initial = "hidden"
                     whileInView= "show"
                     whileHover={{scale : 1.1 , transition :{duration : 0.05}}}
                className="btn-secondary">Download The App</motion.button>
            </div>
        </div>

        <motion.div
             initial = {{opacity : 0 , rotate : 75 , x : 200}}
             whileInView ={{opacity :1 , rotate : 0 , x : 0}}
             transition={{delay : 0.3 , duration : 1}}
        className="lg:w-[450px]">
            <img className="w-[400px]" loading="lazy" src= {shopImg} alt="fruit-plate2" />
        </motion.div>

      </div>
    </>
  )
}

export default Shop
