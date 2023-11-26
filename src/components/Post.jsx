import Image from "next/image"
export default function Post() {
    return (
        <div className='border border-dark-muted my-8 px-6 py-5'>
            <div className='flex gap-5' id='headerQuestin'>
                <div className='' id='questionRates'>
                    <button>
                    <Image
                        src={'/icons/upvoteIcon.svg'}
                        alt='Ikon vote pertanyaan'
                        width={29}
                        height={29}
                    />
                    </button>
                    <h1 className='text-center text-lg'>100</h1>
                </div>
                <div className='grid grid-rows-2' id='uploaderDetail'>
                    <div className='flex gap-4 items-center' id='userDetail'>
                    <h1 className='font-bold text-lg'>Adi Taher</h1>
                    <div className='flex gap-1 text-sm text-darker-muted'>
                        <h2>2020</h2>
                        <h2>Ilmu Komputer</h2>
                    </div>
                    </div>
                    <h2 className='text-sm text-darker-muted' id='time'>1 menit yang lalu</h2>
                </div>
            </div>
            <div className='py-4' id='mainQuestion'>
                <h1 className='font-bold text-lg'>Tolong bantu saya untuk memecahkan error berikut!!</h1>
                <Image className='mx-auto my-3'
                    src={'/sample/sample1.png'}
                    alt='Gambar Soal'
                    width={820}
                    height={320}
                />
            </div>
            <div className='flex relative items-center' id='QuestionDetail'>
                <div className='flex px-4 gap-3' id='tags'>
                    <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>vscode</a>
                    <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>javascript</a>
                </div>
                <a href='#' className='flex absolute right-0 px-4 py-2 border rounded-full '>
                    <h1>Bantu Jawab</h1>
                    <Image className='mx-2'
                        src={'/icons/arrowIcon.svg'}
                        alt='Ikon Selanjutnya'
                        width={14}
                        height={15}
                    />
                </a>
            </div>
        </div>
    )
}