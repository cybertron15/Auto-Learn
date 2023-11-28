import React from 'react'
import Home from '../components/Home'
import HomeMenu from '../components/HomeMenu'

function Root() {
  return (
    <>
      <div className='h-full grid grid-cols-5 grid-rows-1'>
        <HomeMenu></HomeMenu>
        <div className='col-span-4'>
        </div>
      </div>
    </>
  )
}

export default Root