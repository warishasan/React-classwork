import { createContext } from 'react';
import { CountAction } from '../reducer';

export const context = createContext({count:0});

export const updateContext = createContext<React.Dispatch<CountAction>>(()=>undefined);
