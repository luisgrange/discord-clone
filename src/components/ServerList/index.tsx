import React from 'react';
import {Container, Separator} from './styles';
import { ServerButton } from '../ServerButton';

export function ServerList(){
    return(
        <>
            <Container>
                <ServerButton isHome/>

                <Separator/>

                <ServerButton hasNotification/>
                <ServerButton mentions={4}/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
            </Container>
        </>
    );
}