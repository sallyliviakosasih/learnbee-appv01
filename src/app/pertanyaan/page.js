import React from 'react'

function page() {
  return (
    <div>
        <div class="container px-28 my-10">
            <h1 class="text-text-color text-3xl font-bold">Ajukan Pertanyaan</h1>
            <div class="grid grid-cols-3 grid-rows-3 gap-3"> 
            
                <div class="bg-primary-yellow p-4 rounded-md row-span-3 col-span-2">
                  <p class="text-black">Judul</p>
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
