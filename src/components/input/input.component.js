import { Spacer } from '../utils/spacer.component';

import './input.style.scss';

export const Input = ({ label, onChange, name, required = false }) => {
  return (
    <div className="input">
      <div className="input__label">
        {label} {required && <span className="input__asterik">*</span>}
      </div>
      <Spacer space="0.5rem" />
      <input
        type="text"
        className="input__input"
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};
