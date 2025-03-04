'use client';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/lib/hooks';
import { logOut } from '@/lib/redux/features/auth.slice';

function LogoutButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const submit = () => {
    dispatch(logOut());
    router.push('/auth/login');
  };

  return (
    <li className="my-px">
      <span className="flex items-center justify-center pr-16 text-lg text-red-400">
        <svg
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
        </svg>
    
          <span className="text-primary ml-5"  onClick={submit}>Logout</span>
      </span>
    </li>
  );
}

export default LogoutButton;
