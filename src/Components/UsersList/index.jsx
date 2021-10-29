import React from "react";
import UsersListItem from "./UsersListItem";

class UsersList extends React.Component{


    mapUsers = (u, index) => {
        const {id} = u;

        const del = () =>{
            const {users, setUsers} = this.props;
            const newUsers = [...users];
            newUsers.splice(index, 1);
            setUsers(newUsers);
        };

        const clickHandler = () =>{
            const {users, setUsers} = this.props;

            const newUsers = [...users];
            newUsers[index] = {
                ...newUsers[index],
                 isSelected: !newUsers[index].isSelected,
            };

            setUsers(newUsers);
        };

        return <UsersListItem key={id} user = {u} clickHandler={clickHandler} deleteHandler={del}/>;
    } 

    render(){
        const {users} = this.props;

        return (
            <ul>
                {users.map(this.mapUsers)}
            </ul>
        );
    }
}

export default UsersList;