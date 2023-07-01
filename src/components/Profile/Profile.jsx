export const Profile = ({ avatar, lacation, tag, username }) => {
  return (
    <>
      <img src={avatar} alt={username} />
      <h2>{username}</h2>
      <p>{location}</p>
      <p>{tag}</p>
    </>
  );
};
