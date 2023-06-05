import React from 'react'
import SUV from './Images/icon-suvs.png'

const SUVs = () => {
    return (
    <>
        <div className='p-5 bg-DCyan'>
            <img src={SUV} alt={'SUV'} className='w-9 h-9 m-5' />
            <h1 className='font-BS m-5 text-4xl text-Gray'>SUVS</h1>
            <p className='font-LD text-[15px] m-5 w-52 text-White'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <button className='border border-solid rounded-full p-3 px-9 font-LD text-[15px] m-5 bg-white text-DCyan hover:border hover:border-solid hover:border-white hover:bg-DCyan hover:text-Gray'>Learn More</button>
        </div>
    </>
    )
}

export default SUVs;