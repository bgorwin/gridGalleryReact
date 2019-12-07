import React from 'react';
import UserGrid from '../Profile/UserGrid';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Posts from '../Posts';
import { Image } from '../App';


const PhotoGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
`
// const LinkGrid = styled.div`
//   display: grid;
//   grid-template-columns: auto auto;
//   justify-content: center;
//   gap: 30px;
//   margin-bottom: 20px;
// `
//
// const TabLink = styled(Link)`
//   text-decoration: none;
//   color: #ccc;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   ${({selected}) => selected && 'color: black;'}
// `



export function Gallery({match}) {
  let location = useLocation();
  const cascade = location.search === '?type=cascade';
  return (
    <div>
      <UserGrid />
      <PhotoGrid cascade={cascade}>
        {Posts.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            <Image index={i.id} />
          </Link>
        ))}
      </PhotoGrid>
    </div>
  );
}
