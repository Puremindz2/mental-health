import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import appIcon from "./Images/mentalHealthIcon.png";
import './Profile.css';
import Avatar from './Avatar';

export default function Account({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick1() {
    window.location.href = '/';
  }

  function handleClick2() {
    window.location.href = '/login';
  }

  function handleClick3() {
    window.location.href = '/signup';
  }
  function handleClick() {
    window.location.href = '/home';
  }

  const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        history.push("/profile");
        break;
      case 'settings':
        // Handle settings click
        history.push("/settings");
        break;
      case 'appointments':
        // Handle chat click
        history.push("/appointments");
        break;
      case 'about':
        // Handle about us click
        history.push("/AboutUs");
        break;
      default:
        break;
    }
  };

  const [loading, setLoading] = useState(true);
  const [avatar_url, setAvatarUrl] = useState(null);
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
        .from('users')
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
      console.log(data)

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
      avatar_url: avatar_url, // Use the correct key
      updated_at: new Date(),
    };

    let { error } = await supabase.from('users').upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatar_url);
    }
    setLoading(false);

    
  }

  return (
    
    
    <div class="profile">
      <div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div>
        <h1>Pure Minds - Mental Health</h1>
      </div>

      <div class="topbar-right">
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </span>
      </div>
    </div>

    {isMenuOpen && (
      <div className="menu-dropdown">
        <ul>
          <li onClick={() => handleMenuClick('profile')}>Profile</li>
          <li onClick={() => handleMenuClick('about')}>About Us</li>
        </ul>
      </div>
    )}
    </div>
    <div class="profile-form">
    <form onSubmit={updateProfile} class="form-widget">
      <div>
      <Avatar
      url={avatar_url}
      size={150}
      onUpload={(event, url) => {
        updateProfile(event, url)
      }}
    />
      
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
    </div>
  );
}
