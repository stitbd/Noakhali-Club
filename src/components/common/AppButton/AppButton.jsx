import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import styles from './AppButton.module.scss';

const AppButton = ({
  variant = 'gold',
  size = 'md',
  bgVariant = 'dark', // 'dark' (default) | 'light' for white backgrounds
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  className = '',
  onClick,
  as,
  ...rest
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    styles[`btn--bg-${bgVariant}`], // Adds context-aware styling
    fullWidth ? styles['btn--full'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Button
      as={as}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className={styles.spinner}
          />
          <span className="ms-2">Loading…</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default AppButton;