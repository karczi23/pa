import styled from 'styled-components';

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
    font-family: 'Roboto';
`;

const TopDownContainer = styled.div<{ alignment?: string; allSpace?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.alignment ? props.alignment : 'space-around')};
    height: ${(props) => (props.allSpace ? '100%' : 'auto')};
`;

const ChartTextContainer = styled.div`
    width: 100%;
    height: 1em;
`;

const TitleText = styled.div`
    font-size: 1.5rem;
`;

export { Container, TopDownContainer, ChartTextContainer, TitleText };
