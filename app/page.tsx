'use client' 
import Image from 'next/image' 
import {useRouter} from "next/navigation";

export default function Home() {
  const {push} = useRouter()
  return (
    <main className="flex min-h-[520px] flex-col items-center justify-between p-24">
      <div className="mb-20">
        <Image src="/logo.png" alt="" width="280" height="280" />

      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="mb-3 text-2xl font-semibold text-center">
          Ingreso a la plataforma
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center p-8">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By @carma

          </a>
        </div>
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className="mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a> */}
        <div
          className='p-2'
        >
          <input
            className='border-2 p-2 border-slate-900 rounded-xl'
            placeholder='Usuario'
          />
        </div>
        <div
          className='p-2'
        >
          <input
            className='border-2 p-2 border-slate-900 rounded-xl'
            placeholder='Contraseña'
          />
        </div>
        <div
          className='flex items-center justify-center p-4'
        >
        <button
          onClick={()=>{push('/Home')}} 
          className='p-2 px-4 bg-green-800 font-bold text-white opacity-90 rounded-md '
        >
          Ingresar
        </button>
        </div>
      </div>
    </main>
  )
}
