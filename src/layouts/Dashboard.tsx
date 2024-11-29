import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardProps {
  children: React.ReactNode;
}
const Dashboard = ({ children }: DashboardProps) => {
  const userRole = "admin";
  return (
    <div className="flex h-screen max-w-[1400px] mx-auto">
      {/* sidebar */}
      <Sidebar userRole={userRole} />
      {/* right area */}
      <div className="flex flex-col flex-1 overflow-hidden ">
        {/* header */}
        <Header />
        <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden scrollbar-custom">
          <div className=" flex-1  px-6 py-6 bg-black/60 ">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
