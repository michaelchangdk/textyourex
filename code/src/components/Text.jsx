import React from "react";
import LikeButton from "./LikeButton";
import { formatDistance } from "date-fns";
import parseISO from "date-fns/parseISO";
import styled from "styled-components";

const Text = ({ text, name, likeText }) => {
  // const timePosted = formatDistance(parseISO(text.createdAt), new Date(), {
  //   addSuffix: true,
  // });

  return (
    <>
      <TextContainer>
        <TopBar>
          <ToText>TO: {name && name.toUpperCase()}</ToText>
          <p>{text && text.message}</p>
        </TopBar>
        <BottomBar>
          <LikeContainer>
            <LikeButton
              likes={text && text.likes}
              likeText={likeText}
              textId={text && text._id}
            />
          </LikeContainer>
          <div>{/* <TimeText>{text && timePosted}</TimeText> */}</div>
        </BottomBar>
      </TextContainer>
    </>
  );
};

export default Text;

const TextContainer = styled.div`
  height: 220px;
  margin: 15px auto;
  border: 1px solid white;
  box-shadow: 2px 4px white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  width: 100%;
`;

const TopBar = styled.div`
  height: 75%;
`;

const BottomBar = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ToText = styled.p`
  font-weight: 600;
  padding-bottom: 5px;
`;

const TimeText = styled.p`
  color: gray;
`;
