import React from 'react'
import makeTitleCase from '../utils/makeTitleCase'
import { Text } from '@radix-ui/themes'

function InfoBox({ icon, title, desc }) {
    return (
        <div className='w-44 h-44 bg-lime-300 rounded-2xl pt-2 ps-2 hover:pt-0 hover:ps-0 hover: cursor-pointer'>
            <div className='w-44 h-44  border-2 border-slate-950 rounded-2xl'>
                <div className="flex flex-col items-center p-2">
                    <div>
                        {icon}
                    </div>
                    <div className='mt-1'>

                        {makeTitleCase(title)}
                    </div>
                    <div className='text-xs text-center mt-1'>
                            {makeTitleCase(desc)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBox