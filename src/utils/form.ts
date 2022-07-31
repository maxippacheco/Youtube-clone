import * as Yup from 'yup';

export const loginValidation = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string().min(6, 'Minimum is 6 characters').required('Required'),
		confirmPassword: Yup.string()
			.min(6, 'Minimum is 6 characters')
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Required'),
})