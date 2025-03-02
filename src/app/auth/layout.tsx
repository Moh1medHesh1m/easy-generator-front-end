import AuthLayout from '@/components/organisms/Layouts/AuthLayout/AuthLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
