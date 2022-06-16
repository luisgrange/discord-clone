import React from 'react';
import {Container} from './styles';

export function ChatBar(){
    return(
        <Container>
            <form>
                <input type="text" placeholder='Conversa em #chat-livre'/>
            </form>
        </Container>
    )
}