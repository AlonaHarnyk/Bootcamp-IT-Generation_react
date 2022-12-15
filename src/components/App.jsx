import { Component } from 'react';

import { data } from '../data/users';
import { GlobalStyle } from 'utils/GlobalStyles';

import { UsersList } from './UsersList/UsersList';
// import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export default class App extends Component {
  state = {
    users: data,
    isListShown: false,
    currentAvatar: null
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

  openModal = (data) => {
    this.setState({currentAvatar: data})
  }

  closeModal = () => {
    this.setState({currentAvatar: null}) 
  }

  render() {
    const { isListShown, users, currentAvatar } = this.state;

    return (
      <>
        <Button
          text={isListShown ? 'Hide users' : 'Show users'}
          handleClick={this.showUsers}
        />
        {isListShown && (
          <UsersList
            users={users}
            deleteUser={this.deleteUser}
            changeStatus={this.changeStatus}
            openModal = {this.openModal}
          />
        )}
        {currentAvatar && <Modal image={currentAvatar} closeModal={this.closeModal} />}
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
