import styled from "styled-components";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import PostComponent from "../../component/PostComponent"

const PostContainerWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items:center;

  & > * {
    width: calc((100 - 2 * 10px) / 3); 
    margin: 10px; 
  }
`;

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 100px;
  width: 800px;
  font-size: 20px;
  font-weight: 650;
  line-height: 2;
`;

const HomeTabComponent = ({type}) => {
    const [postData, setPostData] = useState([]);
    const [comment, setComment] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
      let url = '';
      if(type === "new") {
        setComment(<p>현재 새로운 글이 없습니다 <br/>새로운 글을 등록해보세요!</p>)
        url = (`/recruitment/search/slice?page=${page}&size=12&sort=createdDate,desc`);
      }
      else if(type === "recruiting"){
        setComment(<><p>현재 모집 중인 글이 없습니다<br/>새로운 글을 등록해보세요!</p></>)
        url = (`/recruitment/search/page?page=${page}&size=12&stateCode=1`);
      }
      else if(type === "recommend") {
        setComment(<p>추천 글은 로그인 후 이용할 수 있습니다!</p>)
        url = ('/home/recruitment/popular');
      }
      else if(type === "popular") {
        setComment(<p>현재 인기글이 없습니다 <br/>새로운 글을 등록해보세요!</p>)
        url = ('/home/recruitment/popular');
      }
      console.log(url);
        axios.get("http://13.125.111.131:8080" + url, )
        .then(response => {
            console.log(response.data);
            setPostData(response.data.value);
          })
          .catch(error => {
            console.log(error);
          });

      }, [type]);
      
return(

    <PostContainerWrapper>
       { postData.length > 0 ? postData.map((post, index)=> (
              <PostComponent key={index} 
              type="main"
              id = {post.id}
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createAt}replyCount={post.replyCount}
              />
            ))
          : <EmptyContent>
            {comment}
          </EmptyContent>
          }

    </PostContainerWrapper>
)

}

export default HomeTabComponent;