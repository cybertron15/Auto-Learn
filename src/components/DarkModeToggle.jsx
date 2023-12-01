import { useState } from 'react'
import { Sun,Moon } from 'lucide-react'

function DarkModeToggle() {
    const [mode, setmode] = useState('light')
    const handleClick = () => {
        setmode((prev) => {return prev==="dark"?"light":"dark"})
    }
    return (
        <>
            {mode === "dark" ?

                <Sun className='mt-1 cursor-pointer' onClick={handleClick} /> :
                <Moon className='mt-1 cursor-pointer' onClick={handleClick}/>}
        </>
    )
}

export default DarkModeToggle