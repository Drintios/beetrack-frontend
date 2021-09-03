import ReactDOM from 'react-dom';
import Icon from '@mdi/react';
import { mdiCloseThick } from '@mdi/js';

import './dialog.style.scss';

export const Dialog = ({ open, children, title, closeHandler }) => {
  const renderDialog = () => {
    if (open) {
      return (
        <div className="dialog">
          <div className="dialog__backdrop"></div>
          <div className="dialog__modal">
            <div className="dialog__title">
              {title}{' '}
              <div className="dialog__close" onClick={closeHandler}>
                <Icon path={mdiCloseThick} size="1.25rem" />
              </div>
            </div>
            <div className="dialog__content">{children}</div>
          </div>
        </div>
      );
    }
  };

  return ReactDOM.createPortal(renderDialog(), document.body);
};
