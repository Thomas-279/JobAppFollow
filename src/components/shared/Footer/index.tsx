import React from "react"
import { darkModeProps } from '../../utilities/types';

type FooterProps = {
    darkMode: darkModeProps;
}

const Footer = ({ darkMode }: FooterProps) => {
    return (
        <footer className="bottom-0">
            <p className={`text-xs ${darkMode ? 'text-gray-50' : 'text-gray-900' }`}>2022 - Made with ☕ by Thomas GARRAUT</p>
        </footer>
    )
}

export default Footer;