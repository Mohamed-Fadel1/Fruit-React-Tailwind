import bannerImg from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
const Banner = () => {

    const fadeup = (delay)=>{
        return {
            hidden :{
                opacity : 0 ,
                y : 100
            } ,

            show :{
                opacity :1 ,
                y : 0 ,
                transition : {
                    delay : delay ,
                    duration : 1
                }
            } 
        }
    }

    const bgStyle = {
        backgroundImage: `url(${bannerImg})`, 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
          backgroundAttachment: "fixed"
    };
    
  return (
    <>
        <div className="container py-10">
            <div style={bgStyle} className="rounded-3xl">
               <div className="flex items-center justify-around py-20">
                    <div></div>
                    <div className="lg:w-[450px] space-y-4 text-center md:text-left">
                <motion.h1 
                  variants={fadeup(0.2)}
                  initial = "hidden"
                  whileInView= "show"
                className=" uppercase text-4xl lg:text-6xl font-bold">Get Fresh Fruits Today</motion.h1>
                <motion.p
                   variants={fadeup(0.3)}
                   initial = "hidden"
                   whileInView= "show"
                className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            
                <motion.button 
                   variants={fadeup(0.5)}
                   initial = "hidden"
                   whileInView= "show"
                   whileHover={{scale : 1.1 , transition :{duration : 0.05}}}
                className=" capitalize btn-secondary">learn more</motion.button>
            </div>
               </div>
            </div>
        </div>
  </>
  )
}

export default Banner
