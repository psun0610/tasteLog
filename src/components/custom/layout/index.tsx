// src/components/Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* 중앙 콘텐츠 영역 */}
      <div className="w-full max-w-lg flex flex-col h-screen">
        {/* 헤더 */}
        <Header />
        {/* 본문 */}
        <main className="flex-1 overflow-auto">{children}</main>
        {/* 푸터 */}
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
