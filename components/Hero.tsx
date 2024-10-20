import React from 'react';
import HomeForm from './HomeForm';

function Hero() {
    return (
        <section
            className='relative text-white flex flex-col items-center justify-center'
            style={{
                backgroundImage: "url('/main-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: 1 / 1,
            }}
        >
            <div className='z-50 w-full'>
                <div className='text-4xl font-bold text-center'>
                    <h1> Stylish Interiors. </h1>
                    <h1 className='text-orange-500'> Smart Budget. </h1>
                </div>
                <p className='text-lg text-center '>Concept to Construction <br />Your complete home interiors solution.</p>
                <br />
                <HomeForm/>
            </div>
            <div className='w-full h-full absolute top-0 left-0 bg-black/50 ' />
        </section>
    );
}

export default Hero;
