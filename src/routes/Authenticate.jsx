import { TextField, Button, Card } from '@radix-ui/themes'
import { Brain, Github, LayoutGrid, Mail, Monitor, Puzzle } from 'lucide-react'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import InfoBox from '../components/InfoBox'

function Authenticate() {
	let info = {
		"tailored content": {
			desc: "Content generated based on your needs and you expertise level",
			icon: <Monitor width={70} height={70} strokeWidth={0.7} />
		},
		"interactive quizes": {
			desc: "Answer quizzes and solidify your knowledge after learning new topics",
			icon: <Puzzle width={70} height={70} strokeWidth={0.7} />
		},
		"Effortless Learning": {
			desc: "Effortlessly learn new subjects topic by topic on your own phase",
			icon: <Brain width={70} height={70} strokeWidth={0.7} />
		},
		"Diverse Subjects": {
			desc: "Learn almost any Subject just by entering the subject name",
			icon: <LayoutGrid width={70} height={70} strokeWidth={0.7} />
		}
	}

	const [move, setmove] = useState(false)
    const handleMove = ()=>{
        setmove(!move)
    }

	return (
		<div id='loginbg' className='h-full bg-cover grid grid-cols-6'>
			<div className='lg:col-span-4'>
				<div className='bg-slate-200 bg-opacity-50 mt-5 mx-5 rounded-xl pt-20 px-10 pb-24'>
					<div className='text-8xl'>
						<div className='font-inter font-bold'>Welcome</div>
						<div className='font-inter mt-4'><span className='font-bold'>To</span> <span className='font-pacifico'> Auto Learn</span></div>
					</div>
					<div className='text-2xl mt-4'>
						Welcome to AutoLearn, Your personalized AI learning platform. Tailored
						content, interactive quizzes, effortless learning. explore diverse subjects,
						and watch your knowledge soar effortlessly with AutoLearn by your side.
					</div>
					<div className='mt-4 flex justify-between'>
						{Object.entries(info).map(([title, data]) => {
							return <InfoBox icon={data.icon} title={title} desc={data.desc}></InfoBox>
						})};

					</div>
				</div>
			</div>

			<div className='col-span-2 bg-white rounded-s-XXXL text-center'>
				<h1 className='text-5xl font-inter font-bold mt-28'> Hello Friend! </h1>
				<p className='text-2xl mt-1 text-slate-500'>lets learn new stuff today</p>

				<div className='flex justify-center'>
					<div className='w-96 overflow-hidden'>
						<div className={`flex w-96 transition ${move && "-translate-x-96 delay-100"}`} >
							<div className='w-96'>
								<form action="" method="" className='w-96' >
									<div className='flex flex-col mt-14 gap-5 w-full p-2'>
										<InputField type={'email'} placeholder={"Email"} size="3"></InputField>
										<InputField type={'password'} placeholder={"Password"} size="3"></InputField>
										<Button type='submit' size={"3"} variant="solid" radius='large' className='w-full' style={{ cursor: "pointer" }}>
											Login
										</Button>
										<Button onClick={handleMove} type='button' size={"3"} variant="outline" radius='large' className='w-full' style={{ cursor: "pointer" }}>
											Signup
										</Button>
										<div className="flex gap-2">
											<Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
												Signup using <Mail />
											</Button>
											<Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
												Signup using <Github />
											</Button>
										</div>
									</div>
								</form>
							</div>

							<div className='w-96'>
								<form action="" method="" className='w-96'>
									<div className='flex flex-col mt-4 gap-5 p-2'>
										<InputField type={'text'} placeholder={"Name"} size="3"></InputField>
										<InputField type={'email'} placeholder={"Email"} size="3"></InputField>
										<InputField type={'password'} placeholder={"Password"} size="3"></InputField>
										<InputField type={'password'} placeholder={"Confirm Password"} size="3"></InputField>
										<Button type='submit' size={"3"} variant="solid" radius='large' className='w-full' style={{ cursor: "pointer" }}>
											Signup
										</Button>
										<Button onClick={handleMove} type='button' size={"3"} variant="outline" radius='large' className='w-full' style={{ cursor: "pointer" }}>
											Back
										</Button>
										<div className="flex gap-2">
											<Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
												Signup using <Mail />
											</Button>
											<Button type='button' size={"3"} variant="outline" radius='large' className='flex-grow' style={{ cursor: "pointer" }}>
												Signup using <Github />
											</Button>
										</div>
									</div>
								</form>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Authenticate