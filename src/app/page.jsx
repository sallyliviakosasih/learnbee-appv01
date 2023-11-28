import Image from 'next/image'
import Post from '@/components/Post'
import prisma from '../../lib/prisma'

async function getPost() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include:{
      author: {
        select: {nama: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPost();
  return (
    <>
      <div className='flex px-6 py-5 bg-cover relative items-center' style={{backgroundImage: 'url(background/bg1.png)'}}>
        <h1 className='text-white font-semibold text-xl'>Kesulitan mengerjakan tugas?</h1>
        <a href='/pertanyaan' className='flex absolute right-0 mx-10 px-4 py-2 bg-primary-yellow rounded-full'>
        <Image
            src={'/icons/addQuestionIcon.svg'}
            alt='Ikon Tambah Pertanyaan'
            width={24}
            height={24}
          />
          <h2 className='text-contrast font-medium mx-2'>Ajukan pertanyaan</h2>
        </a>
      </div>
      {
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              images={post.images_url}
              waktu={post.createdAt[0]}
              authorName={post.author.nama}
              jurusan={"Ilmu Komputer"}
              stambuk={"2020"}
              votes={"100"}
            />
          )
        })
      }
    </>
  )
}
