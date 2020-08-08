import { useEffect } from 'react';
import { useUser } from '../utils/auth/useUser';
import { useRouter } from 'next/router';
import { LandingPage } from '../components/pages/LandingPage/LandingPage';
import UserPage from '../components/pages/UserPage/UserPage';
import GraphQLClient from '../gql/client';

const query = `
  query {
    getUser(id: "Y8QFm9bycSPyAYspm49qFhPeOK63") {
      uid
      name
      projects {
        name
        description
        tasks {
          task
        }
        workSessions {
          name
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const router = useRouter();
  const { user, logout } = useUser();
  const { error, name, uid, projects } = data.getUser;

  return user ? <UserPage name={name} id={uid} projects={projects} /> : <LandingPage />;
};
export default Page;

export async function getServerSideProps(context) {
  try {
    const data = await GraphQLClient.request(query);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    const data = {
      getUser: {
        name: null,
        uid: null,
        projects: [],
        error: true,
      },
    };
    return {
      props: {
        data,
      },
    };
  }
}
