import styled from "styled-components";
import { colors, shadow } from "../../const/colors";

export const Container = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${shadow};
  background-color: ${colors.offwhite};
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserFullName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const PostDate = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const ContentWrapper = styled.div`
  & > * {
    max-width: 100%;
    display: block;
    margin: 0 auto 1rem;
  }
`;

export const UserActions = styled.div`
  display: flex;
`;

export const ActionUserList = styled.div`
  display: none;
  position: absolute;
  bottom: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  left: 0;
  right: 0;
  padding: 0.5rem;
  color: #ffffff;
  border-radius: 3px;
  span {
    font-size: 12px;
    display: inline-block;
    margin-right: 0.5rem;
    &::after {
      content: ",";
    }
    &:last-child::after {
      content: "";
    }
  }
`;

export const ActionButton = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem 0;
  border-radius: 3px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    ${ActionUserList} {
      display: block;
    }
  }
  ${({ interacted }) => (interacted ? "color: blue" : "color: black")}
`;

export const Label = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
`;

export const Count = styled.span`
  display: inline-flex;
  width: 2em;
  height: 2em;
  font-size: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border-radius: 50%;
`;

export const CommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow: hidden;
  transition: max-height 0.3s;
  ${({ isVisible }) => (isVisible ? "max-height: 2000px" : "max-height: 0")}
`;

export const Comment = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CommentText = styled.p`
  font-size: 14px;
`;
