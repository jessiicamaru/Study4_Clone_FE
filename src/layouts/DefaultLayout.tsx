import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
import SideTools from '../components/SideTools';

type DefaultLayoutProps = {
    children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="relative w-full min-h-screen">
            <div className="!sticky w-full h-16 top-0 bg-white z-10">
                <Header />
            </div>

            <div className="!fixed right-0 top-1/2 z-10">
                <SideTools />
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
