import React from 'react';
import {Container} from './styles'
import { ChatBar } from './ChatBar';
import { ServerMessages } from './ServerMessages';

export function ChannelData(){
    return(
        <Container>
            <ServerMessages/>
            <ChatBar/>
        </Container>
    );
}