import React from 'react';
import {Container, HashtagIcon, InviteIcon, SettingsIcon} from './styles';

interface Props{
    chatName: string;
    selected?: boolean
}

export function ChannelButton({chatName, selected}: Props){
    return(
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{chatName}</span>
            </div>

            <div>
                <InviteIcon/>
                <SettingsIcon/>
            </div>
        </Container>
    );
}