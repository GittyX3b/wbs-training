import useAuth from '@/contexts/useAuth';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

const ProtectedLayout = () => {
	const navigate = useNavigate();
	const { user, authLoading } = useAuth();

	useEffect(() => {
		if (authLoading) return;
		if (!user) navigate('/login');
	}, [user, navigate, authLoading]);

	if (authLoading) return <p>Loading...</p>;
	if (!user) return null;
	return <Outlet />;
};

export default ProtectedLayout;
