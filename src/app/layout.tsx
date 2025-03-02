import '../styles/global.css';

import { ProvidersWrapper } from '@/components/providers/ProvidersWrapper';

import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="relative max-h-screen overflow-hidden bg-latte">
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
