import { NavLink, Route, Routes } from 'react-router-dom';
import { Game } from 'pages/Game';
import HomeWork from 'pages/HomeWork';
import friends from '../../data/friends';
import FriendList from 'components/FriendList/FriendList';
export const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/hw">HomeWork</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/game" element={<Game />} />
        <Route path="/hw" element={<HomeWork />} />
        <Route path="/hw/:friendList" element={<FriendList />} />
      </Routes>
    </>
  );
};
