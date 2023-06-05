import React from 'react'
import Sedan from './Images/icon-sedans.png'

const Sedans = () => {
    return (
    <>
        <div className='p-5 bg-BOrange rounded-l-lg Tablet:rounded-t-lg Tablet:rounded-b-none'>
            <img src={Sedan} alt={'Sedan'} className='w-9 h-9 m-5' />
            <h1 className='font-BS m-5 text-4xl text-Gray'>SEDANS</h1>
            <p className='font-LD text-[15px] m-5 w-52 text-White'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className='border border-solid rounded-full p-3 px-9 font-LD text-[15px] m-5 bg-white text-BOrange hover:border hover:border-solid hover:border-white hover:bg-BOrange hover:text-Gray'>Learn More</button>
        </div>
    </>
    )
}

export default Sedans;