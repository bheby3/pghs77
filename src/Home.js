import React from 'react';
import Links from './Nav.js'
import {List, ListItem} from 'material-ui/List';
import classNames from 'classnames/bind';
import styles from './App.css';
const cx = classNames.bind(styles);

const Home = () => (
  <div className="App">
    <div className={cx('App-header')}>
      <h1>PGHS Class of 77</h1>
      <h2>High School Reunion</h2>
    </div>
    <Links/>
    <div className="homeWrapper">
      <div>
        <h1>Events</h1>
        <h2>Friday July 28th</h2>
        <List>
          <ListItem>Classic Car show 6:00pm-7:00pm</ListItem>
          <ListItem>Poker run 7:00pm-8:00pm</ListItem>
          <ListItem>Tour high school 8:00-9pm</ListItem>
          <ListItem>Ice-cream social 9-10pm</ListItem>
        </List>

        <h2>Saturday July 29th</h2>
        <List>

          <ListItem>Hike G 10 am</ListItem>
          <div className="listWithDetails">(leave from Kiwanis park. Those who can’t hike can watch the drone pictures from the park)
            Quiet meadow farms in Mapleton for Mix & Mingle 5
          </div>

          <ListItem>Dinner at 6</ListItem>
          <ListItem>Out by 10</ListItem>
        </List>
      </div>



    </div>
  </div>
);

export default Home;

