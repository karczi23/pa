import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40vh;
    background-color: white;
    box-shadow: 0px 0px 30px -2px rgba(66, 68, 90, 1);
    border-radius: 2em;
    margin: 20px;
`

const TopDownContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ChartTextContainer = styled.div`
    width: 100%; 
    height: 1em;
`

export { Container, TopDownContainer, ChartTextContainer };