import { useContext, useEffect } from 'react';
// import { AppContext } from "../../context";
import { IUser } from "../../models/user/user";
import { UsersForm } from "../../modules/User/components/UserForm";
import { AppContext } from "../../context";

export const UserCreate=()=>{
  const {data,setData} = useContext(AppContext);
  


  const onChangeData = (item: IUser) => {
    const newUsers = [...data.users, item];
    setData({ ...data, users: newUsers });
};

useEffect(() => {
    console.log(data);
  }, [data]);

    return(
        <>
        <UsersForm onCreateUsers={(e)=>{onChangeData(e)}}/>
        </>
    )
}