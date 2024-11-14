import heroImg from "../../assets/fruit-plate.png"
import { IoBagHandleOutline } from "react-icons/io5";
import leaf from "../../assets/leaf.png"
import { motion } from "framer-motion";

const Hero = () => {

    const fadeleft = (delay)=>{
        return {
            hidden :{
                opacity : 0 ,
                x : -150
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
     <section className="relative" id="home">
        <div className="container flex flex-col lg:flex-row items-center py-10 lg:py-0 gap-12 md:gap-0 ">

        <div className="w-full lg:w-1/2 space-y-5 text-center md:text-left">
           <div
           className=" text-5xl lg:text-6xl font-serif font-bold lg:leading-relaxed space-y-6 md:space-y-0">
           <motion.h1
             variants={fadeleft(0.3)}
             initial = "hidden"
             animate ="show"
           >Healthy 
                </motion.h1>

                <motion.h1
                  variants={fadeleft(0.4)}
                  initial = "hidden"
                  animate ="show"
                >Fresh <span className="text-primary">Fruits!</span></motion.h1>
           </div>
                <motion.h5 
                  variants={fadeleft(0.5)}
                  initial = "hidden"
                  animate ="show"
                className="text-2xl tracking-wider">Order Now For Fresh Healthy Life</motion.h5>
                <motion.p 
                    variants={fadeleft(0.6)}
                    initial = "hidden"
                    animate ="show"
                className="text-gray-500">Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order</motion.p>
                <motion.button
                    variants={fadeleft(0.7)}
                    initial = "hidden"
                    animate ="show"
                    whileHover={{scale:1.1 , transition :{duration : 0.05}}}
                className="btn-secondary flex gap-2 items-center m-auto md:m-0"> <span className="text-lg font-bold"><IoBagHandleOutline/></span> Order Now</motion.button>
        </div>

        <motion.div
        initial = {{opacity : 0 , rotate : 75 , x : 200}}
        animate ={{opacity :1 , rotate : 0 , x : 0}}
        transition={{delay : 0.3 , duration : 1}}
        className="w-full lg:w-1/2">
            <img src= {heroImg} loading="lazy" alt="heroImg" />
        </motion.div>

        </div>

        <div
     
        className=" absolute top-10 left-[300px] rotate-[35deg] blur-[4px] opacity-80 ">
            <motion.img
                    initial = {{opacity : 0 , rotate : 75 , y : -200}}
                    animate ={{opacity :1 , rotate : 0 , y : 0}}
                    transition={{delay : 1.4 , duration : 1}}
            className=" w-full md:w-1/2" src= {leaf} alt="leaf" />
        </div>
     </section>
    </>
  )
}

export default Hero
