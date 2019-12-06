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
const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content
`

const TabLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 50px;
`

export function Gallery({match}) {
  let location = useLocation();

  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink to={`${match}/test`}>
          square
        </TabLink>
        <TabLink to={{pathname:`${match}`, search:"?type=cascade"}}>
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid>
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
