import React, { ReactElement } from 'react'
import styled from 'styled-components';

export interface IAnimColor {
    in : string;
    out : string;
    time : number;
};

export interface IAnimDiv {
    bgColor : IAnimColor;
    textColor : IAnimColor;
}

export let AnimDiv = styled.div<IAnimDiv> ` 
    background-color : ${props => props.bgColor.in};
    color : ${props => props.textColor.in};

transition : background-color ${props => props.bgColor.time}s ease, color ${props => props.textColor.time}s ease;

    &:hover {
        background-color : ${props => props.bgColor.out};
        color : ${props => props.textColor.out};
        transition : background-color ${props => props.bgColor.time}s ease, color ${props => props.textColor.time}s ease;
    }
`;


interface PropsColorChange {
    text : string;
    bgColor : IAnimColor;
    color : IAnimColor;
}

function ColorChange({text, bgColor, color}: PropsColorChange): ReactElement {
    return (
        <AnimDiv bgColor={bgColor} textColor={color}>
            {text}
        </AnimDiv>
    )
}

export default ColorChange
