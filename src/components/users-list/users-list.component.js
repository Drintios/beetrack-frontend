import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/users.thunk';
import { clearPendingUpdate } from '../../redux/users/users.slice';
import {
  selectUsers,
  selectPendingUpdate,
} from '../../redux/users/users.selector';

import { User } from '../user/user.component';
import { Pagination } from '../pagination/pagination.component';
import { Spacer } from '../utils/spacer.component';

import './users-list.style.scss';

export const UsersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const users = useSelector(selectUsers);
  const pendingUpdate = useSelector(selectPendingUpdate);

  // Avanzar a la siguiente pagina.
  const nextPageHandler = () => {
    setPage(page + 1);
  };

  // Retroceder a la pagina anterior.
  const prevPageHandler = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    // Obtener los usuarios y limpiar actualizaciones pendientes en cada actualización.
    dispatch(fetchUsers({ limit: 8, page }));
    dispatch(clearPendingUpdate());
  }, [dispatch, page, pendingUpdate]);

  return (
    <>
      <div className="users-list">
        <div className="users-list__row users-list__row--header">
          <div className="users-list__cell users-list__cell--header">
            Nombre
          </div>
          <div className="users-list__cell users-list__cell--header">
            Descripción
          </div>
        </div>
        {users.map(({ id, photo, name, description }) => {
          return (
            <div className="users-list__row users-list__row--body" key={id}>
              <div className="users-list__cell users-list__cell--user">
                <User name={name} image={photo} id={id} />
              </div>
              <div className="users-list__cell">{description}</div>
            </div>
          );
        })}
      </div>
      <Spacer space="1rem" />
      <Pagination
        currentPage={page}
        enableNext={users.length > 7}
        nextPage={nextPageHandler}
        prevPage={prevPageHandler}
      />
    </>
  );
};
