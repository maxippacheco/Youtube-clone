import { NotificationsOutlined, YouTube, AccountCircle } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react';
import { UiContext } from '../../context';
import { ThemeSwitch } from '../switch';

export const Navbar = () => {

	const { toggleMenu, toggleTheme, theme } = useContext( UiContext );

	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton
					size="large"
					sx={{ p: 1, fontSize: 40 }}
				>
					<YouTube sx={{ color: 'red', fontSize: 30 }} />
				</IconButton>

				<Typography variant="h6">Youtobe</Typography>

				<Box flex={ 1 } />


				<Box>

					<ThemeSwitch 
						onClick={ toggleTheme } 
						checked={ theme === 'dark' ? true : false }
					/>
					
					<IconButton>
						<Badge badgeContent={ `+${9}` } color="secondary">
							<NotificationsOutlined />
						</Badge>
					</IconButton>
				
					<IconButton
						onClick={ toggleMenu }
					>
						<AccountCircle />
					</IconButton>
				


				</Box>

			</Toolbar>
		</AppBar>
	)
}
