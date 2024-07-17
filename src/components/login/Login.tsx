import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormInputs = z.infer<typeof schema>;

const Login =()=> {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    navigate('/home'); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <div>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
