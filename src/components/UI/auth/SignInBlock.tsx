'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInBlock() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('Проверяем...');

    try {
      if (!email || !password) {
        setMessage('Пожалуйста, заполните все поля');
        return;
      }

      const result = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await result.json();

      if (!result.ok) {
        setMessage(data.error);
        throw new Error(data.error);
      }

      if (result.ok) {
        localStorage.setItem('userId', data.userId);
        router.replace('/');
      }
    } catch (error: unknown) {
      console.log(error instanceof Error ? error.message : error);
    }
  }
  return (
    <section className='flex flex-col justify-between items-center border-2 border-gray-200 bg-white rounded-xl py-8 px-16 w-fit h-full'>
      <h1 className='font-bold text-4xl text-center my-8 text-gray-300'>Вход</h1>
      <form className='flex flex-col gap-4 w-sm justify-center' onSubmit={handleSubmit}>
        <div className='flex flex-col *:inline-block'>
          <label className='mb-1 font-medium' htmlFor='email'>
            Эл. почта
          </label>
          <input
            className='bg-gray-100 px-4 py-2 rounded-4xl outline-skiey placeholder:text-sm'
            id='email'
            type='email'
            inputMode='email'
            placeholder='введите свою эл. почту'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
        </div>
        <div className='flex flex-col *:inline-block'>
          <label className='mb-1 font-medium' htmlFor='password'>
            Пароль
          </label>
          <input
            className='bg-gray-100 px-4 py-2 rounded-4xl outline-skiey placeholder:text-sm'
            id='password'
            type='password'
            inputMode='text'
            placeholder='введите свой пароль'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
        </div>
        {message ? (
          message === 'Проверяем...' ? (
            <h1 className='text-skiey text-center'>{message}</h1>
          ) : (
            <h1 className='text-red-500 text-center'>{message}</h1>
          )
        ) : null}
        <button
          className='mx-auto cursor-pointer px-8 py-2 mt-4 text-xs border-2 md:text-base border-skiey rounded-4xl sm:text-xs hover:bg-skiey hover:text-white transition-all shadow-lg shadow-gray-200 hover:shadow-skiey/20 font-medium w-xs'
          type='submit'
        >
          Войти
        </button>
        <span className='flex gap-2 justify-center text-xs'>
          <p>Новенький здесь?</p>
          <Link href='/auth/signup' className='text-skiey'>
            Зарегистрироваться
          </Link>
        </span>
      </form>
      <Link href='/' className='text-skiey text-sm'>
        На главную
      </Link>
    </section>
  );
}
