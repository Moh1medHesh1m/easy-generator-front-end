'use client';

import { Avatar, Dropdown } from 'flowbite-react';
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import LogoutButton from '../LogoutButton/LogoutButton';

export default function UserGreeting() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      {user ? (
        <div className="flex items-center gap-2 sm:gap-4 p-2 md:p-4">
          {/* Avatar */}
          <Avatar
            color="light"
            className="w-8 h-8 sm:w-10 sm:h-10"
            placeholderInitials={user.name[0]?.toUpperCase()}
            rounded={true}
          />
          
          {/* Dropdown Menu */}
          <Dropdown
            className="capitalize"
            label={
              <span className="text-sm sm:text-base md:text-lg font-semibold">
                {user.name}
              </span>
            }
            inline={true}
          >
            <Dropdown.Item>
              <LogoutButton />
            </Dropdown.Item>
          </Dropdown>
        </div>
      ) : null}
    </>
  );
}
