import React, { useState } from "react";
import {
  Container,
  Header,
  UserDetails,
  Avatar,
  UserFullName,
  PostDate,
  ContentWrapper,
  UserActions,
  ActionButton,
  Label,
  Count,
  ActionUserList,
  CommentsWrap,
  Comment,
  UserImage,
  UserName,
  CommentContent,
  CommentText,
} from "./Post.style";
import { users } from "../../data/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faHeart,
  faComments,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ postData }) => {
  const [hasInteracted, setHasinteracted] = useState({
    like: false,
    share: false,
  });

  const [commentsOpen, setCommentsOpen] = useState(false);

  function getAuthorData(id) {
    return users.find((user) => user.id === id);
  }

  return (
    <Container>
      <Header>
        <UserDetails>
          <Avatar src={getAuthorData(postData.author).avatar.small} />
          <div>
            <UserFullName>
              {`${getAuthorData(postData.author).first_name} ${
                getAuthorData(postData.author).last_name
              }`}
            </UserFullName>
            <PostDate>{postData.date}</PostDate>
          </div>
        </UserDetails>
        <FontAwesomeIcon icon={faEllipsisV} />
      </Header>
      <ContentWrapper>
        {postData.content.text !== undefined && <p>{postData.content.text}</p>}
        {postData.content.video !== undefined && (
          <video src={postData.content.video} controls />
        )}
        {postData.content.image.length > 0 &&
          postData.content.image.map((source, index) => (
            <img
              src={source}
              key={index}
              alt={`${getAuthorData(postData.author).first_name} ${
                getAuthorData(postData.author).last_name
              }`}
            />
          ))}
      </ContentWrapper>
      <UserActions>
        <ActionButton
          interacted={hasInteracted.like}
          onClick={() =>
            setHasinteracted({
              ...hasInteracted,
              like: !hasInteracted.like,
            })
          }
        >
          {postData.likes.length > 0 && (
            <ActionUserList>
              {postData.likes.map((user, index) => {
                const currentUser = getAuthorData(user);
                return (
                  <span key={index}>
                    {currentUser.first_name} {currentUser.last_name}
                  </span>
                );
              })}
            </ActionUserList>
          )}
          <FontAwesomeIcon icon={faHeart} />
          <Label>Likes</Label>
          {postData.likes.length > 0 && <Count>{postData.likes.length}</Count>}
        </ActionButton>

        <ActionButton onClick={() => setCommentsOpen(!commentsOpen)}>
          {postData.comments.length > 0 && (
            <ActionUserList>
              {postData.comments.map((comment, index) => {
                const currentUser = getAuthorData(comment.user);
                return (
                  <span key={index}>
                    {currentUser.first_name} {currentUser.last_name}
                  </span>
                );
              })}
            </ActionUserList>
          )}
          <FontAwesomeIcon icon={faComments} />
          <Label>Comments</Label>
          {postData.comments.length > 0 && (
            <Count>{postData.comments.length}</Count>
          )}
        </ActionButton>

        <ActionButton
          interacted={hasInteracted.share}
          onClick={() =>
            setHasinteracted({
              ...hasInteracted,
              share: !hasInteracted.share,
            })
          }
        >
          {postData.shares.length > 0 && (
            <ActionUserList>
              {postData.shares.map((share, index) => {
                const currentUser = getAuthorData(share);
                return (
                  <span key={index}>
                    {currentUser.first_name} {currentUser.last_name}
                  </span>
                );
              })}
            </ActionUserList>
          )}
          <FontAwesomeIcon icon={faRetweet} />
          <Label>Shares</Label>
          {postData.shares.length > 0 && (
            <Count>{postData.shares.length}</Count>
          )}
        </ActionButton>
      </UserActions>
      <CommentsWrap isVisible={commentsOpen}>
        {postData.comments.length > 0 &&
          postData.comments.map((comment, index) => {
            const currentUser = getAuthorData(comment.user);
            return (
              <Comment key={index}>
                <UserImage src={currentUser.avatar.large} />
                <CommentContent>
                  <UserName>
                    {currentUser.first_name} {currentUser.last_name}
                  </UserName>
                  <CommentText>{comment.comment_text}</CommentText>
                </CommentContent>
              </Comment>
            );
          })}
      </CommentsWrap>
    </Container>
  );
};

export default Post;
