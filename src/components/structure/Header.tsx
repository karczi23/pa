import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: 'Roboto';
    font-size: 2.5rem;
    width: 100vw;
    height: 10vh;
    background-color: var(--secondaryColor);
    border-bottom: 2px solid var(--primaryColor);
    padding-left: 3vw;
    box-sizing: border-box;
`;

export { Header };
