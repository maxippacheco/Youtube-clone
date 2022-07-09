import { Box } from '@mui/material';

interface Props {
	children?: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ children }: Props ) => {
	return (
		<>
			<main>
				<Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 100px)">
					{ children }
				</Box>
			</main>
		</>
	)
}
