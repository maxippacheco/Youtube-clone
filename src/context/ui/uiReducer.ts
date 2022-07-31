
import { UiState } from './';

type UiActionType = 
	| { type: '[Ui] - Toggle menu'  }
	| { type: '[Ui] - Toggle theme' }
;


export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {  


 switch ( action.type ) {  

	 	case '[Ui] - Toggle menu':
		 	return {
				...state,
				isMenuOpen: !state.isMenuOpen
		 	}
		
		case '[Ui] - Toggle theme':
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : state.theme === 'dark' ? 'light' : 'dark'
			}
	 
	 default:
		 return state;
	}
 

}