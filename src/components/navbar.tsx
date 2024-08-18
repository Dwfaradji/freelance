'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ImportLogo from '@/components/ui/Logo/importLogo';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [colorLogo, setColorLogo] = useState<string>();
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        // Exemple : changer l'état lorsque le scroll dépasse 100px
        setColorLogo('colorP');
      } else {
        setColorLogo('colorS');
      }
    });
  }, []);

  return (
    <nav className="fixed  inset-x-0 top-0 z-30 w-full text-blue">
      <div className="mx-auto px-3 py-2 backdrop-blur-lg">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between  ">
            <Link className="shrink-0 font-poppins" href="/">
              <ImportLogo displayColor={colorLogo} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-red-600">
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/'}
                >
                  <OtherHousesIcon />
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/a_propos'}
                >
                  A propos
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/templates'}
                >
                  Nos Templates
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/blog'}
                >
                  Blog
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/tarifs'}
                >
                  Tarifs
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/portfolio'}
                >
                  Portfolio
                </Link>
                <Link
                  className="rounded-md px-3 py-2 font-poppins text-sm font-medium text-white opacity-50 hover:opacity-100"
                  href={'/contact'}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              aria-label={"navbar"}
              onClick={() => setOpenMenu(!openMenu)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-300 focus:outline-none dark:text-white"
            >
              <svg
                width="20"
                height="20"
                fill="white"
                className="size-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="backdrop-blur-lg md:hidden">
          <div className="space-y-1 pb-3 pt-2 sm:px-3 md:px-2">
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/'}
            >
              <OtherHousesIcon />
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/a_propos'}
            >
              A propos
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/templates'}
            >
              Nos Templates
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/blog'}
            >
              Blog
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/tarifs'}
            >
              Tarifs
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/portfolio'}
            >
              Portfolio
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue dark:hover:text-white"
              href={'/contact'}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
