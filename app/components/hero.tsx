"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">My Name Is Hina Salman And I Am :
        <Typewriter
  options={{
    strings: [' A professional ai engineer and web developer  ', 'A Professional Government Teacher'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">I Am From Karachi Pakistan And I Have So many Different Kind Of Skills like C++ Engineer and robotic Engineer</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Projects</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Skills</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image width={400} height={400} className="object-cover object-center rounded mx-auto w-[20rem]" alt="hero" src={require("../../../public/assets/picture/WhatsApp Image 2024-03-16 at 12.41.29 AM.jpeg")} />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
