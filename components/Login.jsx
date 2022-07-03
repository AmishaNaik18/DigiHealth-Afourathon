import { signIn } from 'next-auth/react';
import { React, useState, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const [formData, setForm] = useState({
		username: '',
		password: '',
	});
	const [error, setError] = useState(null);
	const { username, password } = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		const res = await signIn('credentials', {
			username: username,
			password: password,
			callbackUrl: '/',
		});
		if (res?.error) {
			setError(res.error);
			console.log(res.error);
		} else {
			setError(null);
		}
		// Login action function
	};

	const onChange = (e) => {
		setForm({ ...formData, [e.name]: e.value });
	};

	return (
		<Fragment>
			<body className='bg-white font-family-karla h-screen'>
				<div className='w-full flex flex-wrap'>
					<div className='w-full md:w-1/2 flex flex-col'>
						<div className='flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24'>
							<a href='#' className='bg-black text-white font-bold text-xl p-4'>
								<FontAwesomeIcon icon={faHouseMedical} />
							</a>
						</div>

						<div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
							<p className='text-center text-3xl'>Welcome</p>
							<form className='flex flex-col pt-2 md:pt-8' onSubmit={onSubmit}>
								<div className='flex flex-col pt-4'>
									<label for='username' className='text-lg'>
										Username
									</label>
									<input
										type='username'
										id='username'
										placeholder='Username'
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
										name='username'
										value={username}
										onChange={(e) => {
											onChange(e.target);
										}}
									></input>
								</div>

								<div className='flex flex-col pt-4'>
									<label for='password' className='text-lg'>
										Password
									</label>
									<input
										type='password'
										id='password'
										placeholder='Password'
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
										name='password'
										value={password}
										onChange={(e) => {
											onChange(e.target);
										}}
									></input>
								</div>

								<input
									type='submit'
									value='Log In'
									className='bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8'
								></input>
							</form>
						</div>
					</div>

					<div className='w-1/2 shadow-2xl'>
						<img
							className='object-cover w-full h-screen hidden md:block rounded-md'
							src='login/d3.jpg'
						></img>
					</div>
				</div>
			</body>
		</Fragment>
	);
};

export default Login;
