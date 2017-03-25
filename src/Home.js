import React from 'react';
import Links from './Nav.js'
import {List, ListItem} from 'material-ui/List';
import classNames from 'classnames/bind';
import styles from './App.css';
const cx = classNames.bind(styles);

const Home = () => (
  <div className="App">
    <div className={cx('App-header')}>
      <h1 className="header">PGHS Class of 77</h1>
      <h2 className="header">High School Reunion</h2>
    </div>
    <Links/>
    <div className="homeWrapper">
      <div className="list">
        <h1 className="header">Events:</h1>
        <h2 className="header">
          <div>Friday July 28th </div>
        </h2>
        <div className="header">At Pleasant Grove High School</div>
        <List>
          <ListItem><div className="bold">Classic Car show 6:00pm-7:00pm</div></ListItem>
          <ListItem><div><span className="bold">Poker run 7:00pm-8:00pm:</span> Kind of a game challenge Scavanger Hunt.  Lots of fun, with prizes.</div> </ListItem>
          <ListItem><div><span className="bold">Tour the High School 8:00-9:00pm:</span> It's definitely not the same as when we were there</div></ListItem>
          <ListItem><div><span className="bold">Ice-cream social 9:00-10:00pm:</span> Nice way to relax and to catch up with everyone</div></ListItem>
        </List>

        <h2 className="header">Saturday July 29th</h2>
        <List>

          <ListItem>
            <div><span className="bold">Hike to the "G" 10:00am:  </span>
              Leave from Kiwanis park at the top of 200 S. (Battle Creek).</div>
            <span>For some of us it might be the last time before our knees give out.  We're not getting any younger.
            For those who can’t do the hike, come anyway and watch live pictures and video from drones of those making the hike.
            Water will be provided.
          </span>
          </ListItem>
          <ListItem><div><span className="bold">At Quiet Meadow Farms in Mapleton for Mix & Mingle 5:00pm </span></div></ListItem>
          <ListItem><div><span className="bold">Dinner 6:00pm:</span> $30.00 per person or $60.00 a couple</div></ListItem>
          <ListItem><div><span className="bold">Special Guests:</span></div>
            <div>Coach Darold Henry</div>
            <div>Brother Dale Young</div>
          </ListItem>
          <ListItem>Live entertainment (after Dinner) & lots of prizes</ListItem>
          <ListItem><div className="bold">Wrap it up at 10:00pm</div></ListItem>
        </List>
      </div>



    </div>
  </div>
);

export default Home;

