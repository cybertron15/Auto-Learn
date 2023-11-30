import React from 'react'
import { Card, Inset, Text, Strong, Heading, Button } from '@radix-ui/themes'

function TopicCard({ topic, desc, testTaken }) {
    return (
        <Card size="2" style={{ maxWidth: 240 }} className='mt-4 h-80 '>
            <div className='flex flex-col'>
                <div className=''>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src="https://w0.peakpx.com/wallpaper/209/515/HD-wallpaper-python-logo-coding-kod-kodlama-code-mobile-lock-programming.jpg"
                            alt="Bold typography"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 140,
                                backgroundColor: 'var(--gray-5)',
                            }}
                        />
                    </Inset>
                </div>
                <div className='basis-28'>
                    <Heading size="4">{topic}</Heading>
                    <Text size={"2"} as='p' className='text-justify'>{desc.length > 70 ? desc.slice(0, 70) + "..." : desc}</Text>
                </div>
                <footer className='flex justify-between'>
                    <div className='mt-1'>
                        <Text className='mb-10'>Tests Taken: {testTaken}/5</Text>
                    </div>
                    <Button >Open</Button>
                </footer>
            </div>
        </Card>
    )
}

export default TopicCard