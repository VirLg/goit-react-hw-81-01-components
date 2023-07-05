import { TopGames } from 'components/TopGames/TopGames';
import card from '../images/card';
export const Game = () => {
  return (
    <main>
      <h2>TOP Games</h2>
      <TopGames img={card} />
    </main>
  );
};
