import React from 'react'

import placeholderImg from '../assets/placeholder.png'

import expensesAppImg from '../assets/works/expensesapp.png'
import recommenderAppImg from '../assets/works/recommenderapp.png'
function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] work-page'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Works</p>
                <p className='py-6'>- Check out some of my works</p>
            </div>

            {/* Grid container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 rounded-md'>
                {/* Card container */}
                <div style={{backgroundImage: `url(${expensesAppImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Expenses and Incomes Management
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://personalexpensesapp.herokuapp.com/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/SeaSkyThe/ExpensesMonitorWebApp" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                {/* Card container */}
                <div style={{backgroundImage: `url(${recommenderAppImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Movie Recommender
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://movierecommenderwebapp.herokuapp.com/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/SeaSkyThe/ML-models-web-app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card container */}
                <div style={{backgroundImage: `url(${placeholderImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 3
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card container */}
                <div style={{backgroundImage: `url(${placeholderImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 4
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card container */}
                <div style={{backgroundImage: `url(${placeholderImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 5
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card container */}
                <div style={{backgroundImage: `url(${placeholderImg})`}} className='shadow-lg -shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 6
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work;