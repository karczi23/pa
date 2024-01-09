import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 40vh;
    background-color: white;
    box-shadow: 0px 0px 30px -2px rgba(66, 68, 90, 1);
    border-radius: 2em;
    margin: 20px;
    font-family: 'Roboto';
    place-self: center;
`;

const TopDownContainer = styled.div<{ alignment?: string; height?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.alignment ? props.alignment : 'space-around')};
    height: ${(props) => (props.height ? props.height : 'auto')};
`;

const ChartTextContainer = styled.div`
    width: 100%;
    height: 1em;
`;

const TitleText = styled.div`
    font-size: 1.5rem;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    @media (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export { Container, TopDownContainer, ChartTextContainer, TitleText, GridContainer };
