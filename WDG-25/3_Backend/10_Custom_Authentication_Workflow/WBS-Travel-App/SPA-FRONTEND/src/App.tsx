import { BrowserRouter, Routes, Route } from 'react-router';
import { RootLayout } from '@/layouts';
import { CreatePost, Home, Login, NotFound, Post, Register } from '@/pages';
import ProtectedLayout from './layouts/ProtextedLayout';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />

				<Route path='post/:id' element={<Post />} />
				<Route element={<ProtectedLayout />}>
					<Route path='create' element={<CreatePost />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default App;
