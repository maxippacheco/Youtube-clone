import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <HomePage /> } />
				<Route path="/login" element={ <LoginPage /> } />
			</Routes>
		</BrowserRouter>
	)
}
