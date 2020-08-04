import { useEffect } from 'react';
import { useUser } from '../utils/auth/useUser';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { user, logout } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/user');
    }
  }, [user]);
  return <h1>yeah</h1>;
};
export default Page;
