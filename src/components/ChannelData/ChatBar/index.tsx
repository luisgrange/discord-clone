import React from 'react';
import {Container, AtIcon} from './styles';

export function ChatBar(){
    return(
        <Container>
            <form>
            <AtIcon/>
                <input type="text" placeholder='Conversa em #chat-livre'/>
            </form>
        </Container>
    )
}