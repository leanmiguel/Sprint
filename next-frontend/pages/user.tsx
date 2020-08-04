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
  const { name, uid, projects } = data.getUser;
  return <UserPage name={name} id={uid} projects={projects} />;
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
