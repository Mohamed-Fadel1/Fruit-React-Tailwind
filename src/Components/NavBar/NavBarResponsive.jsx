import { AnimatePresence } from "framer-motion";
import { links } from "./NavBarLinks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const NavBarResponsive = ({ open }) => {
  const { getTotalItems } = useContext(ShopContext);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden absolute h-screen w-full top-20 left-0 z-20"
          >
            <ul className="flex flex-col items-center gap-5 py-5 text-white bg-secondary m-6 rounded-3xl text-2xl">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <Link to="cart" className="relative">
                                <p className="absolute -top-2 left-6 text-sm bg-primary w-5 h-5 flex justify-center items-center rounded-full text-white">
                                    {getTotalItems()}
                                </p>
                                <MdOutlineShoppingCart className="text-4xl" />
                            </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


NavBarResponsive.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default NavBarResponsive;
