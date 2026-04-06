/**
 * AppButton — reusable button component
 * Wraps React-Bootstrap Button with consistent styling & variants
 *
 * Props:
 *   variant    : 'gold' | 'outline' | 'ghost' | 'danger' (default: 'gold')
 *   size       : 'sm' | 'md' | 'lg' (default: 'md')
 *   loading    : boolean
 *   disabled   : boolean
 *   fullWidth  : boolean
 *   as         : element type (e.g. 'a', Link)
 *   children   : React.ReactNode
 *   className  : string
 *   onClick    : function
 *   ...rest    : any other props forwarded to <Button>
 */

import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import styles from './AppButton.module.scss';

const AppButton = ({
  variant = 'gold',
  size = 'md',
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
