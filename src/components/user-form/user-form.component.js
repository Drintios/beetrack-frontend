import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../../redux/users/users.slice';
import { Button } from '../button/button.component';
import { Input } from '../input/input.component';
import { Textarea } from '../textarea/textarea.component';

import { Spacer } from '../utils/spacer.component';

import './user-form.style.scss';

// onSubmit: Efectos secundarios al enviar los datos.

export const UserForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    photo: '',
    name: '',
    description: '',
  });

  const handleSubmit = () => {
    dispatch(createUser(userData));
    onSubmit();
  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <Input
        label="URL Imagen de perfil"
        required={true}
        name="photo"
        onChange={handleInputChange}
      />
      <Spacer space="1rem" />
      <Input
        label="Nombre"
        required={true}
        name="name"
        onChange={handleInputChange}
      />
      <Spacer space="1rem" />
      <Textarea
        label="Descripción"
        required={true}
        name="description"
        onChange={handleInputChange}
      />
      <Spacer space="1rem" />
      <div className="user-form__action">
        <Button>Guardar</Button>
      </div>
    </form>
  );
};
