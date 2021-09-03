import { Spacer } from '../utils/spacer.component';

import './textarea.style.scss';

export const Textarea = ({ label, onChange, name, required = false }) => {
  return (
    <div className="textarea">
      <div className="textarea__label">
        {label} {required && <span className="textarea__asterik">*</span>}
      </div>
      <Spacer space="0.5rem" />
      <textarea
        className="textarea__input"
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};
