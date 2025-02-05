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
    border-radius: 8px;
    flex-shrink: 0;
    width: 82px;
    height: 38px;
    font-weight: 500;
    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;

    background-color: ${props =>
        props.variant === "primary" ? "#1658F9" :
        props.variant === "secondary" ? "#FFFFFF" : "#FFFFFF"};

    color: ${props =>
        props.variant === "primary" ? "#FFFFFF" :
        props.variant === "secondary" ? "#1658F9" : "#1658F9"};

    border: ${props =>
        props.variant === "secondary" ? "1px solid #1658F9" : "none"};

    &:hover {
        background-color: ${props =>
            props.variant === "primary" ? "#0F4AD0" :  /* Darker blue */
            props.variant === "secondary" ? "#E6EEFF" : "#E6EEFF"}; /* Light blue tint */

        border-color: ${props =>
            props.variant === "secondary" ? "#0F4AD0" : "none"}; /* Darker border for secondary */

        transform: scale(1.03); /* Slight scaling effect */
    }

    /* Focus effect */
    &:focus {
        outline: none;
        box-shadow: 0 0 6px rgba(22, 88, 249, 0.5);
    }

    /* Active effect (when clicked) */
    &:active {
        transform: scale(0.97); /* Slight shrink on click */
    }
`;

const Button = ({ type = "button", variant = "primary", className = "", id, onClick, children }) => {
    return (
        <ButtonComponent
            type={type}
            variant={variant}
            className={`btn-component ${className}`}
            id={id}
            onClick={onClick}
        >
            {children}
        </ButtonComponent>
    );
};

export default Button;
