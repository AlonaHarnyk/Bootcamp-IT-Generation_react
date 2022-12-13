import PropTypes from 'prop-types';

export const User = ({ user: { name, email } }) => {
  return (
    <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
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

