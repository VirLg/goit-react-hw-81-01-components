import { Item } from './Item';
const FriendList = ({ list }) => {
  return (
    <ul className="friend-list">
      <Item data={list} />
    </ul>
  );
};
export default FriendList;
