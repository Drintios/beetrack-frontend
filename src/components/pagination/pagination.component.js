import Icon from '@mdi/react';
import { mdiArrowRightCircle, mdiArrowLeftCircle } from '@mdi/js';

import './pagination.style.scss';

export const Pagination = ({ currentPage, nextPage, prevPage }) => {
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
    </div>
  );
};
