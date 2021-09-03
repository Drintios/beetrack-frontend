import './App.scss';

import { Header } from './components/header/header.component';
import { Spacer } from './components/utils/spacer.component';
import { UsersList } from './components/users-list/users-list.component';
import { ListActions } from './components/list-actions/list-actions.component';

function App() {
  return (
    <div>
      <Header />
      <Spacer space="2rem" />
      <ListActions />
      <Spacer space="1rem" />
      <UsersList />
    </div>
  );
}

export default App;
