import React, { useState, useEffect } from "react";
import SendText from "./SendText";
import Text from "./Text";
import styled from "styled-components";
// import Search from "./Search";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [exTexts, setExTexts] = useState([]);
  const [text, setText] = useState("");
  const [exName, setExName] = useState("");
  // const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (loading === true) {
      getTexts();
    }

    // const interval = setInterval(() => {
    //   getTexts();
    // }, 10000);

    // return () => clearInterval(interval);
  }, [loading]);

  // useEffect(() => {
  //   getTexts();
  // }, [exTexts]);

  // GETTING TEXTS
  const GET_TEXT_API = "https://textyourex.herokuapp.com/texts";
  const getTexts = async () => {
    setLoading(true);
    const response = await fetch(GET_TEXT_API);
    const data = await response.json();
    setExTexts(data.data);
    setLoading(false);
  };

  // SENDING A MESSAGE
  const SEND_TEXT_API = "https://textyourex.herokuapp.com/texts";
  const sendText = () => {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text, ex: exName }),
    };

    fetch(SEND_TEXT_API, options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((update) => {
        // console.log(update)
        document.getElementById("sendText").value = "";
        document.getElementById("exName").value = "";
        getTexts();
        setLoading(false);
      })
      .catch((e) => {
        // console.log(e)
      });
  };

  // LIKING A MESSAGE
  const likeText = (textId) => {
    setLoading(true);
    const LIKE_TEXT = `https://textyourex.herokuapp.com/texts/${textId}/like`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    fetch(LIKE_TEXT, options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        setLoading(false);
        return data.json();
      })
      .then((update) => {
        getTexts();
        // console.log(update)
      })
      .catch((e) => {
        // console.log(e)
      });
  };

  // Fetch Most Liked Texts
  // const MOST_LIKED_API = "https://textyourex.herokuapp.com/mostliked";
  // const getMostLiked = async () => {
  //   setLoading(true);
  //   const response = await fetch(MOST_LIKED_API);
  //   const data = await response.json();
  //   setExTexts(data.data);
  //   setLoading(false);
  // };

  // Search For Name
  // const NAME_SEARCH_API = `https://textyourex.herokuapp.com/ex/${searchName}`;
  // const findName = async () => {
  //   setLoading(true);
  //   const response = await fetch(NAME_SEARCH_API);
  //   const data = await response.json();
  //   setExTexts(data.data);
  //   setLoading(false);
  // };

  return (
    <PageContainer>
      <SendText
        setText={setText}
        sendText={sendText}
        setExName={setExName}
        loading={loading}
      />
      {loading && <p>Loading...</p>}
      {/* <Search
        getMostLiked={getMostLiked}
        setSearchName={setSearchName}
        findName={findName}
      /> */}
      {/* {isLoading && <p>Data is loading...</p>} */}
      {exTexts.map((text) => (
        <Text key={text._id} text={text} name={text.ex} likeText={likeText} />
      ))}
    </PageContainer>
  );
};

export default HomePage;

const PageContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
