import React from 'react';

const MainLayout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <main className="relative bg-orange-400/10 h-screen">
            <div className="container pt-16 max-w-7xl w-full mx-auto h-full">
                {children}
            </div>
        </main>
    );
};

export default MainLayout;