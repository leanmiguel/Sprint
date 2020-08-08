import { LandingPage } from '../components/pages/LandingPage/LandingPage';
import UserPage from '../components/pages/UserPage/UserPage';
import GraphQLClient from '../gql/client';
import { parseCookies } from '../utils/parseCookies';

const GET_USER_QUERY = `query getUser($id: String!) {
  getUser(id: $id) {
    id
    uid
    name
    projects{
      name
    }
  }
} 
`;

const Page = ({ data }) => {
  const { noUser, error, name, uid, projects } = data.getUser;
  return noUser || error ? <LandingPage /> : <UserPage name={name} id={uid} projects={projects} />;
};
export default Page;

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req);

  try {
    const data = await GraphQLClient.request(GET_USER_QUERY, { id: JSON.parse(cookies.auth).id });
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
        noUser: true,
      },
    };
    return {
      props: {
        data,
      },
    };
  }
}
