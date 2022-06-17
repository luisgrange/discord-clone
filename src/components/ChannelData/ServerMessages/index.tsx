import React from 'react';
import { Container, User, Avatar } from './styles';

interface Props{
    name: string;
    isBot?: boolean;
    message: string;
    marked?:boolean;
    date?: string;
}

export function ServerMessages(){
    return(
        <Container>

            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" message="Isso é uma mensagem" date="16/05/2022"/>
            <UserRow name="Fulano" isBot message="Isso é uma mensagem" marked/>

        </Container>
    );
}

export function UserRow({
    name,
    isBot,
    message,
    marked,
    date

}: Props){
    return(

        <User className={marked ? 'marked' : ''}>
            <Avatar/>
            <div>
                <strong>{name}  {date && <span>{date}</span>}</strong>
                <span>{message}</span>
            </div>

            {isBot && <span>Bot</span>}

        </User>

    );
}