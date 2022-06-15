import React from 'react';
import {Button} from './styles';
import logo from '../../assets/logo.svg';

export interface Props{
    selected?: boolean;
    isHome?: boolean;
    hasNotification?: boolean;
    mentions?: number;
}

export function ServerButton({
    selected, 
    isHome, 
    hasNotification, 
    mentions
}: Props){

    return(
        <Button
            isHome={isHome}
            hasNotification={hasNotification}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={logo}/>}
        </Button>
    );
}