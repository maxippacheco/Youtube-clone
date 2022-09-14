import { VideoState } from './';

type VideoActionType = 
	| { type: '[Video] - ActionName' }
;


export const videoReducer = ( state: VideoState, action: VideoActionType ): VideoState => {  

	// todo
	switch ( action.type ) {  

		case '[Video] - ActionName':
			return {
				...state,
			}
		
		default:
			return state;
	}
 

}