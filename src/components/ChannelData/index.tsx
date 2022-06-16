import React from 'react';
import {Container} from './styles'
import { ChatBar } from './ChatBar';

export function ChannelData(){
    return(
        <Container>
            {/* <ServerMessages/> */}
            <ChatBar/>
        </Container>
    );
}