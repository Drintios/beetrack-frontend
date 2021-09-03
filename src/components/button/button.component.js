import './button.style.scss';

export const Button = ({ children, left, right, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className="button__left">{left}</div>
      <div className="button__children">{children}</div>
      <div className="button__right">{right}</div>
    </button>
  );
};
