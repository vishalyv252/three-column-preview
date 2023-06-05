import React from 'react'
import Luxurys from './Images/icon-luxury.png'

const Luxury = () => {
    return (
    <>
        <div className='p-5 bg-VDCyan rounded-r-lg Tablet:rounded-r-none Tablet:rounded-b-lg'>
            <img src={Luxurys} alt={'Luxurys'} className='w-9 h-9 m-5' />
            <h1 className='font-BS m-5 text-4xl text-Gray'>LUXURY</h1>
            <p className='font-LD text-[15px] m-5 w-52 text-White'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            <button className='border border-solid rounded-full p-3 px-9 font-LD text-[15px] m-5 bg-white text-VDCyan hover:border hover:border-solid hover:border-white hover:bg-VDCyan hover:text-Gray'>Learn More</button>
        </div>
    </>
    )
}

export default Luxury;