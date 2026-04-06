import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that redirects unauthenticated users to the sign-in page.
 * It also handles the case where MFA is required by redirecting to the MFA verification page.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isMfaRequired } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Save the attempted location to redirect back after sign-in
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (isMfaRequired) {
    // If MFA is triggered but not yet verified, force MFA page
    return <Navigate to="/verify-mfa" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
