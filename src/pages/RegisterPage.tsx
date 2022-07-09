import { AuthLayout  } from "../layouts"
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export const RegisterPage = () => {
	return (
		<AuthLayout>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Grid container spacing={ 3 }>
					<Grid item xs={ 12 }>
						<Typography variant="h1" component="h1" fontSize={ 25 } textAlign="center">Crear cuenta</Typography>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Email"
							color="error"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Nombre de usuario"
							color="error"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Password"
							color="error"
							variant="outlined"
							type="password"
						/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField 
							fullWidth
							label="Confirm Password"
							color="error"
							variant="outlined"
							type="password"
						/>
					</Grid>
					<Grid item xs={ 12 } >
						<Button fullWidth variant="contained" color="error">
							<Typography>Ingresar</Typography>
						</Button>

						<Link to="/login" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
							<Typography textAlign="center" mt={2} fontSize={15}>¿Ya tienes una cuenta? Inicia Sesión</Typography>
						</Link>
					</Grid>

				</Grid>


			</Box>	
		</AuthLayout>
	)

}
