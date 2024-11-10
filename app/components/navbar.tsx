import Image from 'next/image'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import imageUrl from 'path/to/image.jpg';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={require("../../../public/assets/picture/logo hina.webp")} alt="hina" width={100} height={100} className="w-7" />
      <span className="ml-1 text-xl font-bold font-sans">Hina Salman </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-purple-600">Home</a>
      <a className="mr-5 hover:text-purple-600">About</a>
      <a className="mr-5 hover:text-purple-600">Skills</a>
      <a className="mr-5 hover:text-purple-600">Contact Me </a>
    </nav>
    <a href='/assets/cv/hina.pdf'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-2 ">
        
        Download Cv 
      
   <FaCloudDownloadAlt />
    </button>
</a>
  </div>
</header>
    </div>
  )
}

export default Navbar
