
import { useReducer } from 'react';
import { FC } from 'react';
import { videoReducer, VideoContext } from './';

interface FCProps{
 children: React.ReactNode;
}

export interface VideoState {
 prop1: boolean;
}

// todo
const VIDEO_INITIAL_STATE: VideoState = {
 prop1: false,
}


const { Provider } = VideoContext;

export const VideoProvider: FC<FCProps> = ({ children }) => {

const [state, dispatch] = useReducer(videoReducer, VIDEO_INITIAL_STATE)

	return(
		<Provider value={{
			...state
		}}>
			{ children}
		</Provider>
	)
}