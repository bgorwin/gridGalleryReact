import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  grid-template-areas: "photo name"
                       "photo label"
                       "photo desctiption";

`
export const MiniUserGrid = styled.div `
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`

const Photo = styled.div`
  grid-area: photo;
`

const Name = styled.div`
  grid-area: name;
  font-size: 35px;
`

const Label = styled.div`
  grid-area: label;
`
const Description = styled.div`
  grid-area: desctiption;
  max-width: 400px;
`

export default function() {
  return <UserGridStyled>
    <Photo><ProfileImage /></Photo>
    <Name>GridGallery</Name>
    <Label><strong> 400 </strong>Followers</Label>
    <Description>Echo park pop-up stumptown selvage YOLO. Tattooed banjo chillwave cray actually vegan VHS chia austin health goth chartreuse ethical craft beer. Kitsch marfa godard, kickstarter tote bag +1 ethical.</Description>
  </UserGridStyled>
}
