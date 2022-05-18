import React from "react";
import styled from "styled-components";

const LikeButton = ({ likes, likeText, textId }) => {
  return (
    <>
      <LikeContainer onClick={() => likeText(textId)}>
        {likes ? <div>💩</div> : <div>🙊</div>}
        {/* <span role="img" aria-label="like button">
          💩
        </span> */}
      </LikeContainer>
      <LikesText className="likes-text">×{likes}</LikesText>
    </>
  );
};

export default LikeButton;

const LikeContainer = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  border: none;
  padding-bottom: 2px;
`;

const LikesText = styled.p`
  align-self: center;
  padding-left: 10px;
  font-size: 18px;
`;
