import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardProps {
  children: React.ReactNode;
}
const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex h-screen max-w-[1400px] mx-auto">
      {/* sidebar */}
      <Sidebar />
      {/*  hi */}
      {/* right area */}
      <div className="flex flex-col flex-1 overflow-hidden ">
        {/* header */}
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="w-full h-full  px-6 py-6 ">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
