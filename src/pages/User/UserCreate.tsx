import { useContext, useState, useEffect } from 'react';
// import { AppContext } from "../../context";
import { IUser } from "../../models/user/user";
import { UsersForm } from "../../modules/User/components/UserForm";
import { AppContext } from "../../context";

export const UserCreate=()=>{
  const [users, setUsers] = useState<IUser[]>([]);
  const {data,setData} = useContext(AppContext);
  


  const onChangeDta = (item: IUser) => {
    const newUsers = [...data.users, item];
    setData({ ...data, users: newUsers });
};


    return(
        <>
        <UsersForm onCreateUsers={(e)=>{onChangeDta(e)}}/>
        </>
    )
}