import Icon from '@mdi/react';
import { mdiArrowRightCircle, mdiArrowLeftCircle } from '@mdi/js';

import './pagination.style.scss';

/*
 * currentPage: Para saber en que pagina se esta actualmente.
 * enableNext: Habilitar o no el botón para la siguiente pagina.
 * nextPage: Función para cambiar a la siguiente pagina.
 * prevPage: Función para cambiar a la pagina anterior.
 */

export const Pagination = ({ currentPage, enableNext, nextPage, prevPage }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <div
          className="pagination__button pagination__button--left"
          onClick={prevPage}>
          <Icon
            path={mdiArrowLeftCircle}
            size="1rem"
            className="pagination__icon"
          />{' '}
          Página anterior
        </div>
      )}
      {enableNext && (
        <div
          className="pagination__button pagination__button--right"
          onClick={nextPage}>
          Siguiente página{' '}
          <Icon
            path={mdiArrowRightCircle}
            size="1rem"
            className="pagination__icon"
          />
        </div>
      )}
    </div>
  );
};
