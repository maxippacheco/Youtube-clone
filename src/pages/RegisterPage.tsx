import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Box, Button, Grid, Typography } from '@mui/material';
import { AuthLayout  } from "../layouts"
import { MyTextInput } from "../components/input";
import { form } from "../utils";

export const RegisterPage = () => {
	return (
		<AuthLayout>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Formik 
					initialValues={{
						name:'',
						email: '',
						password: '',
						password2: ''
					}}
					onSubmit={ (values) => {
						console.log(values);
						
					}}
					validationSchema={ form.registerValidations }
				>
					{
						({ handleSubmit }) => (
							<form onSubmit={ handleSubmit }>
								<Grid container spacing={ 3 }>
									<Grid item xs={ 12 }>
										<Typography variant="h1" component="h1" fontSize={ 25 } textAlign="center">Crear cuenta</Typography>
									</Grid>
									<Grid item xs={ 12 }>
										<MyTextInput 
											label="Full name"
											name="name"
										/>
									</Grid>
									<Grid item xs={ 12 }>
										<MyTextInput 
											type="email"
											name="email"
											label="Email"
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
											name="password2"
										/>
									</Grid>
									<Grid item xs={ 12 } >
										<Button fullWidth variant="contained" color="error" type="submit">
											<Typography>Ingresar</Typography>
										</Button>

										<Link to="/login" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
											<Typography textAlign="center" mt={2} fontSize={15} sx={{
												":hover":{
													textDecoration: 'underline'
												}
											}}>¿Ya tienes una cuenta? Inicia Sesión</Typography>
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

export default RegisterPage