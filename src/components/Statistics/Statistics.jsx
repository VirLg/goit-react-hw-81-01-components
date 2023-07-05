export const Statistics = ({ stats: { stats } }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage"> {percentage}% </span>
      </li>
    );
  });
};
