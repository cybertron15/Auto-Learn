import React from 'react'
import Home from '../Pages/Home'
import HomeMenu from '../components/HomeMenu'
import { Avatar, Heading, Text, Badge, ScrollArea } from '@radix-ui/themes'
import CustomBadge from '../components/CustomBadge'
import TopicCard from '../components/TopicCard'
import * as Separator from '@radix-ui/react-separator';
import DashBoardDropdown from '../components/DashBoardDropdown'
import DarkModeToggle from '../components/DarkModeToggle'
function Root() {
	return (
		<>
			<div className='h-full grid grid-cols-5 grid-rows-1 '>
				<HomeMenu></HomeMenu>
				<div className='col-span-4 h-full flex flex-col'>
					<div className='basis-1/5'>
						<div className='flex w-full ms-4'>
							<div className='mt-3'>
								<Avatar
									radius="full"
									size="7"
									src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
									fallback="A"
									className='hover:ring-2 ring-lime-300 cursor-pointer'
								/>
							</div>
							<div className='grow ms-8'>
								<div className='mt-2 flex justify-between'>
									<Heading size="8">Welcome Palash Dhavle</Heading>
									<div className='me-6 flex gap-2'>
										<DarkModeToggle></DarkModeToggle>
										<DashBoardDropdown></DashBoardDropdown>
									</div>
								</div>
								<div className="mt-2">
									<div className='flex gap-3'>
										<CustomBadge label="Subjects Completed" value="50"></CustomBadge>
										<CustomBadge label="Tests taken" value="55"></CustomBadge>
									</div>
									<div className='flex gap-3'>
										<CustomBadge label="Subjects generated" value="43"></CustomBadge>
										<CustomBadge label="Lessons completed" value="32"></CustomBadge>
									</div>
								</div>

							</div>
						</div>
						<Separator.Root className="-2 mt-5 mx-3 bg-slate-300" style={{ height: "3px" }} />
					</div>
					<div className='ms-4 mt-2 flex gap-3'>
						<div>
							<Heading size="9">Python</Heading>
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

				</div>
			</div>
		</>
	)
}

export default Root