import { Component } from 'react';

import { nanoid } from 'nanoid';

import { data } from '../data/users';
import { GlobalStyle } from 'utils/GlobalStyles';

import { UsersList } from './UsersList/UsersList';
// import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import AddForm from './AddForm/AddForm';

export default class App extends Component {
  state = {
    users: data,
    isListShown: false,
    currentAvatar: null,
    isFormShown: false,
    userToUpdate: null,
  };

  // showUsers = () => {
  //   this.setState({
  //     isListShown: true
  //   })
  // }

  showUsers = () => {
    this.setState(prevState => ({
      isListShown: !prevState.isListShown,
    }));
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  };

  changeStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id === userId ? { ...user, hasJob: !user.hasJob } : user
      ),
    }));
  };

  openModal = data => {
    this.setState({ currentAvatar: data });
  };

  closeModal = () => {
    this.setState({ currentAvatar: null });
  };

  showAddForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = data => {
    const newUser = {
      ...data,
      hasJob: false,
      id: nanoid(),
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  showUpdateForm = userId => {
    const { users } = this.state;
    const user = users.find(({ id }) => id === userId);
    this.setState({ userToUpdate: user });
  };

  updateUser = (user) => {
    const { users } = this.state;
    const index = users.findIndex(({ id }) => id === user.id)
    const newUsers = [...users];
    newUsers[index] = user;
    this.setState({users: newUsers, userToUpdate: null})
  }

  render() {
    const { isListShown, users, currentAvatar, isFormShown, userToUpdate } = this.state;

    return (
      <>
        <Button
          text={isListShown ? 'Hide users' : 'Show users'}
          handleClick={this.showUsers}
        />
        {isListShown && (
          <>
            <UsersList
              users={users}
              deleteUser={this.deleteUser}
              changeStatus={this.changeStatus}
              openModal={this.openModal}
              showUpdateForm={this.showUpdateForm}
              userToUpdate={userToUpdate}
              updateUser={this.updateUser}
            />
            {isFormShown ? (
              <AddForm addUser={this.addUser} />
            ) : (
              <Button text="Add user" handleClick={this.showAddForm} />
            )}
          </>
        )}
        {currentAvatar && (
          <Modal image={currentAvatar} closeModal={this.closeModal} />
        )}
        {/* {isListShown ? (
          <UsersList users={data} />
        ) : (
          <Button text="Show users" handleClick={this.showUsers} />
        )} */}
        <GlobalStyle />
      </>
    );
  }
}
