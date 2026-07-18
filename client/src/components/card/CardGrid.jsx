import { Children } from 'react';
import './cardGrid.scss';

// TODO add proper animation on this component
export function CardGrid({ title, children }) {
  return (
    <div className="card-grid">
      <div className="card-grid__header">
        <h1 className="card-grid__title">{title}</h1>
      </div>

      <div className="card-grid__body">{children}</div>
      <div className="card-grid__bullets"></div>
    </div>
  );
}
