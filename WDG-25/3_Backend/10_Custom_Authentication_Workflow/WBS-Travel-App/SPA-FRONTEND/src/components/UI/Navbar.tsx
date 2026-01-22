import { Link, NavLink } from 'react-router';
import { logout } from '@/data';
import useAuth from '@/contexts/useAuth';
import { useNavigate } from 'react-router';

const Navbar = () => {
	const { user, setUser } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		setUser(null);
		navigate('/');
	};

	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<Link to='/' className='btn btn-ghost text-xl'>
					Travel journal
					<span role='img' aria-labelledby='airplane'>
						🛫
					</span>
					<span role='img' aria-labelledby='heart'>
						❤️
					</span>
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					{user ? (
						<>
							<li>
								<NavLink to='/create'>Create post</NavLink>
							</li>
							<li>
								<button onClick={handleLogout}>Logout</button>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to='/register'>Register</NavLink>
							</li>
							<li>
								<NavLink to='/login'>Login</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
