"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkAuthStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  const logOut = async () => {
    await supabase.auth.signOut();
  };

  return { isLoggedIn, logOut };
}