// In a new file: src/Components/MenuLayout/MenuLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';

// Assuming you have these components defined/exported in their respective files
import Header from './Header'; // Adjust path if necessary
import Footer from './Footer'; // Adjust path if necessary

const MenuLayout = () => {
    return (
        <div className="layout-container">
            {/* The Header component (e.g., your navigation bar) */}
            <Header />
            
            {/* The <Outlet /> component renders the content 
              of the currently matched NESTED route.
            */}
            <main className="page-content">
                <Outlet />
            </main>
            
            {/* The Footer component (the one we just finished designing) */}
            <Footer />
        </div>
    );
};

export default MenuLayout;