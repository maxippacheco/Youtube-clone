import { YoutubeLayout } from "../layouts"
import { Grid } from '@mui/material';

export const VideoPage = () => {
	return (
		<YoutubeLayout>
			<Grid container>
				<Grid item xs={ 12 } sm={ 9 }></Grid>
				<Grid item xs={ 12 } sm={ 3 } bgcolor="#fff">
					a
				</Grid>
				
			</Grid>
		</YoutubeLayout>
	)
}
