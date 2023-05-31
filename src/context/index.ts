import { createContext } from "react";
import { IUser } from '../models/user/user';

export interface IAppContext {

  users: IUser[];
  user: IUser;

}

export interface IAppContextProps {
  data: IAppContext;
  loading: boolean,
  setLoading: (loading: boolean) => void;
  setData: (data: IAppContext) => void;
}

export const AppContext = createContext<IAppContextProps>({
  data: {
    users: [],
    user: {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
      address: {
        city: "",
        street: "",
        suite: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
        },
      },
    },
    loading: false,
  

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {}, 
});
