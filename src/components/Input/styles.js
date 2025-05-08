import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #1a1f33;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Roboto';

    & input{
        display: flex;
        flex-direction: column;
        text-align: end;

        width: 100%;
        height: 75px;
        background-color: #1a1f33;
        border: 0;
        padding: 0 1rem;

        font-size: 3rem;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`