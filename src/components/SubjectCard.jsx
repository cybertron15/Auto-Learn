import React from 'react'
import {
    Text,
    Card,
} from '@radix-ui/themes'
import makeTitleCase from '../utils/makeTitleCase'

function SubjectCard({ topic,level }) {
    const levelIconMap = {
        'AbsoluteBeginner': '🐥',
        'Beginner': '🤓',
        'Intermidiate': '🧐',
        'Expert':'😎'
    }
    return (
        <Card className='h-12 mt-2 ms-2 me-3 hover:ring-2 ring-lime-300 cursor-pointer'>
            <div className="flex justify-between">
                <Text> {makeTitleCase(topic)}</Text>
                {levelIconMap[level]}
            </div>

        </Card>
    )
}

export default SubjectCard