import React from 'react';
import {Container, Role, User, Avatar} from './styles'

interface UserProps{
    nickname: string;
    isBot?: boolean;
    offline?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot, offline}) => {
    return(
        <User className={offline ? 'off' : ''}>
            <Avatar/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

export function UserList(){
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow  nickname="Luís Fernando"/>
            <UserRow  nickname="Fuís Lernando"/>

            <Role>Offline - 9</Role>
            <UserRow  nickname="Fulano" isBot offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
            <UserRow  nickname="Ciclano" offline/>
        </Container>
    );
}