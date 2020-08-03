import UserPage from '../components/pages/UserPage/UserPage';
import GraphQLClient from '../gql/client';

const query = `
  query {
    getUser {
      id
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
  const { name, id, projects } = data.getUser;
  return <UserPage name={name} id={id} projects={projects} />;
};
export default Page;

export async function getServerSideProps(context) {
  const data = await GraphQLClient.request(query);

  return {
    props: {
      data,
    },
  };
}
