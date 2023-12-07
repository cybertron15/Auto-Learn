import { TextField, Button,IconButton } from '@radix-ui/themes'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import InputField from '../components/InputField'
InputField
function Login() {
  return (
    <div id='loginbg' className='h-full bg-cover grid grid-cols-6'>
      <div className='lg:col-span-4'>

      </div>
      <div className='col-span-2 bg-white rounded-s-XXXL text-center'>
        <h1 className='text-5xl font-inter font-bold mt-36'> Hello Friend! </h1>
        <p className='text-2xl mt-1 text-slate-500'>lets learn new stuff today</p>
        <div className='flex flex-col mt-12 mx-16 gap-3'>
          {/* <form action="" method="post"> */}
          <InputField type={'email'}></InputField>
          <InputField type={'password'}></InputField>
            <Button variant="solid" radius='large' className='w-full'>
              Login
            </Button>
            <Button variant="" radius='large' className='w-full'>
              Signup
            </Button>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default Login