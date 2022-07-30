import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
