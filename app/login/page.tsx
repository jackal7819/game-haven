'use client';

import { BsApple, BsDiscord, BsFacebook, BsGoogle } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
	email: string;
	emailRequired: string;
	password: string;
	passwordRequired: string;
};

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className='m-auto'>
			<div className='flex flex-col gap-14 w-[640px]'>
				<div className='flex flex-col gap-8'>
					<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron text-center'>
						Log in
					</h1>
					<div className='flex items-center justify-between gap-6'>
						<BsFacebook
							size={56}
							className='duration-500 cursor-pointer hover:text-orange'
						/>
						<BsDiscord
							size={56}
							className='duration-500 cursor-pointer hover:text-orange'
						/>
						<BsGoogle
							size={56}
							className='duration-500 cursor-pointer hover:text-orange'
						/>
						<BsApple
							size={56}
							className='duration-500 cursor-pointer hover:text-orange'
						/>
					</div>
					<p className='text-[32px] font-medium text-center'>or</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-3'
				>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
					/>
					<div className='h-5'>
						{errors.email && (
							<span className='text-red-500 '>
								{errors.email.message}
							</span>
						)}
					</div>

					<label htmlFor='password'>Password</label>
						<input
							type='password'
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 8,
									message:
										'Password must be at least 8 characters',
								},
							})}
						/>
					<div className='h-5'>
						{errors.password && (
							<span className='text-red-500 '>
								{errors.password.message}
							</span>
						)}
					</div>
					<button type='submit'>Log in</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
