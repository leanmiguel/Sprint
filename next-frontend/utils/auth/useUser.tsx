import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../auth/initFirebase';
import GraphQLClient from '../../gql/client';

import { useUserState } from '../../components/context/UserContext';

const GET_USER_QUERY = `query getUser($id: String!) {
  getUser(id: $id) {
    id
    name
    projects{
      name
    }
  }
}
`;

const ADD_USER_MUTATION = `mutation addUser($id: String!, $name: String!){
	addUser(id: $id, name: $name) {
    name
    id
  }
}
`;
initFirebase();

const useUser = () => {
  const { user, setUser } = useUserState();

  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        cookies.remove('auth');
        setUser(null);
        router.push('/auth');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cookie = cookies.get('auth');

    if (!cookie) {
      router.push('/');
      return;
    }

    if (cookie) {
      const parsedCookie = JSON.parse(cookie);

      // check if anyone in the databse has this cookie
      GraphQLClient.request(GET_USER_QUERY, { id: parsedCookie.id })
        .then((data) => {
          //success
          setUser(parsedCookie);
        })
        .catch((error) => {
          GraphQLClient.request(ADD_USER_MUTATION, {
            id: parsedCookie.id,
            name: parsedCookie.email,
          }).then(() => setUser(parsedCookie));
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, logout };
};

export { useUser };
