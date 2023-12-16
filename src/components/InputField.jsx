import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { TextField, IconButton } from '@radix-ui/themes'
function InputField({ type,size,placeholder }) {
    const [showpass, setshowpass] = useState(false)
    const [value, setvalue] = useState("")
    const handlePassToggle = (event) => {
        showpass ? setshowpass(false) : setshowpass(true)
    }
    const handleOnChange = (event) => {
        setvalue(event.target.value)
    }
    return (
        type === 'password' ?
            <TextField.Root>
                <TextField.Input type={showpass ? 'text' : 'password'} radius='large' size={size?size:""} placeholder={placeholder} value={value} onChange={handleOnChange} minLength={8} required/>
                <TextField.Slot >
                <IconButton type="button" variant="" className='hover:cursor-pointer'>
                    {showpass ? <Eye width={20} height={20} color='#c2c2c2' onClick={handlePassToggle} />
                        :
                        <EyeOff width={20} height={20} color='#c2c2c2' onClick={handlePassToggle} />}
                       </IconButton>
                </TextField.Slot>
            </TextField.Root>
            :
            <TextField.Root>
                <TextField.Input type={type} radius='large' placeholder={placeholder} size={size?size:""}  value={value} onChange={handleOnChange} required/>
            </TextField.Root>

    )
}

export default InputField