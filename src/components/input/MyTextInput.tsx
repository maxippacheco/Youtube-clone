import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface Props{
	label       : string;
	name        : string;
	type?       : 'email' | 'text' | 'password';
	placeholder?: string;
	[x: string] : any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [ field ] = useField(props);

  	return (
			<>
				<TextField 
					fullWidth
					color="error"
					variant="outlined"
					sx={{ mb: 1}}
					label={ label }
					{ ...field }
					{...props }
				/>
				<ErrorMessage name={ props.name } component="span" />
			</>
  	);
};