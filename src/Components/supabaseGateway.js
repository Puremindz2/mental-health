import React, { useEffect, useState } from 'react';
import { getUserData, updateUser} from '../services/supabaseServices';
import { supabase } from '../supabaseClient';


const SupabaseGateway = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const fetchUserData = async () => {
    if (!session) return;
    try {
      const currentUser = session.user;
      console.log(currentUser);
      if (currentUser?.id) {
        const { data: userDataResponse, error: userError } = await getUserData(currentUser.id);

        if (userError) {
          throw new Error(userError.message);
        }
        const userInformation = userDataResponse[0];
        setUserData({ user: currentUser, userData: userInformation });
        console.log(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleUpdateName = async () => {
    try {
      await updateUser(userId, { name: newName });
      setNewName('');
      // Refresh user data
      await fetchUserData();
    } catch (error) {
      console.error('Error updating user name:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <div>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={session?.user.id || ''}
          readOnly
        />
      </div>
      <div>
        <label>User Surname</label>
        <input
          type="text"
          value={session?.user.user_metadata.last_name || ''}
          readOnly
        />
      </div>
      <div>
        <label>User role</label>
        <input
          type="text"
          value={session?.user.user_metadata.user_role || ''}
          readOnly
        />
      </div>
      <div>
        <label>Department</label>
        <input
          type="text"
          value={session?.user.user_metadata.user_dept || ''}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SupabaseGateway;
