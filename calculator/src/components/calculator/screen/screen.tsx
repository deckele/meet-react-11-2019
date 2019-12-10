import React from 'react';
import './screen.scss';

export interface ScreenProps {
    text: string;
}

export const Screen: React.FC<ScreenProps> = ({ text }) => 
    <div className="screen">{text}</div>;