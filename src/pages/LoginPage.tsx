import { AuthLayout,  } from "../layouts"
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik'
import { MyTextInput } from "../components/input";
import * as Yup from 'yup'
import { form } from "../utils";

export const LoginPage = () => {
	
	return (
		<AuthLayout>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Formik
					initialValues={{
						email: '',
						password: '',
						confirmPassword: ''
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
					validationSchema={ form.loginValidation }
				>
					{
						({ handleSubmit }) => (
							<form onSubmit={ handleSubmit }>
								<Grid container spacing={ 3 }>
									<Grid item xs={ 12 }>
										<Typography variant="h1" component="h1" fontSize={ 25 } textAlign="center">Iniciar Sesión</Typography>
									</Grid>
									<Grid item xs={ 12 }>
										<MyTextInput
											type="email" 
											label="Email"
											name="email"
										/>
									</Grid>
									<Grid item xs={ 12 }>
										<MyTextInput
											label="Password"
											type="password"
											name="password"
										/>
									</Grid>
									<Grid item xs={ 12 }>
										<MyTextInput 
											label="Confirm Password"
											type="password"
											name="confirmPassword"
										/>
									</Grid>
									<Grid item xs={ 12 } >
										<Button fullWidth variant="contained" color="error" type="submit">
											<Typography>Ingresar</Typography>
										</Button>
										<Link to="/register" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
											<Typography textAlign="center" mt={2} fontSize={15} sx={{
												":hover":{
													textDecoration: 'underline'
												}
											}}>¿No tienes una cuenta?</Typography>
										</Link>
									</Grid>

								</Grid>
							</form>
						)
					}

				</Formik>

			</Box>	
		</AuthLayout>
	)
}
