'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import { useAuthGuard, useGuestGuard } from '@/lib/hooks/guards.hook';

export default function AuthGuardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuthGuard();
  if (!auth?.accessToken! ) {
    return null;
  }

  return <>{children}</>;
}

export function GuestGuardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useGuestGuard();
  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
