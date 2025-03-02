'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setActivePath } from '@/utils/getDashboardPath';

export const SideNav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [selectedActive, setSelectedActive] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    const getActivePath = setActivePath(pathName);
    setSelectedActive(getActivePath);
  }, [pathName]);

  const activeClasses =
    'flex h-12 flex-row items-center  rounded-lg px-4  bg-gray-100 text-gray-600 hover:bg-gray-100';
  const inActiveClasses =
    'flex h-12 flex-row items-center rounded-lg px-4 text-gray-600 hover:bg-gray-100 bg-red';



  return (
    <>
      <aside className="fixed inset-y-0 left-0 top-16 max-h-screen w-60 bg-white shadow-md">
        <div className="flex h-full flex-col justify-between">
          <div className="grow">
            <div className="p-4 ">
              <ul className="flex w-full flex-col space-y-1">
                <li className="my-px ">
                  <Link
                    href="/home"
                    className={
                      selectedActive === 0 ? activeClasses : inActiveClasses
                    }
                  >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                      <svg
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </span>
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
