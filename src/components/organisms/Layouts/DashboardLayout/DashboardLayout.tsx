import React from 'react';
import { DashboardHeader } from '../../../molecules/Headers/DashboardHeader/Header';
import { SideNav } from '../../../molecules/SideNav/SideNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <DashboardHeader />
      <SideNav />
      <main className="ml-60 max-h-screen overflow-auto">
        <div className="py-8">
          <div className="w-full rounded-3xl p-10">
            <div className="flex items-center justify-between">
              <div className="mx-auto w-full items-stretch">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
