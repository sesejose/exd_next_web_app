'use client';

// import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";

import Image from "next/image";
//import Context from "./Context";
//import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'next-view-transitions'
import exd_logo_color from "../../../public/exd_logo_color.svg";
import { Squash as Hamburger } from 'hamburger-react'

//import Basket from "./Basket";
// import general from "../../app/styles/general.css"

export default function Nav() {
  //const context = useContext(Context);
  const [isOpen, setOpen] = useState(false)

  function openMenu() {
    const menu = document.querySelector("#menu");
    // const iconMenuOpen = document.querySelector("#icon-menu-open");
    // const iconMenuClose = document.querySelector("#icon-menu-close");
    if (menu.style.display === "flex") {
      menu.classList.remove('menu-in');
      menu.classList.add('menu-out');
      // menu.style.display = "none";
      // iconMenuOpen.classList.remove("hide");
      // iconMenuClose.classList.add("hide");
    } else {
      menu.classList.remove('menu-out');
      menu.classList.add('menu-in');
      menu.style.display = "flex";
      // iconMenuOpen.classList.add("hide");
      // iconMenuClose.classList.remove("hide");
    }
  }

  function closeMenu() {
    const menu = document.querySelector("#menu");
    const submenu = document.querySelector("#submenu");
    // const iconMenuOpen = document.querySelector("#icon-menu-open");
    // const iconMenuClose = document.querySelector("#icon-menu-close");
    if (menu.style.display === "flex") {
      menu.classList.remove('menu-in');
      menu.classList.add('menu-out');
      menu.style.display = "none";
      setOpen(false)
      // iconMenuOpen.classList.remove("hide");
      // iconMenuClose.classList.add("hide");
    }
    if (submenu.style.display === "flex") {
        submenu.style.display = "none";
    }
  }

  function openSubmenuDesk() {
    const submenu = document.querySelector("#submenu");
    if (submenu.style.display = "none") {
      submenu.style.display = "flex";
      // submenu.style.opacity = "1";
      // submenu.style.height = "auto";
    }
  }
  
  function closeSubmenuDesk() {
    const submenu = document.querySelector("#submenu");
    if (submenu.style.display = "flex") {
      submenu.style.display = "none";
      // submenu.style.opacity = "0";
      // submenu.style.height = "0";
    }
  }
  
  return (
    <>
      <nav className="nav">

        <div className="nav-container">
          <div className="logo">
            {/* Logo  */}
            <Link href={"/"} onClick={closeMenu}>
              <Image className="logo" src={exd_logo_color} alt={""} width={"188.71"} height={"90"} priority sizes="(max-width: 700px) 100vw, 700px" />
            </Link>
          </div>

          <div id="menu-desk">
            <ul onMouseOut={closeSubmenuDesk}>
              <li>
                <Link href={"/solution"}>
                  <p>Solution</p>
                </Link>
              </li>
              <li onMouseOver={openSubmenuDesk}>
                <Link href={"/products"}>
                  <p>Products</p>
                </Link>
                <ul id="submenu" className="" onMouseOut={closeSubmenuDesk}>
                  <li><Link href={"/fourme"}><p>4me</p></Link></li>
                  <li><Link href={"/autommate"}><p>Autom Mate</p></Link></li>
                </ul>
              </li>
              <li>
                <Link href={"/customers"}>
                  <p>Customer Stories</p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <p>Insights</p>
                </Link>
              </li>    
              <li>
                <Link href={'/contact'}>
                  <p>Contact Us</p>
                </Link>
              </li> 
            </ul>
          </div>

          <div className="icons-nav-container">
            <Link href={""} className="icons-gradient phone-nav">
              <div className="flex-row-space-around">
                <span className="material-symbols-rounded">phone</span>
                <p className="">12 34 56 78</p>
              </div>
            </Link>

            <Link href={""} className="icons-gradient hide" >
                <p className="">DK</p>
            </Link>

            <Link href={""} className="icons-gradient hide">
              <span className="material-symbols-rounded">search</span>
            </Link>

            {/* <Link href={""} className="open" onClick={openMenu}>
              <div className="flex-column icons-gradient">
              <span id="icon-menu-open" className="material-symbols-rounded">menu</span>
              <span id="icon-menu-close" className="material-symbols-rounded hide">close</span>
              </div>
            </Link> */}

                {/* <div className="counter">Menu</div> */}

            <div className="open">
            <Hamburger size={24} 
            toggled={isOpen} 
            toggle={setOpen} 
            onToggle={toggled => {
                if (toggled) {
                  openMenu();
                } else {
                  closeMenu();
                }
              }}/>
              

            </div>

          </div>
        </div>

        <div id="menu">
          <ul>
            <li>
              <Link className="" href={"/solution"} onClick={closeMenu}>
                Solution
              </Link>
            </li>
            <li>
              <Link className="" href={"/products"} onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link className="" href={"/fourme"} onClick={closeMenu}>
                4me
              </Link>
            </li>
            <li>
              <Link className="" href={"/autommate"} onClick={closeMenu}>
                Autom Mate
              </Link>
            </li>
            <li>
              <Link className="" href={"/customers"} onClick={closeMenu}>
                Customer Stories
              </Link>
            </li>
            <li>
              <Link className="" href={"/about"} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/blog"} onClick={closeMenu}>
                Insights
              </Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link href={""}>
                <p>Kurv</p>
              </Link>
            </li> */}
            {/* <li>
              <Link href={""} onClick={closeMenu}>
                <p>Log ind</p>
              </Link>
            </li> */}
          </ul>
        </div>

      </nav>
    </>
  );
}