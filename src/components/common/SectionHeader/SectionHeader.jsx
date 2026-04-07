import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = false,
  variant = 'dark', // 'dark' (default) | 'light'
  className = '',
}) => {
  const classes = [
    styles.header,
    styles[`header--${variant}`],
    centered ? styles['header--centered'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={centered ? styles['divider--center'] : styles.divider} />
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeader;