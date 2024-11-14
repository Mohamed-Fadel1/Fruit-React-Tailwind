import imgAbout from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";

const About = () => {
    const fadeup = (delay)=>{
        return {
            hidden :{
                opacity : 0 ,
                y : 70
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
  return (
    <>
      <section className="bg-primary/10 " id="about">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-10 py-10">
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    className="lg:w-1/3"
>
    <img className="w-[300px]" loading="lazy" src={imgAbout} alt="fruits-splash" />
</motion.div>

            <div className="lg:w-[450px] space-y-4 text-center md:text-left">
                <motion.h1 
                  variants={fadeup(0.2)}
                  initial = "hidden"
                  whileInView= "show"
                className=" uppercase text-4xl lg:text-6xl font-bold">Brand Info</motion.h1>
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
                className=" capitalize btn-secondary">learn more</motion.button>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
