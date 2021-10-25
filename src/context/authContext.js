import { createContext, useReducer } from "react";

const initialValue = {
  isLogin: false,
  user: {
    email: "",
    password: "",
    name: "",
    phone: "",
  },
};


export const AuthContext = createContext();

// reducer use to handle complex logic, use wisely
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER":
      localStorage.setItem(
        "user",
        JSON.stringify({
          isLogin: false,
          user: payload,
        })
      );
      return {
        isLogin: false,
        user: payload,
      };
    case "LOGIN":
      localStorage.getItem(
        "user",
        JSON.stringify({
          isLogin: true,
          user: payload,
        })
      );
      return {
        isLogin: true,
        user: payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        isLogin: false,
        user: {
            email: "",
            password: "",
            name: "",
            phone: "",
        },
      };
    default:
      throw new Error("type doesn't match cases");
  }
}


const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;