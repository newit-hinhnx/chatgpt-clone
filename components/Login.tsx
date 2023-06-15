'use client'

import Image from 'next/image'

function Login() {
  return (
    <div className="bg-[#0ea47e] h-screen flex flex-col justify-center items-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        priority={true}
      />
      <div className="relative">
        <input className="h-10 w-96 px-4 border border-gray-300 rounded-lg placeholder-gray-500" type="text" placeholder="Enter your name to use ChatGPT" />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">

        </div>
      </div>
      <br />
      <div className="relative">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
          Next
        </button>
      </div>
    </div>
  )
}

export default Login
