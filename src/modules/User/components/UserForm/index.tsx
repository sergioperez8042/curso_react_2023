import { useFormik } from "formik";
import { Button } from "../../../../components/Button/button";
import { ContainerStyle } from "../../../../components/Container/index.styled";
import { ContainerForm, InputForm, Error } from "./index.styled";
import { FC } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { IUser } from '../../../../models/user/user';

type UserForm = {
  initialValue?: Omit<IUser, "id">;
  onCreateUsers: (item:IUser) => void;
  
};

const postFormValidateSchema = Yup.object().shape({
  name : Yup.string().required("Required").min(3),
  email: Yup.string().required("Required").email(),
  address: Yup.string().required("Required").min(3),
});

export const UsersForm: FC<UserForm> = ({ onCreateUsers, initialValue }) => {

  const navigate = useNavigate();
  const formik = useFormik<Omit<IUser, "id">>({
    initialValues: initialValue ?? {
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
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      onCreateUsers({
        ...values,
        id: 0
      });
      navigate("home");
      setSubmitting(false);
    },
        validationSchema: postFormValidateSchema,
  });

  
  
  return (
    <ContainerStyle>
      <ContainerForm>
        <InputForm
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={!!formik.errors.name}
        />
        {formik.errors.name && <Error>{formik.errors.name}</Error>}
        
        <InputForm
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={!!formik.errors.email}
        />
        {formik.errors.email && <Error>{formik.errors.email}</Error>}
        
        <InputForm
          name="address"
          placeholder="Address"
          onChange={formik.handleChange}
          value={formik.values.address.street}
          error={!!formik.errors.address}
        />
        {formik.errors.address && <Error>{formik.errors.address.street}</Error>}
      <Button onClick={formik.handleSubmit}>{`${
        initialValue ? "Update" : "Create"
      }`}</Button>
      </ContainerForm>
    </ContainerStyle>
  );
};
