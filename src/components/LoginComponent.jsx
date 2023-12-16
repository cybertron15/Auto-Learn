import React from 'react'
import {Button} from '@radix-ui/themes'
import InputField from './InputField'
import {Github, Mail } from 'lucide-react'
function LoginComponent({handleMove}) {
    return (
        <div className='w-96'>
            <form action="" method="" className='w-96' >
                <div className='flex flex-col mt-14 gap-5 w-full p-2'>
                    <InputField type={'email'} placeholder={"Email"} size="3"></InputField>
                    <InputField type={'password'} placeholder={"Password"} size="3"></InputField>
                    <Button type='submit' size={"3"} variant="solid" radius='large' className='w-full' style={{ cursor: "pointer" }}>
                        Login
                    </Button>
                    <Button onClick={handleMove} type='button' size={"3"} variant="outline" radius='large' className='w-full' style={{ cursor: "pointer" }}>
                        Signup
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
    )
}

export default LoginComponent