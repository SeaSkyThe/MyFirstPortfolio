import React from 'react'

function About(){

    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Marcelo, i'm glad that you are here. Take a look around.</p>    
                    </div> 
                    <div>
                        <p>
                            I am passionate about learning constantly, and i'm chasing opportunities to impact and improve other people's lives by constructing good solutions.
                            I'm an undergraduate student at São Paulo State University (UNESP) focusing mostly in backend, but with a good knowledge in frontend development.
                            I also have a little bit of Data Science background, and, last but not least, i love cats.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;