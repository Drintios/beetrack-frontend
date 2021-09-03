import { useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

import { deleteUser } from '../../redux/users/users.thunk';

import './user.style.scss';

/*
 * id: Id del usuario.
 * image: Enlace de la imagen para el avatar.
 * name: Nombre de usuario.
 */

export const User = ({ id, image, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="user">
      <div
        className="user__avatar"
        style={{
          backgroundImage: `url(${image})`,
        }}>
        {!image && <Icon path={mdiAccount} size="2rem" />}
      </div>
      <div className="user__name-wrapper">
        <div className="user__name">{name}</div>
        <div className="user__delete" onClick={handleDelete}>
          Eliminar
        </div>
      </div>
    </div>
  );
};
