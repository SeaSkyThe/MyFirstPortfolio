import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

import TypeAnimation from 'react-type-animation';

function Home() {

    
    return (
        <div name='home' className=" w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-pink-600">
                        Hi, my name is
                    </p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Marcelo Eduardo</h1>
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
                        <TypeAnimation
                            cursor={true}
                            sequence={["I'm a Full Stack Developer.", 1600, "Backend lover.", 1600, "Passionate about tech.", 1600,"A cat person.", 1600, "I'm a Full Stack Developer."]}
                        />
                    </h2>
                    
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Brazilian full stack developer. My personal objective is to give people
                        awesome digital experiences and impact their lives. I am currently focusing on backend, and in maintaining myself in a continuous learning process.
                    </p>
                    <Link className="flex items-center" to="work" smooth={true} duration={500}>
                    <div>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                           Works                            
                            <span className="group-hover:rotate-90 duration-300"> 
                                <HiArrowNarrowRight className="ml-3"/>
                            </span>
                            
                            
                        </button>
                        
                    </div>
                    </Link>
                    
            </div>
        </div>

    );
}


export default Home;