import React, { FC } from "react";
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    btnType?: "Primary" | "Secondary";
    onClick?: () => void
}

const Button: FC<ButtonProps> = (props) => {
    const { children, className, type = 'submit', btnType, onClick } = props;

    return <button
        onClick={onClick}
        type={`${type}`}
        className={`button border ${btnType} ${className}`} >
        {children}
    </button>
}

export default Button