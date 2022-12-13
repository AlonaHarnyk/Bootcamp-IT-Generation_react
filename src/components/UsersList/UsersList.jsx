import PropTypes from 'prop-types';
import { User } from 'components/User/User';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(({id, ...user}) => (
        <li key={id}>
          <User user={user} />
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
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}