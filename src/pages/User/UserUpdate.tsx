import { useContext } from "react";
import { AppContext } from "../../context";
import { IUser } from "../../models/user/user";
import { UsersForm } from "../../modules/User/components/UserForm";

export const UserUpdate=()=>{
    const { data, setData } = useContext(AppContext);
      const onChangeDta = (item: IUser) => {
        data.users.push(item);
        setData({ ...data });
      };
    return(
        <>
        <UsersForm onCreateUsers={(e)=>{onChangeDta(e)}} initialValue={data.user}/>
        </>
    )
}