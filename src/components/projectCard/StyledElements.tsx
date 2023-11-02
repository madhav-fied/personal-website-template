import styled from 'styled-components';

const styledDiv = styled.div``;

export const ProjectCardContainer = styled(styledDiv)`
    padding: 16px;
    background-color: black;
    color: white;
    Height: 33%;
    Width: 33%;
    border-radius: 8px;
    transition: transform .3s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .8);
    }
`;
