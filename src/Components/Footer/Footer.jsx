import { FaLeaf } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <>
      <footer className="bg-secondary/10 py-14" id="contact">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="text-2xl font-bold flex items-center gap-2">
                        <p className="text-secondary">FRUIT</p>
                        <p className="text-primary">STORE</p>
                        <FaLeaf className="text-green-500"/>
                    </div>

            <div className="flex items-center gap-4 text-3xl cursor-pointer">
                <FaInstagram/>
                <FaFacebook/>
                <IoLogoYoutube/>
                <FaTwitter/>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
