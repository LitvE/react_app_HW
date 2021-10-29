import './App.css';
import React from 'react';
import UsersList from './Components/UsersList';

const usersDB = [
  {id: 1, name: 'Ivan', surname: 'Ivanov', photo: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'},
  {id: 2, name: 'Petr', surname: 'Petrov', photo: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'},
  {id: 3, name: 'Sidor', surname: 'Sidorov', photo: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'},
]


class App extends React.Component{
  constructor(props){
    super(props);
     this.state = {
      users: usersDB.map((u) => ({
          ...u, 
          isSelected: false,
      })),
  };
}
  setUsers = (newUsers) =>{
    this.setState({users: newUsers});
  }
  render(){
  const {users} = this.state;
    return (
      <>
      <UsersList users={users} setUsers={this.setUsers}/>
      </>
    );
  }
}

export default App;
