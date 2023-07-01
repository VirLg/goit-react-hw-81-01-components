export const TopGames = ({ img }) => {
  return img.map(({ img, title }, idx) => {
    // console.log(img);
    return (
      <div key={title}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{idx}</p>
      </div>
    );
  });
};
