
import { createContext } from 'react';

interface ContextProps{
	openMenu: boolean;
	
}


export const UiContext = createContext({} as ContextProps);