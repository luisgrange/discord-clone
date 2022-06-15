import React from 'react';
import {Container, Category, AddCategoryIcon} from './styles'
import { ChannelButton } from './ChannelButton';

export function ChannelList(){
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
            <ChannelButton chatName="chat-livre"/>
        </Container>
    );
}