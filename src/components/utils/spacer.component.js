// Componente para agregar espaciado entre componentes.

export const Spacer = ({ direction, space }) => {
  return direction === 'horizontal' ? (
    <div style={{ paddingRight: space }}></div>
  ) : (
    <div style={{ paddingTop: space }}></div>
  );
};
