/**
 * SectionHeader — reusable section heading with subtitle + gold divider
 *
 * Props:
 *   subtitle   : string  (small label above title)
 *   title      : string
 *   description: string  (optional paragraph below)
 *   centered   : boolean (default: false)
 *   light      : boolean (white variant for dark sections)
 */

import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
  className = '',
}) => {
  const classes = [
    styles.header,
    centered ? styles['header--centered'] : '',
    light ? styles['header--light'] : '',
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
