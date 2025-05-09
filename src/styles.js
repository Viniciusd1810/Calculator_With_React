import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1271fe;
    min-width: 360px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #1a1f33;
    width: 50%;
    min-height: 350px;
    padding: .50rem;
    border: 1px solid rgb(101, 18, 254);
    border-radius: .5rem;
    max-width: 400px;
    min-width: 320px
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`