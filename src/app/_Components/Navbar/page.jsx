'use client'

import Link from "next/link";
import logo from '../../Public/images/logo.png'
import Image from "next/image";
import { usePathname } from "next/navigation";
import '../../globals.css'
import { useState } from "react";


export default function Navbar() {


  let pathName = usePathname()





  return (
    <>


      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link href={'/'}><Image src={logo} alt="" width={70} height={70} /> </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-2x text-white fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2  mb-lg-0">
              <li className="nav-item text-white">
                <Link className={`${pathName === '/Categories' ? 'active' : ''}  nav-link text-white fw-bold`} href={'/Categories'}>Categories</Link>
              </li>
              <li className="nav-item">
                <Link className={`${pathName === '/Area' ? 'active' : ''}  nav-link text-white fw-bold`} href={'/Area'}>Area</Link>
              </li>

              <li className="nav-item">
                <Link className={`${pathName === '/Ingredients' ? 'active' : ''}  nav-link text-white fw-bold`} href={'/Ingredients'}>Ingredients</Link>
              </li>
              <li className="nav-item">
                <Link className={`${pathName === '/ContactUs' ? 'active' : ''}  nav-link text-white fw-bold`} href={'/ContactUs'}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className={`${pathName === '/Search' ? 'active' : ''}  nav-link text-white fw-bold`} href={'/Search'}>Search</Link>
              </li>


            </ul>
            <div className="sideBar-copyrirht-icon d-flex">
              <div className="facebook-icon mx-2 text-white">
                <a href="https://drive.google.com/file/d/1jLwtMijBmu02qvOTBpzOd9E3jhThoS5f/view?usp=sharing" target="_blank" className="text-decoration-none text-white"><i className="fa-solid fa-envelope fa-2x text-warning" /></a>
              </div>
              <div className="twiter-icon mx-2 text-white">
                <a href="https://www.linkedin.com/in/eslam-elsayed-7273a926b" target="_blank" className="text-decoration-none text-white"><i className="fa-brands fa-linkedin fa-2x text-warning" />
                </a>
              </div>
              <div className="chrome-icon mx-2 text-white">
                <a href="https://github.com/Elsamelsayedd" target="_blank" className="text-decoration-none text-white"><i className="fa-brands fa-github fa-2x text-warning" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>


    </>
  )



}
