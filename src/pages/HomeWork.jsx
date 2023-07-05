import FriendList from 'components/FriendList/FriendList';
import { Link } from 'react-router-dom';
import friends from '../data/friends';
const HomeWork = () => {
  const arr = [FriendList];
  console.log(arr);
  return (
    <main>
      <div>
        {arr.map(el => {
          return (
            <Link key={el} to={`${el}`}>
              {el}
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default HomeWork;
