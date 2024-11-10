"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">My Name Is Hina Salman </h2> <br /><br />
    <div className="md:w-3/5 md:pl-6">
    <Typewriter
  options={{
    strings: ['i Have A skill To Make New Websites And Applications', 'I Have A Skill to Make New UI/UX Design Maker And Development Of New Ai Agents'],
    autoStart: true,
    loop: true,
  }}
/> <br /><br />

      <div className="flex md:mt-4 mt-6">
        <a className="text-indigo-500 inline-flex items-center ml-4">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Skills
