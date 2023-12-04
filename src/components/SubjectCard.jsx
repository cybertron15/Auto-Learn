import React from 'react'
import {
    Text,
    Card,
} from '@radix-ui/themes'
import makeTitleCase from '../utils/makeTitleCase'
import { Trash } from 'lucide-react'

function SubjectCard({ topic, level }) {
    const levelIconMap = {
        'AbsoluteBeginner': '🐥',
        'Beginner': '🤓',
        'Intermidiate': '🧐',
        'Expert': '😎'
    }
    return (
        <Card className='h-12 mt-2 ms-2 me-3 hover:ring-2 ring-lime-300 cursor-pointer'>
            <div className="flex justify-between">
                <Text> {makeTitleCase(topic)}</Text>
                <div className='flex gap-2'>
                    {levelIconMap[level]}
                    <Trash width={20} height={20} className=''/>
                </div>
            </div>

        </Card>
    )
}

export default SubjectCard