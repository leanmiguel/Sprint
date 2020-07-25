import Head from "next/head";
import styled from "styled-components";

import { useUser } from "../../../utils/auth/useUser";
import Projects from "../projects/projects";
import Link from "next/link";
const Page = styled.div`
  margin-right: 15%;
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const PageContent = styled.div`
  justify-self: end;
  display: grid;
  height: 570px;
  width: 100%;
  padding-left: 50px;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10%;
  grid-row-gap: 0px;
`;

const Header = styled.h1`
  grid-area: 1 / 1 / 2 / 2;
  font-family: Rabbid Highway;
  font-size: 72px;
  line-height: 1.1;
  margin: 0;
`;

const Description = styled.p`
  grid-area: 2 / 1 / 3 / 2;
  font-family: Cantarell;
  color: #444444;
  line-height: 1.3;
  margin: 0;
  align-self: end;
`;

const TryItCTA = styled.button`
  grid-area: 3 / 1 / 4 / 2;
  font-family: Rabbid Highway;
  height: 200px;
  border-radius: 7px;
  background-color: #002fd4;
  color: #ffffff;
  font-size: 24px;
  border: none;
  height: 68px;
  align-self: end;
`;

const SignUpButton = styled.button`
  font-family: Rabbid Highway;
  border-radius: 7px;
  background-color: #002fd4;
  color: #ffffff;
  font-size: 18px;
  border: none;
  height: 50px;
  width: 170px;
  align-self: end;
`;

const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  grid-area: 1 / 2 / 4 / 3;
  object-fit: cover;
`;

const Nav = styled.nav`
  margin-top: 30px;
  height: 95px;
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
`;

const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dbdbdb;
  grid-area: 1 / 1 / 3 / 2;
`;

const LandingPage = () => (
  <Page>
    <Nav>
      <Link href="/auth" passHref>
        <SignUpButton>Sign Up</SignUpButton>
      </Link>
    </Nav>
    <SideBar />
    <PageContent>
      <Header>Finish Your Projects Faster</Header>
      <Description>
        Sprint is the best way to supercharge your productivity. Collaborate
        with others, knock out your goals, and complete projects faster with
        Sprint.
      </Description>
      <TryItCTA>Try It Now</TryItCTA>
      <LandingImage src="/home-mock.jpg" alt="mock" id="mock" />
      {/* TODO: find a better way to serve images */}
    </PageContent>
  </Page>
);

const Home = () => {
  const { user, logout } = useUser();

  return (
    <>
      <Head>
        <title>Sprint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <Projects /> : <LandingPage />}
    </>
  );
};

export default Home;
