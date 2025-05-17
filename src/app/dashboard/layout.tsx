import Header from "./_components/layout/header";
import Sidebar from "./_components/layout/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <section className="bg-slate-100 p-5 ">
      <div className="flex flex-row gap-3 ">
        <div className="w-56  inline-block">
          <Sidebar />
        </div>
        <div className="w-[800px] ms-auto inline-block">
          <Header />
          {children}
        </div>
      </div>
    </section>
  );
}
