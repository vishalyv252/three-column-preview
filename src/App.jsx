import React from 'react'
import Luxury from './Components/Luxury';
import Sedans from './Components/Sedans';
import SUVs from './Components/SUVs';

const App = () => {
  return (
  <>
    <div className='flex justify-center items-center h-screen w-full Tablet:overflow-y-auto Tablet:overflow-x-hidden Tablet:h-auto'>
      <div className='flex justfiy-center items-center h-auto w-auto m-5 flex-row Tablet:flex-col Tablet:w-96'>
        <Sedans />
        <SUVs />
        <Luxury />
      </div>
    </div>
  </>
  )
}

export default App;