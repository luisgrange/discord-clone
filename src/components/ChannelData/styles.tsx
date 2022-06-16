import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CD;
    display: block;

    background-color: var(--primary);
    
    position: relative;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 8px;
        background-color: #202225;
    }

    ::-webkit-scrollbar-track{
        background-color: #2F3136; 
    }
`;
