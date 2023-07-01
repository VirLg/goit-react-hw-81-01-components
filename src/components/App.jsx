import { Header } from './Header/Header';
import { TopGames } from './TopGames/TopGames';
import card from '../images/card.json';
import user from '../user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile data={user} />
      <Header />
      <TopGames img={card} />
    </div>
  );
};
