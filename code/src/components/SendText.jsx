import React, { useState } from "react";
import styled from "styled-components";

const SendText = ({ setText, sendText, setExName }) => {
  const [messageLength, setMessageLength] = useState(0);
  // const [exNameLength, setExNameLength] = useState(0);
  const [tooLong, setTooLong] = useState(false);
  const [tooShort, setTooShort] = useState(false);
  const [nameTooLong, setNameTooLong] = useState(false);
  const [nameTooShort, setNameTooShort] = useState(false);

  // WordCounter and Message and Error
  const wordCount = (event) => {
    setText(event);
    setMessageLength(event.length);
    if (event.length < 5) {
      setTooShort(true);
    } else if (event.length > 140) {
      setTooLong(true);
    } else {
      setTooLong(false);
      setTooShort(false);
    }
  };

  const nameCount = (event) => {
    setExName(event);
    // setExNameLength(event.length);
    if (event.length < 4) {
      setNameTooShort(true);
    } else if (event.length > 15) {
      setNameTooLong(true);
    } else {
      setNameTooLong(false);
      setNameTooShort(false);
    }
  };

  let textErrorStyle = {};
  let buttonErrorStyle = {};
  let buttonMessage = "💔 Text Your Ex 💔";

  if (tooLong === true) {
    textErrorStyle = { fontWeight: 700, color: "red" };
    buttonErrorStyle = {
      backgroundColor: "black",
      color: "white",
      cursor: "not-allowed",
    };
    buttonMessage = "Too long to send! 🤬";
  } else {
    textErrorStyle = {};
  }

  if (tooShort === true) {
    textErrorStyle = { fontWeight: 700, color: "red" };
    buttonErrorStyle = {
      backgroundColor: "black",
      color: "white",
      cursor: "not-allowed",
    };
    buttonMessage = "Too short to send! 🥱";
  } else {
    textErrorStyle = {};
  }

  if (nameTooLong === true) {
    buttonErrorStyle = {
      backgroundColor: "black",
      color: "white",
      cursor: "not-allowed",
    };
    buttonMessage = "Max 15 char name! 🙃";
  } else {
    textErrorStyle = {};
  }

  if (nameTooShort === true) {
    buttonErrorStyle = {
      backgroundColor: "black",
      color: "white",
      cursor: "not-allowed",
    };
    buttonMessage = "Min 4 char name! 😒";
  } else {
    textErrorStyle = {};
  }

  return (
    <>
      <FormContainer>
        <TopContainer>
          <TextAreaLabel htmlFor="sendText">
            Send an anonymous text to your ex!
          </TextAreaLabel>
          <ToContainer>
            <div>
              <ToLabel htmlFor="exName">TO:</ToLabel>
              {/* <p style={textErrorStyle}>{exNameLength}/15</p> */}
            </div>

            <ExInput
              type="text"
              id="exName"
              onChange={(event) => nameCount(event.target.value)}
              placeholder="Their name here..."
            />
          </ToContainer>
          <TextMessage
            className="send-thought-input"
            id="sendText"
            onChange={(event) => wordCount(event.target.value)}
            placeholder="Your message here 😘"
          />
        </TopContainer>
        <BottomContainer>
          <SendButton style={buttonErrorStyle}>
            <span
              role="img"
              aria-label="send text message button."
              onClick={sendText}
            >
              {buttonMessage}
            </span>
          </SendButton>
          <p style={textErrorStyle}>{messageLength}/140</p>
        </BottomContainer>
      </FormContainer>
    </>
  );
};

export default SendText;

const FormContainer = styled.div`
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
  background-color: black;
  height: 240px;
  justify-content: space-around;
  width: 100%;
`;

const ToContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  /* padding: 5px 0; */
`;

const SendButton = styled.button`
  color: black;
  border-radius: 5px;
  border: none;
  background-color: white;
  height: 40px;
  width: 75%;
  font-family: "Source Code Pro", monospace;
  padding: 0 10px 2px 0;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
`;

const TextMessage = styled.textarea`
  width: 100%;
  height: 50%;
  /* margin-top: 10px; */
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  resize: none;
  padding: 5px;
  border-radius: 5px;
`;

const TopContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextAreaLabel = styled.label`
  font-weight: 600;
  padding-bottom: 10px;
`;

const ToLabel = styled.label`
  font-weight: 600;
`;

const ExInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  font-family: "Source Code Pro", monospace;
  border: none;
  width: 300px;
`;
