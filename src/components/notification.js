import React from 'react';
import styles from './notification.module.css';

const Notification = ({ text = 'Notification text', close = () => {} }) => {
  return (
    <div
      className={styles.container}
      style={{
        color: '#155724',
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
      }}>
      <span>{text}</span>{' '}
      <button className={styles.closeBtn} onClick={close}>
        X
      </button>
    </div>
  );
};

export default Notification;
