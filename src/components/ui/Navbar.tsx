import { NotificationsOutlined, YouTube, AccountCircle } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Navbar = () => {

	return (
		<AppBar position="sticky">
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
					<IconButton>
						<Badge badgeContent={ `+${9}` } color="secondary">
							<NotificationsOutlined />
						</Badge>
					</IconButton>
				
					<IconButton
					>
						<AccountCircle />
					</IconButton>


				</Box>

			</Toolbar>
		</AppBar>
	)
}
