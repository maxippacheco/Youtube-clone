
import { createContext } from 'react';
import { ITheme } from '../../interfaces';

interface ContextProps{
	theme			: ITheme;
	isMenuOpen: boolean;
	
	// Methods
	toggleMenu: () => void;
	toggleTheme:() => void;
	
}


export const UiContext = createContext({} as ContextProps);