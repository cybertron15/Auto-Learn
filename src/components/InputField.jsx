import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { TextField } from '@radix-ui/themes'
function InputField({ type }) {
    const [showpass, setshowpass] = useState(false)

    const handlePassToggle = () => {
        showpass? setshowpass(false) : setshowpass(true)
    }

    return (
        type === 'password' ?
            <TextField.Root>
                <TextField.Input type={showpass?'text':'password'} radius='large' placeholder="Password" />
                <TextField.Slot className='hover:cursor-pointer' >
                    {showpass ? <Eye width={20} height={20} color='#c2c2c2' onClick={handlePassToggle} /> 
                    : 
                    <EyeOff width={20} height={20} color='#c2c2c2' onClick={handlePassToggle} />}
                </TextField.Slot>
            </TextField.Root>
            :
            <TextField.Root>
                <TextField.Input type='email' radius='large' placeholder="Email" />
            </TextField.Root>

    )
}

export default InputField