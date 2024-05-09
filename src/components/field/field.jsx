import styles from "./field.module.css";
import { forwardRef } from 'react'

export const Field = forwardRef(({ error, ...props }, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
      {error && <span className={styles.errorLabel}>{error}</span>}
    </div>
  );
});
