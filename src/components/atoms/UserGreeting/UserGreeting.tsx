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
        <div className="mr-24 flex items-center">
          <Avatar
            color="light"
            className="mr-4"
            placeholderInitials={user.name[0]?.toUpperCase()}
            rounded={true}
          />
          <Dropdown
            className="capitalize"
            label={`Welcome ${user.name}`}
            inline={true}
          >
            <Dropdown.Item>
              <LogoutButton></LogoutButton>
            </Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}
