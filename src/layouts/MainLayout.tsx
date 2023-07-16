import { decodeAccessToken } from '@/lib/jwthelper';
import { setLoginUser } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  interface IDecodedToken {
    userEmail: string;
    id: string;
  }
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // Check if access token exists in local storage
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Decode the access token and extract necessary user information if needed
      const decodedToken = decodeAccessToken(accessToken) as IDecodedToken;
      // Dispatch the action to set the user as logged in
      dispatch(setLoginUser(decodedToken?.userEmail));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
