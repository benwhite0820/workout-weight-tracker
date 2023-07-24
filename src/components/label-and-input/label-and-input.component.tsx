import React from 'react';

type Props = {
    children: React.ReactNode;
    name: string;
    placeholder?: string;
    imputType?: string;
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
};

const LabelAndInput = ({
    children,
    name,
    placeholder = '',
    imputType = 'text',
    className = '',
    onChange,
    value,
}: Props) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleInputFocus = () => setIsFocused(true);
    const handleInputBlur = () => setIsFocused(false);

    return (
        <>
            <div className={`${className} flex flex-col relative`}>
                <label
                    className={`absolute transition-all duration-300 ${
                        isFocused || value
                            ? '-top-8 text-gray-600 text-lg'
                            : 'top-0 text-black text-xl'
                    }`}
                    placeholder={placeholder}
                    htmlFor={name}
                >
                    {children}
                </label>
                <input
                    className="border-b-2 focus:outline-none text-xl"
                    id={name}
                    name={name}
                    type={imputType}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </>
    );
};

export default LabelAndInput;
