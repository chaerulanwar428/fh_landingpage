import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from '../NavLink';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Button from '../Button';

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    return setToken(Cookies.get('token'));
  });



  return (
    <nav
      className={ "sticky z-20 top-0 py-0 lg:py-2 text-white font-sans bg-[#3586ff] 2xl:py-2 flex items-center flex-wrap md:px-24"}>
      <Link href="/">
        <div className='flex items-center'>
         <img
         src="/images/logo_sekolah.png"
         className='h-[50px]'
         />
         <p className='text-white font-sans p-2 text-xl'>Fathatul Hidayah</p>
         </div>
      </Link>
      <div
        className={`${
          true ? "w-full inline-flex flex-grow" : "hidden"
        } lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto py-2 lg:py-0">
          <Link href="/">
              <p className="lg:inline-flex  lg:w-auto w-full px-3 xl:px-4 py-2.5 rounded text-white font-sans text-xs md:text-sm lg:text-sm xl:text-lg items-center justify-center  hover:text-white">
                Beranda
              </p>
          </Link>

          <Link href="/alamat" scroll={false}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 xl:px-4 py-2.5 rounded text-white font-sans text-xs md:text-sm lg:text-sm xl:text-lg items-center justify-center  hover:text-white">
                Alamat
              </p>
          </Link>
          <Link href="/daftar" scroll={false}>
              <p className="lg:inline-flex lg:w-auto w-full px-3 xl:px-4 py-2.5 rounded text-white font-sans text-xs md:text-sm lg:text-sm xl:text-lg items-center justify-center  hover:text-white">
                Daftar
              </p>
          </Link>
          <a href="https://admin-fh-zeta.vercel.app">
              <p className="lg:inline-flex lg:w-auto w-full px-3 xl:px-4 py-2.5 border-2 border-white rounded-lg text-white font-sans text-xs md:text-sm lg:text-sm xl:text-lg items-center justify-center  hover:text-white">
                Login
              </p>
          </a>
        </div>
      </div>
    </nav>
  );
}