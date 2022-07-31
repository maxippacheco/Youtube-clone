import { useReducer } from 'react';
import { FC } from 'react';
import { ITheme } from '../../interfaces';
import { uiReducer, UiContext } from './';

interface FCProps{
 children: React.ReactNode;
}

export interface UiState {
	isMenuOpen: boolean;
	theme     : ITheme;
}


const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false,
	theme: 'dark'
}


const { Provider } = UiContext;

export const UiProvider: FC<FCProps> = ({ children }) => {

	const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE)

	const toggleMenu = () => dispatch({ type:'[Ui] - Toggle menu' });

	const toggleTheme = () => dispatch({ type: '[Ui] - Toggle theme' });


	return(
		<Provider value={{
			...state,
	
			// Methods
			toggleMenu,
			toggleTheme,
		}}>
			{ children}
		</Provider>
	)
}