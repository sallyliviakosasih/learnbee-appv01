import React, { useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

function Daftarform({formAction}) {
  const [inputNama, setInputNama] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputNim, setInputNim] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const router = useRouter();

const handleInputNama = (event) => setInputNama(event.target.value);
const handleInputEmail = (event) => setInputEmail(event.target.value);
const handleInputNim = (event) => setInputNim(event.target.value);
const handleInputPassword = (event) => setInputPassword(event.target.value);
const handleConfirmedPassword = (event) => setInputConfirmPassword(event.target.value);

const  handleSubmitForm = async (event) => {
  event.preventDefault();
  if (!inputNama || !inputNim || !inputEmail || !inputPassword || !inputConfirmPassword){
    alert("Mohon isi semua form");
  } else {
    if (inputPassword === inputConfirmPassword) {
       const response =  await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({inputNama, inputNim, inputEmail, inputPassword, inputConfirmPassword}),
       })
       if(response.ok) {
          alert("Akun berhasil dibuat");
          router.refresh();
       } else {
        alert("Gagal membuat akun");
       }
    } else {
      alert("Password tidak sesuai");
    }
  }
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
            height={23} 
          />
          <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Daftar</h2>
          <form className='my-5'>
            <label className='block my-2'>Nama lengkap</label>
            <input type='text' className='w-full border-b-2' onChange={handleInputNama}></input>

            <label className='block my-2'>Nomor Induk Mahasiswa (NIM)</label>
            <input type='text' className='w-full border-b-2' onChange={handleInputNim}></input>

            <label className='block my-2'>Email USU Mahasiswa</label>
            <input type='email' className='w-full border-b-2' onChange={handleInputEmail}></input>

            <label className='block my-2'>Kata Sandi</label>
            <input type='password' className='w-full border-b-2' onChange={handleInputPassword}></input>
            <label className='block my-2'>Konfirmasi Kata Sandi</label>
            <input type='password' className='w-full border-b-2' onChange={handleConfirmedPassword}></input>
          </form>
          <button onClick={handleSubmitForm} className='bg-primary-yellow font-bold text-contrast px-4 py-2 rounded-full block mx-auto my-16'>Masuk</button>
        </div> 
    </>
  )
}

export default Daftarform
