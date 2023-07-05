export const Item = ({ data }) => {
  return data.map(({ avatar, id, isOnline, name }) => {
    return (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={name}></p>
      </li>
    );
  });
};
