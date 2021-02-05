import React, { useState, useEffect } from "react";
import { Container, Aside, Newsfeed, StickySidebar } from "./Newsfeed.style";
import { data } from "../data/data";
import Post from "../components/post/Post";

const NewsfeedPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.posts);
  }, []);

  return (
    <Container>
      <Aside>
        <StickySidebar>left</StickySidebar>
      </Aside>
      <Newsfeed>
        {posts.map((post, index) => (
          <Post key={index} postData={post} />
        ))}
      </Newsfeed>
      <Aside>
        <StickySidebar>right</StickySidebar>
      </Aside>
    </Container>
  );
};

export default NewsfeedPage;
