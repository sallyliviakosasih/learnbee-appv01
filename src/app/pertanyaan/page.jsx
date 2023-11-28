import React from 'react'

function page() {
  return (
    <div>
        <div class="container my-10">
            <h1 class="text-text-color text-3xl font-bold">Ajukan Pertanyaan</h1>
            <div class="grid grid-cols-3 grid-rows-3 gap-3"> 
                <div className="p-4 rounded-md row-span-3 col-span-2">
                  <p className="text-black m-2">Judul</p>
                  <input type='text' className='w-full p-2 border border-black rounded-lg' placeholder='Masukan Judul'></input>
                  <p className='text-black m-2'>Detail Permasalahan Anda:</p>
                  <textarea placeholder='Deskripsikan permaslahan' className='w-full h-36 border border-black p-2 rounded-lg'></textarea>
                  <button className='m-4 rounded-xl bg-primary-yellow p-2' >Tambah Pertanyaan</button>
                </div>
                

                <div class="bg-[#eceef7] p-6 rounded-md ">
                    <div class="text-[#637c8a]">
                            <div className='p-2  font-semibold'>Menulis pertanyaan yang baik &amp; benar</div>
                            <div className='p-2'>Sebelum mengajukan pertanyaan, ingatlah untuk:</div>
                            <ul class="list-disc ml-6">
                                <li>Bersikap yang sopan</li>
                                <li>Cari pertanyaan sebelum mengajukan pertanyaan</li>
                                <li>Ringkas masalah Anda dalam satu judul</li>
                                <li>Deskripsikan masalah Anda lebih detail</li>
                                <li>Tambahakan tag topik yang berhubungan</li>
                            </ul>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default page
