import { createContext } from 'react';

interface ContextProps{
	// todo
	prop1: boolean;
}


export const VideoContext = createContext({} as ContextProps);