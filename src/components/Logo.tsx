import React from 'react';
import logoImage from '@/assets/logo.png';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark' | 'transparent';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img
                src={logoImage}
                alt="Sai Creative World Photo & Film's"
                className="h-full w-auto object-contain"
            />
        </div>
    );
};

export default Logo;
