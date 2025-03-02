import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {  useAppSelector } from './store.hooks';

export function useAuthGuard() {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!auth.isAuth) {
      if (!toast.isActive('signIn')) {
        toast.info('You need to sign in', {
          position: 'top-left',
          toastId: 'signIn',
        });
      }
      router.replace('/auth/login');
    } else {
      setIsLoading(false);
    }
  }, [auth.isAuth, router]);

  return isLoading ? null : auth;
}

export function useGuestGuard() {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (auth.isAuth) {
      router.replace('/home');
    } else {
      setIsLoading(false);
      }
    }, [auth.isAuth, router]);

    return isLoading;
  }

