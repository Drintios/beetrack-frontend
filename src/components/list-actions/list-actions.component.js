import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusCircle } from '@mdi/js';

import { Search } from '../search/search.component';
import { Button } from '../button/button.component';
import { Dialog } from '../dialog/dialog.component';
import { UserForm } from '../user-form/user-form.component';

import './list-actions.style.scss';

export const ListActions = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = () => {
    setOpenDialog(false);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  return (
    <div className="list-actions">
      <Search />
      <Button
        left={<Icon path={mdiPlusCircle} size="1rem" color="white" />}
        onClick={() => {
          setOpenDialog(true);
        }}>
        Nuevo Contacto
      </Button>
      <Dialog
        open={openDialog}
        title="Agregar nuevo contacto"
        closeHandler={closeDialogHandler}>
        <UserForm onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
};
