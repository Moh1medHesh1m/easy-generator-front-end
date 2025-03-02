import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { toast } from 'react-toastify';


export async function checkUserIsAuthenticated(
  user: any | null,
  router: AppRouterInstance
) {
  if (!user) {
    router.push('/auth/login');
    toast.error("You're not authorized to access this page", {
      position: 'top-left',
    });
  }
}
