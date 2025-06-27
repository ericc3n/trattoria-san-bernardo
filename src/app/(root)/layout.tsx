import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import Topbar from '@/ui/Topbar/Topbar';
import { ReactNode } from "react";

export default function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return(
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}