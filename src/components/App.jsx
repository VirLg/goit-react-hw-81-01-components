import { Header } from './Header/Header';

import { Profile } from './Profile/Profile';

import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions';
import { BaseTitle } from './Statistics/BaseTitle';
import { FriendList } from './FriendList/FriendList';
import { Routes } from 'react-router-dom';
import Transaction from './Transaction/Transaction';

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
      <>
        <Header />
      </>

      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </>
      <>
        <BaseTitle stats={data} />
      </>
      <>
        <Transaction data={transactions} />
      </>
    </div>
  );
};

//  <Header />
{
  /* <TopGames img={card} /> */
}

{
  /* */
}
