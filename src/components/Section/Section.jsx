import PropTypes from 'prop-types';

import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  console.log(styles);
  return (
    <section className={title ? styles.superSection : styles.baseSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
