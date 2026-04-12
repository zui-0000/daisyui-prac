import type { FC, ReactNode } from "react";
import { ComponentsSideBar } from "~/components/features/ComponentsSideBar";

interface CommonLayoutProps {
  children: ReactNode;
}

export const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <ComponentsSideBar />
      <main className="flex-1 overflow-y-auto p-10">{children}</main>
    </div>
  );
};
