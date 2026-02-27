import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-10 mesh-gradient"></div>
      <Navbar />
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
