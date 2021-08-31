import { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';

const fadeIn = {
  opacity: 1,
  visibility: 'visible',
};

const fadeOut = {
  opacity: 0,
  visibility: 'hidden',
};

function Users() {
  const [users, setUsers] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('https://reqres.in/api/users?page=2');
      const users = await res.json();
      setUsers({ loading: false, data: users.data });
    };
    getUser();
  }, []);
  console.log(users.data.length);
  return (
    <>
      <Header />
      <section className='loading' style={users.loading ? fadeIn : fadeOut}>
        <div className='loader'>Loading...</div>
      </section>
      {users.data.length && (
        <section className='users'>
          <div className='container'>
            <div className='row'>
              {users.data.map((user) => (
                <Card user={user} key={user.id} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

export default Users;