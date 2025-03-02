import { GuestGuardProvider } from '@/components/providers/guards/AuthGuardProvider';
import SignInForm from '@/components/templates/SignInForm/SignInForm';

export default function LoginPage() {
  return (
    <>
    <GuestGuardProvider>
      <SignInForm />
    </GuestGuardProvider>
    </>
  );
}
