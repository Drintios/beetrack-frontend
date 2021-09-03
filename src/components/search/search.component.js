import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchUser, clearSearch } from '../../redux/users/users.slice';

import Icon from '@mdi/react';
import { mdiMagnify, mdiCloseCircle } from '@mdi/js';

import './search.style.scss';

export const Search = () => {
  const inputRef = useRef();
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    if (event.target.value.length >= 3) {
      dispatch(searchUser(event.target.value));
      setClear(true);
    }
  };

  const clearHandler = () => {
    inputRef.current.value = '';
    setClear(false);
    dispatch(clearSearch());
  };

  return (
    <div className="search">
      <div className="search__icon">
        <Icon path={mdiMagnify} size="1.25rem" />
      </div>
      <input
        ref={inputRef}
        type="search"
        className="search__input"
        placeholder="Buscar contacto..."
        onChange={onChangeHandler}
      />
      {clear && (
        <div
          className="search__icon search__icon--clear"
          onClick={clearHandler}>
          <Icon path={mdiCloseCircle} size="1.25rem" />
        </div>
      )}
    </div>
  );
};
