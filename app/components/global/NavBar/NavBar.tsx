"use client";

import { NavBarProvider } from './NavBarContext';
import { NavBarComponent } from './NavBarComponent';

export default function NavBar() {
    return (
        <NavBarProvider>
            <NavBarComponent />
        </NavBarProvider>
    );
};
