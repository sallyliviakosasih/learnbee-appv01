import React, { useState } from 'react'
import Image from "next/image";
import prisma from '../../lib/prisma';

function Loginform({formAction}) {
  const [inputLoginEmail, setInputLoginEmail] = useState('');
  const [inputLoginPassword, setInputLoginPassword] = useState('');
  const handleInputEmail = (event) => setInputLoginEmail(event.target.value);
  const handleInputPassword = (event) => setInputLoginPassword(event.target.value);

  const handleSubmitLogin = async () => {
    try{
      const response = await fetch('/api/signin', {
        method:  "GET",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({inputLoginEmail, inputLoginPassword})
      })
      {console.log(response)};
    } catch(err){console.log(err)};
  }

  return (
    <>
      <div className='bg-white relative rounded-lg p-12 w-4/12'>
        <button onClick={formAction} className="font-semibold">X</button>
        <Image className='mx-auto'
          src={'/logo/beeOnly.svg'}
          alt='Logo Learn Bee'
          width={67}
          height={68} 
        />
        <Image className='mx-auto my-2'
          src={'/logo/textOnly.svg'}
          alt='Logo 2 Learn Bee'
          width={139}
          height={23} />
        <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Masuk</h2>

        <form className='my-5'>
          <label className='block my-2'>Email USU Mahasiswa</label>
          <input type='text' className='w-full border-b-2' onChange={handleInputEmail}></input>
          <label className='block my-2'>Kata Sandi</label>
          <input type='text' className='w-full border-b-2' onChange={handleInputPassword}></input>
        </form>
        <button className='bg-primary-yellow font-bold text-contrast px-4 py-2 rounded-full block mx-auto my-16' onClick={handleSubmitLogin}>Masuk</button>
      </div> 
    </>
  )
}

export default Loginform
