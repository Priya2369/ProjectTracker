import react, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import 'firebase/auth'
import styles from '../styles/login.module.css'
import firebaseInit from './Fire';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState('');

	const router = useRouter();

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
		firebaseInit.auth()
			.signInWithEmailAndPassword(email, password)
			.then(creds => {
				console.log(creds.user);
				router.push('/profile');
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
			<div className={styles.login}>
				<div className="logo"></div>

				<div className={styles.title}>Login</div>
				<form onSubmit={e =>e.preventDefault()}>
					<div className={styles.fields}>
						<div className={styles.username}>
							<input
								type="username"
								
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className={styles.password}>
							<input
								type="password"
								
								placeholder="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<button className={styles.signinButton} onClick={handleLogin}>
						Login
					</button>
				</form>
				<div className={styles.link}>
					<a href="#">Forgot password?</a>
				</div>
			</div>
		</>
	);
}

export default Login;
