import React, { FC } from "react";
import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    type: "button" | "submit" | "reset";
    btnType: "Primary" | "Secondary";
}

const Button: FC<ButtonProps> = (props) => {
    return <button
        type={`${props.type}`}
        className={`button border ${props.className} ${props.btnType}`} >
        {props.children}
    </button>
}

export default Button