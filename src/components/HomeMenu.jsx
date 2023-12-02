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
import AddSubject from './AddSubject';
import SubjectCard from './SubjectCard';

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
    return (
        <>
            <div className='sm:col-span-2 lg:col-span-1 border-2 h-ful'>
                <h1 className='ms-2'></h1>
                <div className='mb-4 mt-2 ms-2'>
                    <Heading size="8">Auto Learn</Heading>
                </div>
                <div className='flex flex-col'>
                    <AddSubject settopics={settopics}></AddSubject>

                    <div className='mt-2 mx-2'>
                        <Heading size="6">Your Subjects</Heading>
                    </div>
                    <div className='me-0.5'>

                        <ScrollArea scrollbars="vertical" type='auto' style={{ height: "500px" }} > 
                        {/* //TODO make this responsive */}
                            {topics && topics.map((topic, index) => {
                                return <SubjectCard topic={topic['topic']} level={topic['level'] } key={index}></SubjectCard>
                            })}

                        </ScrollArea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMenu