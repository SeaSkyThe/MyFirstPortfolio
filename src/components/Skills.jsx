import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Django from '../assets/django.png'
import Flask from '../assets/flask.png'
import Mongo from '../assets/mongo.png'
import Postgresql from '../assets/postgresql.png'

function Skills() {

return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>- These are the technologies that I'm comfortable with.</p>
            </div>

            {/* COntainer for all icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon" />
                    <p className='my-4'>React</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={Django} alt="Django icon" />
                    <p className='my-4'>Django</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={Flask} alt="Flask icon" />
                    <p className='my-4'>Flask</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={Postgresql} alt="Postgresql icon" />
                    <p className='my-4'>Postgresql</p>
                </div>

                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0e1b2e]'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-4'>Mongo</p>
                </div>
            </div>
        </div>
    </div>
);
  
}
export default Skills;