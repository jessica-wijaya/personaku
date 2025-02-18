import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border-radius: 14px;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;

    /* Dynamic width & height based on size prop */
    width: ${props => 
        props.size === "navbar" ? "82px" :
        props.size === "hero" ? "174px" :
        props.size === "lg" ? "230px" :
        "305"};  /* Default to '305px' size */

    height: ${props => 
        props.size === "navbar" ? "38px" :
        props.size === "hero" ? "60px" :
        props.size === "lg" ? "70px" :
        "60px"};  /* Default to 'md' size */

    padding: ${props =>
        props.size === "sm" ? "4px 8px" :
        props.size === "md" ? "5px 9px" :
        props.size === "lg" ? "6px 12px" :
        "5px 9px"};  /* Default padding */

    font-size: ${props =>
        props.size === "sm" ? "14px" :
        props.size === "md" ? "16px" :
        props.size === "lg" ? "18px" :
        "16px"};  /* Default font size */

    background-color: ${props =>
        props.variant === "primary" ? "#1658F9" :
        props.variant === "secondary" ? "#FFFFFF" : "#FFFFFF"};

    color: ${props =>
        props.variant === "primary" ? "#FFFFFF" :
        props.variant === "secondary" ? "#1658F9" : "#1658F9"};

    border: ${props =>
        props.variant === "secondary" ? "1px solid #828282" : "none"};

    &:hover {
        background-color: ${props =>
            props.variant === "primary" ? "#0F4AD0" :  
            props.variant === "secondary" ? "#E6EEFF" : "#E6EEFF"};

        border-color: ${props =>
            props.variant === "secondary" ? "#0F4AD0" : "none"};

        transform: scale(1.03);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 6px rgba(22, 88, 249, 0.5);
    }

    &:active {
        transform: scale(0.97);
    }
`;

const Button = ({ type = "button", variant = "primary", size = "md", className = "", id, onClick, children }) => {
    return (
        <ButtonComponent
            type={type}
            variant={variant}
            size={size}
            className={`btn-component ${className}`}
            id={id}
            onClick={onClick}
        >
            {children}
        </ButtonComponent>
    );
};

export default Button;
