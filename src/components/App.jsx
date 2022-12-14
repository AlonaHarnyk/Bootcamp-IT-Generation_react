import { data } from '../data/users';

import { useMedia } from 'react-use';
import { GlobalStyle } from 'utils/GlobalStyles';

import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';

export const App = () => {
  const isDesktop = useMedia('(min-width: 1200px)')
  return (
    <>
      {isDesktop ? <nav>Desktop nav</nav> : <nav>Mobile nav</nav>}
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title="List of users">
        <UsersList users={data} />
      </Section>
      <GlobalStyle/>
    </>
  );
};
