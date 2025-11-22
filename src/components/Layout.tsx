import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import MobileQuickNav from "./MobileQuickNav";
import TouchRippleLayer from "./TouchRippleLayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <CursorFollower />
      <Navbar />
      <TouchRippleLayer />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
      <MobileQuickNav />
    </div>
  );
};

export default Layout;
