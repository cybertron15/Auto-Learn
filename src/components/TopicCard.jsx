import React from 'react'
import {
    Text,
    Card,
} from '@radix-ui/themes'
import { Baby,Smile } from 'lucide-react'

function TopicCard({ topic,level }) {
    const levelIconMap = {
        'AbsoluteBeginner': '🐥',
        'Beginner': '🤓',
        'Intermidiate': '🧐',
        'Expert':'😎'
    }
    return (
        <Card className='h-12 mt-2 ms-2 me-3 hover:ring-2 ring-lime-300 cursor-pointer'>
            <div className="flex justify-between">
                <Text> {topic}</Text>
                {levelIconMap[level]}
            </div>

        </Card>
    )
}

export default TopicCard