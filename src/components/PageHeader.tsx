import React from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    variant?: 'image' | 'minimal';
}

const PageHeader = ({ title, subtitle, backgroundImage, variant = 'image' }: PageHeaderProps) => {
    if (variant === 'minimal') {
        return (
            <div className="pt-24 pb-4 text-center px-4 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary mb-4 uppercase tracking-widest italic">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-secondary/80 z-0" />
            )}

            {/* Content */}
            <div className="relative z-20 text-center px-4 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-widest italic">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
