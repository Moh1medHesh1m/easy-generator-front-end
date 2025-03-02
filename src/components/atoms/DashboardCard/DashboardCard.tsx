/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import '../../../styles/dashboardCard.css';
import { HiOutlineHand } from "react-icons/hi";

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
    <div className="relative mx-40 my-10">
      <div
        className="greeting-card "
        style={{
          backgroundImage:
            'linear-gradient(139.87deg, #384D6C -2.71%, #748298 94.74%)',
        }}
      >
    
        <div className="flex items-center justify-between gap-20">
          <div className="greeting-message">
            <div className="flex">
              <MdOutlineWavingHand color="white" />
              <p>
                <span style={{ fontWeight: 'bold', color: 'white' }}>
                  {isDay ? 'Good Morning' : 'Good Evening'}
                </span>{' '}
              </p>
            </div>
            <div>
              <span style={{ fontWeight: 'bold', color: 'white' }}>{name}</span>{' '}
            </div>
            <span style={{ fontWeight: 'bold', color: 'white' }}>
             Welcome to the application
            </span>{' '}
          </div>
          <div className="">
            <p>
              <span style={{ fontWeight: 'bold', color: 'white' }}></span>{' '}
              {isDay ? (
                <div className="sun-icon relative">
                  <FaSun />
                </div>
              ) : (
                <div className="moon-icon relative">
                  <FaMoon />
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
