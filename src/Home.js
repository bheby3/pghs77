import React from 'react';
import Links from './Nav.js'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import classNames from 'classnames/bind';
import styles from './App.css';
const cx = classNames.bind(styles);

const Home = () => (
  <div className="App">
    <div className={cx('App-header')}>
      <img className={cx('viking')} src="https://pbs.twimg.com/profile_images/1324402503/twitter-profile-pic_400x400.png" alt=""/>
      <div className="header" style={{fontSize: '60px', fontWeight: 900, borderBottom: '1px solid', paddingBottom: '10px'}}>PGHS Class of 77</div>
      <div className="header" style={{fontSize: '30px', fontWeight: 900, paddingTop: '10px'}}>40th High School Reunion</div>
    </div>
    <div className="homeWrapper">
      <div className="list">
        <Links/>
        <Divider/>
        <div className="contact">CONTACT: ColleenRoundy3@gmail.com</div>
        <h1 className="header" style={{margin: 0}}>
          <h2  style={{margin: 10}}>Events:</h2>
        </h1>
        <h2 className="header" style={{margin: 0, display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
          <h2 style={{margin: 10}}>Friday, July 28th </h2>
          <h3 style={{margin: 10}}>At Pleasant Grove High School</h3>
        </h2>

        <List>

          <ListItem><div className="bold-title">Classic Car Show 6:00 - 7:00pm</div></ListItem>
          <ListItem><div className="bold-title">Poker Run <span >7:00 - 8:00pm:</span>  Kind of a game challenge Scavanger Hunt.  Lots of fun, with prizes.</div> </ListItem>
          <ListItem><div className="bold-title">Tour the High School <span >8:00 - 9:00pm:</span>  It's definitely not the same as when we were there.</div></ListItem>
          <ListItem><div className="bold-title">Ice-cream social <span >9:00 - 10:00pm:</span>  Nice way to relax and to catch up with everyone.</div></ListItem>

        </List>

        <h2 className="header">
          <h1 style={{margin: 10}}>Saturday, July 29th </h1>
        </h2>
        <List>

          <ListItem>
            <div className="bold-title"><span>Hike to the "G" 10:00am:  </span>
              Leave from Kiwanis park at the top of 200 S. (Battle Creek).
            <span >For some of us it might be the last time before our knees give out.  We're not getting any younger.
            For those who can’t do the hike, come anyway and watch live pictures and video from drones of those making the hike.
            Water will be provided.
          </span></div>
          </ListItem>
          <ListItem><div className="bold-title"><span>At Quiet Meadow Farms in Mapleton for Mix & Mingle 4:00 - 6:00pm. </span></div></ListItem>
          <ListItem><div  className="bold-title"><span>Dinner 6:00pm:</span> $30.00 per person</div></ListItem>
          <ListItem>
            <div className="bold-title"><span >Special Guests:</span>
            <div >Coach Darold Henry</div>
            <div >Brother Dale Young</div>
          </div>
          </ListItem>
          <ListItem><div className="bold-title">Live entertainment (after Dinner) & lots of prizes.</div></ListItem>
          <ListItem><div className="bold-title">Wrap it up at 10:00pm.</div></ListItem>
        </List>
      </div>



    </div>
  </div>
);

export default Home;

