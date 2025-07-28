import { useEffect, useState } from 'react';
import axios from 'axios';
type UserProfile = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};
const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    axios
      .get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error('Lỗi lấy thông tin user:', err);
      });
  }, []);

  console.log('userProfile', profile);
  if (!profile) return <div>Đang tải profile...</div>;
  return (
    <div>
      <div>
        <h2>
          Chào {profile.firstName} {profile.lastName}
        </h2>
        <p>Email: {profile.email}</p>
        <p>Username: {profile.username}</p>
        <p>Giới tính: {profile.gender}</p>
        <img src={profile.image} alt="avatar" width={100} />
      </div>
    </div>
  );
};

export default UserProfile;
