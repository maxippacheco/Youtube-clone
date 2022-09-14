import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1 } from '../01-lazyload/pages';
// import LazyPage1 from '../01-lazyload/pages/LazyPage1';


type JSXComponent = () => JSX.Element;

interface Route{
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}


// cambiar nombre del chunk
const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ '../pages/HomePage'));
const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */ '../pages/LoginPage'));
const RegisterPage = lazy(() => import(/* webpackChunkName: "RegisterPage" */ '../pages/HomePage'));
const VideoPage = lazy(() => import(/* webpackChunkName: "VideoPage" */ '../pages/VideoPage'));
const CreatevideoPage = lazy(() => import(/* webpackChunkName: "CreateVideoPage" */ '../pages/CreatevideoPage'));


export const routes: Route[] = [
	{
		path: '/home',
		to: '/home', 
		Component: HomePage,
		name: 'Home-Page'
	},
	{
		path: '/login',
		to: '/login', 
		Component: LoginPage,
		name: 'Login-Page'
	},
	{
		path: '/register',
		to: '/register', 
		Component: RegisterPage,
		name: 'Register-Page'
	},
	{
		path: '/video/:id',
		to: '/video/:id', 
		Component: VideoPage,
		name: 'Video-Page'
	},
	{
		path: '/create',
		to: '/create', 
		Component: CreatevideoPage,
		name: 'Create-Video-Page'
	},

]