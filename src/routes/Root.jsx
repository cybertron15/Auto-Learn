import React from 'react'
import Home from '../Pages/Home'
import HomeMenu from '../components/HomeMenu'
import { Avatar, Heading, Text, Badge } from '@radix-ui/themes'
import CustomBadge from '../components/CustomBadge'

function Root() {
  return (
    <>
      <div className='h-full grid grid-cols-5 grid-rows-1'>
        <HomeMenu></HomeMenu>
        <div className='col-span-4 h-full flex flex-col'>
          <div className='basis-1/5'>
            <div className='grid grid-cols-12 ms-4'>
              <div className='mt-3'>
                <Avatar
                  radius="full"
                  size="7"
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="A"
                  className='hover:ring-2 ring-lime-300 cursor-pointer'
                />
              </div>
              <div className='col-span-10 ms-8'>
                <div className='mt-2'>
                  <Heading size="8" color='grass'>Welcome Palash Dhavle</Heading>
                </div>
                <div className="mt-2">
                  <div className='flex gap-3'>
                    <CustomBadge label="Topic Completed" value="50"></CustomBadge>
                    <CustomBadge label="Tests taken" value="55"></CustomBadge>
                  </div>
                  <div className='flex gap-3'>
                    <CustomBadge label="Topics generated" value="43"></CustomBadge>
                    <CustomBadge label="Lessons completed" value="32"></CustomBadge>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div>
            he
          </div>
        </div>
      </div>
    </>
  )
}

export default Root