
import { UiState } from './';

type UiActionType = 
	| { type: '[Ui] - Toggle menu' }
;


export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {  


 switch ( action.type ) {  

	 case '[Ui] - Toggle menu':
		 return {
			 ...state,
		 }
	 
	 default:
		 return state;
	}
 

}