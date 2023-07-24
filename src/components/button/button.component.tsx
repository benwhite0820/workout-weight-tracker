import React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Button = ({ children, className = '' }: Props) => {
    return (
        <button
            className={`rounded bg-zinc-900 text-white p-4 border hover:text-black hover:bg-white hover:border-black ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
