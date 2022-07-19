import { Grid } from '@mui/material';

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const VideoList = ({ children }: Props) => {
	return (
		<Grid container display="flex" justifyContent="center">

			{ children }
		</Grid>
	)
}
