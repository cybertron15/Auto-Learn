import React from 'react'
import {
    Text,
    Card
} from '@radix-ui/themes'
function TopicCard({topic}) {
    return (
        <Card className='h-12 mt-2 ms-2 me-3 hover:ring-2 ring-lime-300 cursor-pointer'>
            <Text> {topic}</Text>
        </Card>
    )
}

export default TopicCard