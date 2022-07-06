import React, { FC } from "react";
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    btnType?: "Primary" | "Secondary";
}

const Button: FC<ButtonProps> = (props) => {
    const { children, className, type = 'submit', btnType } = props;

    return <button
        type={`${type}`}
        className={`button border ${btnType} ${className}`} >
        {children}
    </button>
}

export default Button