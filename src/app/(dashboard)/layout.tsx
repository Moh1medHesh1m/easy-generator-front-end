import "../../styles/global.css";
import DashboardLayout from "@/components/organisms/Layouts/DashboardLayout/DashboardLayout";
import AuthGuardProvider from "@/components/providers/guards/AuthGuardProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuardProvider>
      <DashboardLayout>
        <div className="flex justify-center"></div>
        {children}
      </DashboardLayout>
    </AuthGuardProvider>
  );
}
