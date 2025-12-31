import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark' | 'transparent';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Camera Icon - Soft Rounded Edges */}
                <g stroke="currentColor" strokeWidth="2.5" fill="none">
                    <rect
                        x="5"
                        y="14"
                        width="40"
                        height="30"
                        rx="8"
                    />
                    <circle
                        cx="25"
                        cy="29"
                        r="8"
                    />
                    <path
                        d="M14 14L17 8H33L36 14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <circle
                    cx="38"
                    cy="20"
                    r="2"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default Logo;
