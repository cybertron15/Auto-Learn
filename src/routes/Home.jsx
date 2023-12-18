import React from 'react'
import HomeMenu from '../components/HomeMenu'
import { Avatar, Heading } from '@radix-ui/themes'
import CustomBadge from '../components/CustomBadge'
import * as Separator from '@radix-ui/react-separator';
import DashBoardDropdown from '../components/DashBoardDropdown'
import DarkModeToggle from '../components/DarkModeToggle'
import { Outlet } from 'react-router-dom'
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
					<Outlet></Outlet>

				</div>
			</div>
		</>
	)
}

export default Root