"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from 'react-modal';
import 'react-modal';

export default function Header ({isLogged}) {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(true);
    const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false);

    function toogleModalLogin () {
        setModalLoginIsOpen(!modalLoginIsOpen);
    }

    function toogleModalSignUp () {
        setModalSignUpIsOpen(!modalSignUpIsOpen);
    }

    return (
        <>
            <header>
                <div className='flex px-9 py-5' id='navigationContainer'>
                    <Image className='flex-none'
                        src={'/logo/logoNav.svg'}
                        alt='Logo LearnBee di Navigasi'
                        width={220}
                        height={39}
                    />
                    <div className='flex bg-mid-muted items-center rounded-full mx-auto px-7 py-4 w-1/2'>
                        <input type='text' placeholder='Cari Topik, Pertanyaan, Buku, ...' className='bg-transparent mx-4 w-full focus:outline-none'></input>
                        <button className=''>
                        <Image
                            src={"/icons/searchIcon.svg"}
                            alt="Ikon Pencarian"
                            width={24}
                            height={24}
                        />
                        </button>
                    </div>
                    {!isLogged &&
                        <>
                        <div className='w-3/12 items-center flex justify-center' id='notLogged'>
                            <a href='#' className='bg-primary-yellow text-contrast rounded-full font-medium px-4 py-2 mx-5'>Masuk</a>
                            <a href='#' className='border-2 rounded-full font-medium border-contrast px-4 py-2 mx-5'>Daftar</a>
                        </div>
                        <Modal isOpen={modalLoginIsOpen} onRequestClose={toogleModalLogin} contentLabel="Pop Up Form">
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
                                    <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Masuk</h2>
                                    <form className='my-5'>
                                        <label className='block my-2'>Email USU Mahasiswa</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Kata Sandi</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                    </form>
                                    <button className='bg-primary-yellow text-contrast px-4 py-2 rounded-full block mx-auto my-16'>Masuk</button>
                                </div> 
                        </Modal>
                        {/* <div className='fixed flex top-0 left-0 right-0 h-full z-10 bg-dark-muted/50 items-center justify-center' id='loginPopUpBg' tabIndex={-1}>
                                <div className='bg-white relative rounded-lg p-12 w-4/12' id='loginFormContianer'>
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
                                    <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Masuk</h2>
                                    <form className='my-5'>
                                        <label className='block my-2'>Email USU Mahasiswa</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                        <label className='block my-2'>Kata Sandi</label>
                                        <input type='text' className='w-full border-b-2'></input>
                                    </form>
                                    <button className='bg-primary-yellow text-contrast px-4 py-2 rounded-full block mx-auto my-16'>Masuk</button>
                                </div>
                            </div> */}
                        </>
                    }
                    {isLogged &&
                        <div className='w-3/12 flex justify-center items-center gap-4' id='logged'>
                            <a href='#' className='bg-primary-yellow text-contrast rounded-full font-medium px-4 py-2'>+ Ajukan pertanyaan</a>
                            <a href='#' className=''>
                            <Image
                                src={'icons/notificationIcon.svg'}
                                alt='Ikon Notifikasi'
                                width={31}
                                height={31}
                            />
                            </a>
                            <a href='#'>
                            <Image className='rounded-full'
                                src={'/sample/sampleUser.png'}
                                alt='Gambar Profile'
                                width={45}
                                height={80}
                            />
                            </a>
                        </div>
                    }
                </div>
            </header>
        </>
    )
}