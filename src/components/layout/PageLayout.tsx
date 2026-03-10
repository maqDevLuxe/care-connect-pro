/* ===== Page Layout ===== 
   Wraps all pages with consistent Navbar + Footer.
*/

import { ReactNode } from "react";
import MedicalNavbar from "./MedicalNavbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MedicalNavbar />
      <main className="flex-1 pt-[108px]">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
