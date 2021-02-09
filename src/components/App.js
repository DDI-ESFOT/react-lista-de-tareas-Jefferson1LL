import logo from '../images/logo.svg';
import '../styles/App.css';
import UserList from "./UserList";
import TodoList from "./TodoList";

function App({users}) {
  return (
    <>
      <UserList users={users}/>

        <TodoList/>
    </>
  );
}

export default App;
