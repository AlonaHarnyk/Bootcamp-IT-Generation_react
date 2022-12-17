import PropTypes from 'prop-types';
import { Text, Span } from './User.styled'
import UpdateForm from 'components/UpdateForm/UpdateForm';

export const User = ({ user: { name, email, id, hasJob, avatar }, deleteUser, changeStatus, openModal, showUpdateForm, userToUpdate, updateUser }) => {
  const isEndsBiz = email.endsWith('biz')
  return (
    <>
      <Text>Name: <Span>{name}</Span></Text>
      <Text>Email: <Span isRed={isEndsBiz}>{email}</Span></Text>
      <Text>Has job: <Span>{hasJob ? 'Yes' : "No"}</Span></Text>
      {userToUpdate && userToUpdate.id === id && <UpdateForm userToUpdate={userToUpdate} updateUser={updateUser} />}
      <button onClick={() => deleteUser(id)}>Delete</button>
      <button onClick={() => changeStatus(id)}>Change job status</button>
      <button onClick={() => openModal({ src: avatar, alt: name })}>Show photo</button>
      <button onClick={() => showUpdateForm(id)}>Update user</button>
    </>
  );
};


// export const User = ({ user: { name, email } }) => {
//   return (
//     <li>
//           <p>Name: {name}</p>
//           <p>Email: {email}</p>
//     <li/>
//   );
// };

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
}

