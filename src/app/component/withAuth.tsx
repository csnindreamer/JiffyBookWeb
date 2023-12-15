import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { auth, firebaseApp } from '../../../firestore';
import { getAuth, browserSessionPersistence } from 'firebase/auth';

interface User {
  uid: string ;
  displayName: string | null;
  email: string | null;
}

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const lastRefreshTime = useRef<number>(0);
    const isInitialRender = useRef(true);

    useEffect(() => {
      const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }, []);

    const refreshSession = (isButtonRefresh = false) => {
      const currentTime = Date.now();
      const timeSinceLastRefresh = currentTime - lastRefreshTime.current;
      const minTimeBetweenRefreshes = 5 * 60 * 1000; // 5 minutes in milliseconds

      console.log('timeSinceLastRefresh', timeSinceLastRefresh);

      if (timeSinceLastRefresh >= minTimeBetweenRefreshes) {
        lastRefreshTime.current = currentTime;

        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          console.log('onAuthStateChanged', authUser);
          if (!isButtonRefresh) {
            setUser({
              uid: authUser?.uid ?? '', // Use empty string as a default value
              displayName: authUser?.displayName ?? null, // Use null as a default value
              email: authUser?.email ?? null, // Use null as a default value
            });

            // Check if localStorage is available before using it
            if (typeof localStorage !== 'undefined') {
              // Store user data in localStorage
              localStorage.setItem('user', JSON.stringify(authUser));
            }
          }
        });

        return unsubscribe;
      } else {
        console.log('Skipped refresh due to time');
        return () => {}; // Return an empty function for cleanup since we're not subscribing.
      }
    };

    useEffect(() => {
      const unsubscribe = refreshSession();

      return () => {
        unsubscribe();
      };
    }, []);

    const handleRefreshClick = () => {
      refreshSession(true); // Pass true to indicate that the refresh is triggered by the button click
    };

    // ...

    return (
      <div>
   
        <WrappedComponent user={user} {...props} />
      </div>
    );
  };

  return WithAuth;
};

export default withAuth;
