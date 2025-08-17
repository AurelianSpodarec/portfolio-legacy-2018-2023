import React, { ElementType, ReactNode } from 'react';



function Button( {
    children,
    label = "",
    as: Tag = "button",
    className = "",
    loading,
    ...restProps
}: ButtonProps) {

    const prefix = "button";
    const content = label || children;

    return (
        <Tag
            className={`
                rounded-[3px]
                ${className}`.trim()
            }
            {...restProps}
        >
        <div className="inline-block">
            {content}

            {loading &&
            <svg className="inline-block animate-spin ml-2 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            }
        </div>
        </Tag>
    );
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    ref?: React.Ref<any>;
    label?: string;
    as?: string | "a" | "Link" | "button";
    variant?: "primary" | "secondary" | "link" | "success" | "warning" | "danger" | "info";
    kind?: "solid" | "outline" | "ghost" | "subtle";
    type?: "submit" | "button" | "reset";
    size?: "md";
    radius?: "md";
    href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    iconPosition?: any;
    loading?: any;
}
