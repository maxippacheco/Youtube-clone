import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CreatevideoPage, HomePage, LoginPage, RegisterPage, VideoPage } from '../pages'
import { routes } from './routes'

export const AppRouter = () => {
	return (
		// todo loading
		<Suspense fallback={ <div>Loading...</div>}>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" element={ <HomePage /> } />
					<Route path="/login" element={ <LoginPage /> } />
					<Route path="/register" element={ <RegisterPage /> } />
					<Route path="/video/:id" element={ <VideoPage /> } />
					<Route path="/create" element={ <CreatevideoPage /> } /> */}

					{
						routes.map(({ path, to, Component }) => (
							<Route path={ path } element={<Component />} key={ to }  />
						))
					}

					<Route path="/*" element={ <Navigate to="/login" />} />
				</Routes>
			</BrowserRouter>

		</Suspense>
	)
}
