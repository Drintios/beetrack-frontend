import './button.style.scss';

/*
 * children: Contenido del botón.
 * left: Contenido a la izquierda del texto.
 * right: Contenido a la derecha del texto.
 * onClick: Función para controlar el evento click.
 */

export const Button = ({ children, left, right, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className="button__left">{left}</div>
      <div className="button__children">{children}</div>
      <div className="button__right">{right}</div>
    </button>
  );
};
