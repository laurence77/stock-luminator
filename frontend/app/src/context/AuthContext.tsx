import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  tier: 'retail' | 'institutional' | 'high-net-worth';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isMfaRequired: boolean;
  isKycCompleted: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyMfa: (code: string) => Promise<boolean>;
  completeKyc: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('luminator_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('luminator_auth') === 'true';
  });

  const [isKycCompleted, setIsKycCompleted] = useState(() => {
    return localStorage.getItem('luminator_kyc') === 'true';
  });

  const [isMfaRequired, setIsMfaRequired] = useState(false);

  const login = useCallback(async (email: string, _password: string) => {
    // Mock login logic: delay then set MFA required
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate finding a user
    const mockUser: User = {
      id: 'usr_123',
      email: email,
      name: email.split('@')[0],
      tier: 'high-net-worth'
    };
    
    setUser(mockUser);
    setIsMfaRequired(true); // Trigger MFA next
  }, []);

  const signup = useCallback(async (email: string, _password: string, name: string) => {
    // Mock signup logic
    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockUser: User = {
      id: `usr_${Math.random().toString(36).substr(2, 9)}`,
      email,
      name,
      tier: 'retail'
    };
    setUser(mockUser);
    setIsMfaRequired(true);
  }, []);

  const verifyMfa = useCallback(async (code: string) => {
    // Mock MFA verification: 123456 is the "magic code"
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (code === '123456' || code === '000000') {
      setIsAuthenticated(true);
      setIsMfaRequired(false);
      localStorage.setItem('luminator_user', JSON.stringify(user));
      localStorage.setItem('luminator_auth', 'true');
      return true;
    }
    return false;
  }, [user]);

  const completeKyc = useCallback(async () => {
    // Mock KYC completion delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsKycCompleted(true);
    localStorage.setItem('luminator_kyc', 'true');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    setIsMfaRequired(false);
    setIsKycCompleted(false);
    localStorage.removeItem('luminator_user');
    localStorage.removeItem('luminator_auth');
    localStorage.removeItem('luminator_kyc');
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isMfaRequired, 
      isKycCompleted,
      login, 
      logout, 
      verifyMfa,
      completeKyc,
      signup 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
