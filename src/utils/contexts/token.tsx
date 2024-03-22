import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User } from "../apis/user/type";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { getUserProfile } from "../apis/user/api";
import { toast } from "sonner";

interface Context {
  token: string;
  user: User | undefined;
  changeToken: (token?: string) => void;
}

interface Props {
  children: ReactNode;
}

const initialValue = {
  token: "",
  user: undefined,
  changeToken: () => {},
};

const TokenContext = createContext<Context>(initialValue);

export const TokenProvider = ({ children }: Props) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchProfile();
  }, [token]);

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        changeToken();
      }

      return Promise.reject(error);
    }
  );

  async function fetchProfile() {
    try {
      const result = await getUserProfile();
      setUser(result.data);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  const changeToken = useCallback(
    (token?: string) => {
      const newToken = token ?? "";
      setToken(newToken);
      console.log(token);
      if (newToken !== "") {
        localStorage.setItem("token", newToken);
      } else {
        localStorage.removeItem("token");
        setUser(undefined);
      }
    },
    [token]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      user,
      changeToken,
    }),
    [token, user, changeToken]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
};

export function useToken() {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }

  return context;
}
