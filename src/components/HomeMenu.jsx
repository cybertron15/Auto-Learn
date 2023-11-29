import React, { useState } from 'react'
import {
    TextField,
    Heading,
    Button,
    Dialog,
    Flex,
    Text,
    ScrollArea,
    Card
} from '@radix-ui/themes'
import AddTopic from './AddTopic';
import TopicCard from './TopicCard';

function HomeMenu() {
    const [topics, settopics] = useState([
        {
            topic: 'python',
            level: 'AbsoluteBeginner'
        },
        {
            topic: 'java',
            level: 'Beginner'
        },
        {
            topic: 'react',
            level: 'Intermidiate'
        },
        {
            topic: 'html',
            level: 'Expert'
        },
        {
            topic: 'css',
            level: 'Expert'
        }])
    console.log(topics);
    return (
        <>
            <div className='sm:col-span-2 lg:col-span-1 border-2 h-ful'>
                <h1 className='ms-2'></h1>
                <div className='mb-4 mt-2 ms-2'>
                    <Heading size="8" color='grass'>Auto Learn</Heading>
                </div>
                <div className='flex flex-col'>
                    <AddTopic settopics={settopics}></AddTopic>

                    <div className='mt-2 mx-2'>
                        <Heading size="6" color='grass'>Your Subjects</Heading>
                    </div>
                    <div className='me-0.5'>

                        <ScrollArea scrollbars="vertical" type='auto' style={{ height: "500px" }} >
                            {topics && topics.map((topic, index) => {
                                return <TopicCard topic={topic['topic']} level={topic['level'] } key={index}></TopicCard>
                            })}

                        </ScrollArea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMenu