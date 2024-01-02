import styled from "styled-components";

const Bar = styled.div<{ color: string }>`
    height: 100%;
    background-color: ${({ color }) => color};
    width: auto;
`