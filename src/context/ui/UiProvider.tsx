import { useReducer } from 'react';
import { FC } from 'react';
import { uiReducer, UiContext } from './';

interface FCProps{
 children: React.ReactNode;
}

export interface UiState {
 	openMenu: boolean;
}


const UI_INITIAL_STATE: UiState = {
	openMenu: false,
}


const { Provider } = UiContext;

export const UiProvider: FC<FCProps> = ({ children }) => {

const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE)

	return(
		<Provider value={{
			...state
		}}>
			{ children}
		</Provider>
	)
}