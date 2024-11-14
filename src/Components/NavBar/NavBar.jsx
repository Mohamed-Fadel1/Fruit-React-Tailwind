import { links } from "./NavBarLinks";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import NavBarResponsive from "./NavBarResponsive";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { getTotalItems } = useContext(ShopContext);

    return (
        <>
            <nav className="sticky top-0 z-20 bg-gray-50">
                <div className="container flex justify-between items-center py-8">
                    <div className="text-2xl font-bold flex items-center gap-2">
                        <p className="text-secondary">FRUIT</p>
                        <p className="text-primary">STORE</p>
                        <FaLeaf className="text-green-500" />
                    </div>

                    <div>
                        <div className="items-center gap-10 hidden md:flex">
                            {links.map((link) => (
                                <a
                                    key={link.id}
                                    href={`${link.link}`} 
                                    className="text-gray-600 text-lg hover:text-red-600 hover:border-b-2 hover:border-red-500"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link to="cart" className="relative">
                                <p className="absolute -top-2 left-6 text-sm bg-secondary w-5 h-5 flex justify-center items-center rounded-full text-white">
                                    {getTotalItems()}
                                </p>
                                <MdOutlineShoppingCart className="text-4xl" />
                            </Link>
                        </div>
                    </div>

                    <IoMdMenu onClick={() => setOpen(!open)} className="text-4xl cursor-pointer lg:hidden" />
                </div>

                <NavBarResponsive open={open} />
            </nav>
        </>
    );
};

export default NavBar;
