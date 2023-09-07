import React, { useEffect, useState ,useRef} from 'react';
import { useRouter } from 'next/navigation'
import {auth,firebaseApp }  from '../../../firestore';
import { getAuth,browserSessionPersistence } from "firebase/auth";
//import { v4 as uuidv4 } from 'uuid';

interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
  }
  
  const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
      const [user, setUser] = useState<User | null>(null);
      const router = useRouter();

   
      const isInitialRender = useRef(true);
  
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          console.log("onAuthStateChanged", user); // Add this log statement
          if (user) {
            setUser({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
            });
          } else {
            setUser(null);
          }
        });
  
        const beforeUnloadListener = () => {
          auth.signOut();
        };
  
        window.addEventListener('beforeunload', beforeUnloadListener);
  
        return () => {
          unsubscribe();
          window.removeEventListener('beforeunload', beforeUnloadListener);
        };
      }, []);
  
      useEffect(() => {
    
        if (isInitialRender.current) {
          isInitialRender.current = false;
          return;
        }

        console.log("User state changed:", user);
  
        if (!user) {
          router.push('/'); // Replace '/' with the URL of your root screen (login page)
        }
      }, [user]);
  
      const refreshSession = () => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
        });
        return unsubscribe;
      };
  
      useEffect(() => {
        const unsubscribe = refreshSession();
  
        return () => {
          unsubscribe();
        };
      }, []);
  
      const startSessionRefresh = () => {
        const refreshInterval = 1 * 60 * 1000; // 5 minutes in milliseconds
        setInterval(() => {
          refreshSession();
        }, refreshInterval);
      };
  
      useEffect(() => {
        if (user) {
          startSessionRefresh();
        }
      }, [user]);
  
      useEffect(() => {
       // const customPersistenceKey = uuidv4();


       // console.log("auth.Auth.",auth.app.firebase.auth.Auth.Persistence.LOCAL,customPersistenceKey)
       //console.log("auth.Auth.",  getAuth(firebaseApp),browserSessionPersistence)
     
      //  auth.setPersistence(auth.app.firebase.auth.Auth.Persistence.LOCAL, customPersistenceKey);
      const auth: any = getAuth(firebaseApp);
      auth.setPersistence( browserSessionPersistence as any);
        return () => {
        //
        const auth: any = getAuth(firebaseApp);
        auth.setPersistence( browserSessionPersistence as any);
        //auth.setPersistence(auth.app.firebase.auth.Auth.Persistence.LOCAL);
        };
      }, []);
  
      return <WrappedComponent user={user} {...props} />;
    };
  
    return WithAuth;
  };
  
  export default withAuth;