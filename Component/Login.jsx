import react, { useEffect, useState } from 'react';
import styles from '../styles/login.module.css'
import Fire from './Fire';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState('');

	const clearInput = () => {
		setEmail('');
		setPassword('');
	};

	const clearError = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleLogin = () => {
		// console.log('login');
		clearError();
		Fire.auth()
			.signInWithEmailAndPassword(email, password)
			.then(creds => {
				console.log(creds.user);
			})
			.catch(err => {
				switch (err.code) {
					case 'auth/invalid-email':
					case 'auth/user-disabled':
					case 'auth/user-not-found':
						setEmailError(err.message);
						break;
					case 'auth/wrong-password':
						setPasswordError(err.message);
						break;
				}
			});
	};

	const handleLogout = () => {
		Fire.auth().signOut();
	};

	// const authListener = () => {
	// 	Fire.auth().onAuthStateChanged(user => {
	// 		if (user) {
	// 		}
	// 	});
	// };

	return (
		<>
			<div className="login-div">
				<div className="logo"></div>

				<div className="title">Login</div>
				<form>
					<div className="fields">
						<div className="username">
							<input
								type="username"
								className="user-input"
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className="password">
							<input
								type="password"
								className="pass-input"
								placeholder="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<button className="signin-button" onClick={handleLogin}>
						Login
					</button>
				</form>
				<div className="link">
					<a href="#">Forgot password?</a>
				</div>
			</div>
		</>
	);
}

export default Login;
