import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #418c85;
    margin-left: 30px;
    margin-top: 20px;
    color: #418c85;
    font-size 14px;
    border-radius: 10px;
    box-shadow: 0px 0px 17px -8px trasparent;
    transition: all 0.25s ease-out;

    &:hover{
        color: #fff;
        background-color: #418c85;
        box-shadow: 0px 0px 17px -5px #418c85;
    }
`