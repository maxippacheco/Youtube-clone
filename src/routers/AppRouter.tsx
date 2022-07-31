import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatevideoPage, HomePage, LoginPage, RegisterPage, VideoPage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <HomePage /> } />
				<Route path="/login" element={ <LoginPage /> } />
				<Route path="/register" element={ <RegisterPage /> } />
				<Route path="/video/:id" element={ <VideoPage /> } />
				<Route path="/create" element={ <CreatevideoPage /> } />
			</Routes>
		</BrowserRouter>
	)
}
