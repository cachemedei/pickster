import Image from "next/image";

export default function Loader() {
  return (
      <main className='h-screen flex items-center justify-center'>
          <Image
              className='w-24 animate-rock'
              src='/popcorn.png'
              width={100}
              height={100}
              alt='Cartoon picture of a bucket of movie popcorn'
          />
      </main>
  );
}