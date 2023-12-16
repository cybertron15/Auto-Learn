import React, { useRef, useState } from 'react'
import { Button } from '@radix-ui/themes'
import { Github, Mail } from 'lucide-react'
import InputField from './InputField'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function SignupComponent({ handleMove }) {
    const pass = useRef()
    const pass2 = useRef()
    const handleSubmit = (event) => {
        console.log(pass.current.value , pass2.current.value);
        if (pass.current.value !== pass2.current.value) {
            event.preventDefault()
            toast.error('Password not matching!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
    return (
        <>
        <div className='w-96'>
            <form action="" method="" className='w-96' onSubmit={handleSubmit}>
                <div className='flex flex-col mt-4 gap-5 p-2'>
                    <InputField type={'text'} placeholder={"Name"} size="3"></InputField>
                    <InputField type={'email'} placeholder={"Email"} size="3" ref={pass2}></InputField>
                    <InputField type={'password'} placeholder={"Password"} size="3" ref={pass}></InputField>
                    <InputField type={'password'} placeholder={"Confirm Password"} size="3" ref={pass2}></InputField>
                    <Button type='submit' size={"3"} variant="solid" radius='large' className='w-full' style={{ cursor: "pointer" }}>
                        Signup
                    </Button>
                    <Button onClick={handleMove} type='button' size={"3"} variant="outline" radius='large' className='w-full' style={{ cursor: "pointer" }}>
                        Back
                    </Button>
                    <div className="flex gap-2">
                        <Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
                            Signup using <Mail />
                        </Button>
                        <Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
                            Signup using <Github />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}

export default SignupComponent