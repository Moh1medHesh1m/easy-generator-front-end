'use client';

import { useRouter } from 'next/navigation';

import { useAppSelector } from '@/lib/hooks';

export default function Page() {
  const auth = useAppSelector((state) => state.auth.isAuth);
  const router = useRouter();
  if (auth) router.replace('/home');
  else router.replace('/auth/login');

  return <></>;
}
