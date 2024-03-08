'use client';

// import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";

import Image from "next/image";
//import Context from "./Context";
//import { useContext } from "react";
import Link from "next/link";
import exd_logo_color from "../../../public/exd_logo_color.svg";

//import Basket from "./Basket";
// import general from "../../app/styles/general.css"

export default function Nav() {
  //const context = useContext(Context);
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
                  <li><Link href={"/fourme"}><p>Autom Mate</p></Link></li>
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
            </ul>
          </div>
          <div className="icons-nav-container">
            <Link href={""} className="icons-gradient phone-nav">
              <div className="flex-row-space-around">
                <span className="material-symbols-rounded">phone</span>
                <p className="">12 34 56 78</p>
              </div>
            </Link>

            <Link href={""} className="icons-gradient hiden" >
                <p className="">DK</p>
            </Link>

            <Link href={""} className="icons-gradient hiden">
              <span className="material-symbols-rounded">search</span>
            </Link>

            <Link href={""} className="open" onClick={openMenu}>
              <div className="flex-column icons-gradient">
              <span className="material-symbols-rounded">menu</span>
                {/* <div className="counter">Menu</div> */}
              </div>
            </Link>

            


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
              <Link className="" href={"/fourme"} onClick={closeMenu}>
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

function closeAll() {
  closeMenu();
}

function openMenu() {
  const menu = document.querySelector("#menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function openSubmenuDesk() {
  const submenu = document.querySelector("#submenu");
  if (submenu.style.display = "none") {
    submenu.style.display = "flex";
  }
}

function closeSubmenuDesk() {
  const submenu = document.querySelector("#submenu");
  if (submenu.style.display = "flex") {
    submenu.style.display = "none";
  }
}

function closeMenu() {
  const menu = document.querySelector("#menu");
  const submenu = document.querySelector("#submenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
  if (submenu.style.display === "flex") {
    submenu.style.display = "none";
  }
}
