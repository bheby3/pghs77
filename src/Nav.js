import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Links = () => (
  <nav  className={cx('navContainer')}>
    <Link className={cx('navSpacing')} to="/">Home</Link>
    <Link className={cx('navSpacing')} to={{pathname: '/memorial'}}>Memorial</Link>
    <Link to="contact">Contact</Link>
  </nav>
);

export default Links;