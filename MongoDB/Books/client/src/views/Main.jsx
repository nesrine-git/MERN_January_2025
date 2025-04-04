import React from 'react';
import Header from '../components/Header';

const Main = ({ children }) => {
    return (
        <div className="d-flex flex-column border border-3 border-dark min-vh-100">
            {/* Header */}
            <Header />

            {/* Main content grows to fill remaining space */}
            <main className="flex-grow-1 container py-4">
                {children}
            </main>

            {/* footer */}
            <footer className="py-4 border-top border-3 border-dark" style={{backgroundColor:"#eeeeee"}}>
            </footer>
        </div>
  );
};

export default Main;
