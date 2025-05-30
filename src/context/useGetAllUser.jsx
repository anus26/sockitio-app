// context/useGetAllUser.jsx
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAuth } from './AuthProvider.jsx';

const useGetAllUser = () => {
  const [users, setUsers] = useState([]);      // raw array
  const [loading, setLoading] = useState(false);
  const [authUser] = useAuth();

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          'https://grand-frankie-anusraza123bm-df134fa3.koyeb.app/user/alluser'
          // 'http://localhost:3000/user/alluser'

          ,{
          
            withCredentials: true,
          }
        );
        setUsers(Array.isArray(data) ? data : []);
        console.log(Array.isArray(data) ? data : []);
      
        

      } catch (err) {
        console.error('Error fetching users:', err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  // filter out the logged‑in user (if any)
  const filtered = authUser
    ? users.filter(u => (u.id ?? u._id) !== authUser.user?._id  )
    : users;

  return [filtered, loading];
};

export default useGetAllUser;
