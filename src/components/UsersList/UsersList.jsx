import PropTypes from 'prop-types';
import { User } from 'components/User/User';

export const UsersList = ({ users, deleteUser, changeStatus, openModal, showUpdateForm, userToUpdate, updateUser }) => {
  return (
    <ul>
      {users.map(( user ) => (
        <li key={user.id}>
          <User user={user} deleteUser={deleteUser} changeStatus={changeStatus} openModal={openModal} showUpdateForm={showUpdateForm} userToUpdate={userToUpdate} updateUser={updateUser} />
        </li>
      ))}
    </ul>
  );
};

// export const UsersList = ({ users }) => {
//   return (
//     <ul>
//       {users.map(({id, ...user}) => (
//           <User user={user} key={id}/>
//       ))}
//     </ul>
//   );
// };

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
