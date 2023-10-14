import React, { useEffect, useState } from 'react';
import { getUserData, updateUser} from '../services/supabaseServices';
import { supabase } from '../supabaseClient';
import './Profile.css';

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
    <div class="profile-form">
    <form onSubmit={updateProfile} class="form-widget">
    <img class="userIcon1"  src={appIcon}/>
      <div>
      <br></br>
        <label htmlFor="useremail">User Email</label><br></br>
        <input
          id="useremail"
          type="text"
          value={session?.user?.userEmail || ''}
          disabled
        />
      </div>
      
      <div>
        <label htmlFor="firstName">First Name</label><br></br>
        <input
          id="firstName"
          type="text"
          required
          value={firstName || ''}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label><br></br>
        <input
          id="lastName"
          type="text"
          required
          value={lastName || ''}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label><br></br>
        <input
          id="age"
          type="number"
          value={age || ''}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label><br></br>
        <input
          id="gender"
          type="text"
          value={gender || ''}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label><br></br>
        <input
          id="dob"
          type="date"
          value={dob || ''}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <button style={{width:'30%'}}className="button block primary" type="submit" disabled={loading} onClick={(e) => updateProfile ()}>
          {loading ? 'Loading ...' : 'Update' }
        </button>
      </div>
      <br></br>
      <div>
        <button class="button-block-primary" type="button" onClick={(e) => signOut()}>
          Sign Out
        </button>
      </div>
    </form>
    </div>
  );
};

export default SupabaseGateway;
