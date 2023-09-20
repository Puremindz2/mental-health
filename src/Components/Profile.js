import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [userEmail,setUserEmail] = useState(null);
  const [firstName,setFirstName] = useState(null);
  const [lastName,setLastName] = useState(null);
  const [age,setAge] = useState(null);
  const [gender,setGender] = useState(null);
  const [dob,setDob] = useState(null);
  const history = useHistory();

  useEffect(() => {
    
    async function getProfile() {
      setLoading(true);
      if (!session || !session.user) {
        // Handle the case where session or user is undefined
        setLoading(false);
        return;
      }

      const { user } = session;

      let { data, error } = await supabase
        .from('profiles')
        .select(`firstName, lastName, age ,gender , dob, avatar_url`)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setUserEmail(data.userEmail)
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAge(data.age);
        setDob(data.dob);
        setGender(data.gender);
        setAvatarUrl(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);
  const signOut = async () => {
    await supabase.auth.signOut();
    history.push('/');
  }
  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);
    if (!session || !session.user) {
      // Handle the case where session or user is undefined
      setLoading(false);
      return;
    }

    const { user } = session;

    const updates = {
      userEmail,
      firstName,
      lastName,
      age,
      dob,
      gender,
      avatar_url: avatarUrl, // Use the correct key
      updated_at: new Date(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="useremail">User Email</label>
        <input
          id="useremail"
          type="text"
          value={session?.user?.userEmail || ''}
          disabled
        />
      </div>
      
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          required
          value={firstName || ''}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          value={lastName || ''}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={age || ''}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          type="text"
          value={gender || ''}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={dob || ''}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      <div>
        <button className="button block primary" type="submit" disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" type="button" onClick={(e) => signOut()}>
          Sign Out
        </button>
      </div>
    </form>
  );
}
