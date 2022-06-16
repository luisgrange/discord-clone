import styled from 'styled-components';
import { At } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
    background-color: transparent;
    width: 100%;
    flex: 1;

    position: absolute;
    bottom: 0;

    padding: 0 16px 23px;

    > form{
        width: 100%;
        position: relative;
    }

    > form input{
        width: 100%;
        padding: 13px 0  13px 57px;

        font-weight: 400;
        font-size: 16px;

        background-color: #40444B;
        border-radius: 7px;

        color: #6f6f6a;

        
    }
`;

export const AtIcon = styled(At)`
    color: #6f6f6a;

    position: absolute;
    left: 16px;
    top: 11px;

    height: 25px;
    width: 25px;


`;