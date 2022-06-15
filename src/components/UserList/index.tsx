import React from 'react';
import {Container, Role, User, Avatar} from './styles'

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return(
        <User>
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

            <Role>Offline - 1</Role>
            <UserRow  nickname="Fulano" isBot/>
        </Container>
    );
}