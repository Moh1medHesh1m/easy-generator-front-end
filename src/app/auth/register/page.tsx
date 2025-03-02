import { GuestGuardProvider } from '@/components/providers/guards/AuthGuardProvider';
import SignUpForm from '@/components/templates/SignUpForm/SignUpForm';

const RegisterPage = () => {
  return (
    <>
    <GuestGuardProvider>
      <SignUpForm />
    </GuestGuardProvider>
    </>
  );
};

export default RegisterPage;
