import React from 'react'
import {Heading, Text } from '@radix-ui/themes'
import TopicCard from '../components/TopicCard'
import CustomBadge from '../components/CustomBadge'
import { useLoaderData } from 'react-router-dom'
import makeTitleCase from '../utils/makeTitleCase'

function Subject() {
    const subject = useLoaderData()
    return (
        <>
            <div className='ms-4 mt-2 flex gap-3'>
                <div>
                    <Heading size="9">{makeTitleCase(subject)}</Heading>
                </div>
                <div className='mt-2'>
                    <CustomBadge label="Topic Completed" value="50"></CustomBadge>
                    <CustomBadge label="Course Completed" value="555"></CustomBadge>
                </div>
            </div>
            <div className='ms-4 mt-3 me-2'>
                <Text >Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</Text>
            </div>
            <div className='mt-2 ms-4 grid grid-cols-4 gap-4 mb-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
                <TopicCard topic={'Syntax and Data Types'} desc={'Understanding variables, data types, and basic operations. Conditional statements (if, else) and loops (for, while).'} testTaken={3}></TopicCard>
                <TopicCard topic={'Functions and Modules'} desc={'Creating and using functions. Basic understanding of modules and importing.'} testTaken={4}></TopicCard>
                <TopicCard topic={'Data Structures'} desc={'Lists, tuples, and dictionaries. Basic operations on these data structures.'} testTaken={3}></TopicCard>
                <TopicCard topic={'File Handling'} desc={'Reading from and writing to files.Basic file operations.'} testTaken={5}></TopicCard>
                <TopicCard topic={'Syntax and Data Types'} desc={'Understanding variables, data types, and basic operations. Conditional statements (if, else) and loops (for, while).'} testTaken={3}></TopicCard>
                <TopicCard topic={'Functions and Modules'} desc={'Creating and using functions. Basic understanding of modules and importing.'} testTaken={4}></TopicCard>
                <TopicCard topic={'Data Structures'} desc={'Lists, tuples, and dictionaries. Basic operations on these data structures.'} testTaken={3}></TopicCard>
            </div>
        </>
    )
}

export function loader({params}){
    return params.subjectID
}

export default Subject