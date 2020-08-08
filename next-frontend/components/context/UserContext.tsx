import { createContext, useState, useContext } from 'react';

interface UserContextInterface {
  user: object;
  setUser: any;
}

const UserContext = createContext<UserContextInterface>(null);

function UserProvider({ children }) {
  const [userState, setUserState] = useState(null);
  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
function useUserState() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUserState };
