import { Statistics } from './Statistics';
export const BaseTitle = data => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <Statistics stats={data} />
      </ul>
    </section>
  );
};
