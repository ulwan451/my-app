"use client";

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={handleLogin}>
        <h1>Log in</h1>
        <input
          className={styles.inputUsername}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          className={styles.inputPassword}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button className={styles.buttonSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
