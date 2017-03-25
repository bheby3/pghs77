import React from 'react';
import Links from './Nav.js'
import {GridList, GridTile} from 'material-ui/GridList';
import classNames from 'classnames/bind';
import style from './App.css';
const cx = classNames.bind(style);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'scroll',
  },
};

const tilesData = [

  {
    img: './sandraHarmer.png',
    title: 'Sandra Harmer'
  },
  {
    img: './lisaAllred.png',
    title: 'Lisa Allred',
  },
  {
    img: './karenBartley.png',
    title: 'Karen Bartley',
  },
  {
    img: './keithSayre.png',
    title: 'Keith Sayre',
  },
  {
    img: './annetteWall.png',
    title: 'Annette Wall',
  },
  {
    img: './frankieTaylor.png',
    title: 'Frankie Taylor',
  },
  {
    img: './rosemaryPetersen.png',
    title: 'Rosemary Petersen',
  },
  {
    img: './teresaStreet.png',
    title: 'Teresa Street',
  },
];

const Memorial = () => (
  <div className={cx('App')}>
    <div className={cx('App-header')}>
      <h1 className="header">PGHS Class of 77</h1>
      <h2 className="header">Those who have passed away:</h2>
    </div>
    <Links/>
    <br/><br/>
    <div className="memorialWrapper">
      <div style={styles.root}>
        <GridList
          cellHeight={290}
          cols={4}
          style={styles.gridList}
        >
          {tilesData.map((tile, index) => (
            <GridTile
              key={index}
              title={tile.title}
            >
              <img src={tile.img} alt={tile.title}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  </div>
);

export default Memorial;