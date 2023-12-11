import { TextField, Button, IconButton } from '@radix-ui/themes'
import { Github, Mail } from 'lucide-react'
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
        <form action="" method="post">
          <div className='flex flex-col mt-12 mx-16 gap-3'>
            <InputField type={'email'} size="3"></InputField>
            <InputField type={'password'} size="3"></InputField>
            <Button type='button' size={"3"} variant="solid" radius='large' className='w-full' style={{cursor:"pointer"}}>
              Login
            </Button>
            <Button type='button' size={"3"} variant="outline" radius='large' className='w-full' style={{cursor:"pointer"}}>
              Signup
            </Button>
            <div className="flex gap-2">
              <Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{cursor:"pointer"}}>
                Signup using <Mail color='red'/>
              </Button>
              <Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{cursor:"pointer"}}>
                Signup using <Github/>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login