import React from 'react'
import Image from "next/image";

function Daftarform() {
  return (
    <div>
      <div className='bg-white flex flex-col items-center justify-center'>
                                    <Image className='mx-auto'
                                        src={'/logo/beeOnly.svg'}
                                        alt='Logo Learn Bee'
                                        width={67}
                                        height={68} />
                                    <Image className='mx-auto my-2'
                                        src={'/logo/textOnly.svg'}
                                        alt='Logo 2 Learn Bee'
                                        width={139}
                                        height={23} />
                                    <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Daftar</h2>

                                    <form className='my-5'>
                                        <label className='block my-2'>Nama lengkap</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Nomor Induk Mahasiswa (NIM)</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Email USU Mahasiswa</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Kata Sandi</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Konfirmasi Kata Sandi</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                    </form>
                                    <button className='bg-primary-yellow font-bold text-contrast px-4 py-2 rounded-full block mx-auto my-16'>Masuk</button>
        </div> 
    </div>
  )
}

export default Daftarform
