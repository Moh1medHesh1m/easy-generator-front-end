/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import '../../../styles/dashboardCard.css';

import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdOutlineWavingHand } from 'react-icons/md';

import { useAppSelector } from '@/lib/hooks';

function DashboardCard() {
  const [isDay, setIsDay] = useState(false);
  const name = useAppSelector((state) => state.auth.user?.name);

  useEffect(() => {
    const hours = new Date().getHours();
    setIsDay(hours > 6 && hours < 18);
  }, []);

  return (
    <div className="relative mx-4 my-6 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
      <div
        className="greeting-card rounded-lg"
        style={{
          backgroundImage:
            'linear-gradient(139.87deg, #384D6C -2.71%, #748298 94.74%)',
        }}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Greeting Message */}
          <div className="greeting-message text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <MdOutlineWavingHand className="text-white text-2xl md:text-3xl lg:text-4xl" />
              <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
                {isDay ? 'Good Morning' : 'Good Evening'}
              </p>
            </div>
            <p className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl mt-1">{name}</p>
            <p className="text-white font-semibold text-base md:text-lg lg:text-xl mt-1">
              Welcome to the application
            </p>
          </div>

          {/* Day/Night Icon */}
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            {isDay ? (
              <div className="sun-icon text-yellow-400 text-5xl md:text-6xl lg:text-7xl">
                <FaSun />
              </div>
            ) : (
              <div className="moon-icon text-blue-300 text-5xl md:text-6xl lg:text-7xl">
                <FaMoon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;