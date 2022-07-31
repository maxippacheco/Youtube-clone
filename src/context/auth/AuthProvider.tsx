import { useReducer } from 'react';
import { FC } from 'react';
import { authReducer, AuthContext } from './';

interface FCProps{
 children: React.ReactNode;
}

export interface AuthState {
	isLoggedIn: boolean;
}


const AUTH_INITIAL_STATE: AuthState = {
	isLoggedIn: false,
}


const { Provider } = AuthContext;

export const AuthProvider: FC<FCProps> = ({ children }) => {

	const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

	return(
		<Provider value={{
			...state
		}}>
			{ children}
		</Provider>
	)
}