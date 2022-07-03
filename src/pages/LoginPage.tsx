import { AuthLayout,  } from "../layouts"
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
	console.log(123);
	
	return (
		<AuthLayout>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Grid container spacing={ 3 }>
					<Grid item xs={ 12 }>
						<Typography variant="h1" component="h1" fontSize={ 25 } textAlign="center">Iniciar Sesión</Typography>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Email"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Password"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Confirm Password"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={ 12 } >
						<Button fullWidth variant="contained" color="primary">
							<Typography>Ingresar</Typography>
						</Button>
					</Grid>
				</Grid>
			</Box>	
		</AuthLayout>
	)
}
