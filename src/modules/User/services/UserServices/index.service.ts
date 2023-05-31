import { axioss } from "../../../../axios/axios.config";
import { IUser } from '../../../../models/user/user';

export const getUser = async () => {

    return await axioss.get<IUser[]>("users/");
  
};
export const getUserID = async (id:string) => {
  
    return await axioss.get<IUser>(`users/${id}`);
  
};
