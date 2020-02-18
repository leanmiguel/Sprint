import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const LandingPage = () => {
  const { loading, loginWithRedirect } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>SPRINT</h1>
      <h2>Stay On Task With Your Team</h2>
      <button
        onClick={() => {
          loginWithRedirect({});
        }}
      >
        Log In
      </button>
    </>
  );
};

export default LandingPage;
