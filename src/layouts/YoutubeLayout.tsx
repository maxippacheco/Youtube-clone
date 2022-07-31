import { Box } from '@mui/material';
import { FC } from 'react';
import { Navbar, SideMenu } from '../components/ui';

interface Props {
	children?: JSX.Element | JSX.Element[];
}

export const YoutubeLayout: FC<Props> = ({ children }) => {
	return (
		<>

			<nav>
				<Navbar />
			</nav>

			<SideMenu />

			<main style={{
				margin: '80px auto',
				maxWidth: '1440px',
				// padding: '0px 20px',
			}}>
				{ children }
			</main>
		
		</>
	)
}
