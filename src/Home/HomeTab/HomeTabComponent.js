import styled from "styled-components";
import React, {useState, useEffect} from "react";
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

    useEffect(() => {
      if(type === "new") {
        setComment(<p>현재 새로운 글이 없습니다 <br/>새로운 글을 등록해보세요!</p>)
      }
      else if(type === "recruiting"){
        setComment(<p>현재 모집 중인 글이 없습니다 <br/>새로운 글을 등록해보세요!</p>)
      }
      else if(type === "recommend") {
        setComment(<p>추천 글은 로그인 후 이용할 수 있습니다!</p>)
      }
      else if(type === "popular") {
        setComment(<p>현재 인기글이 없습니다 <br/>새로운 글을 등록해보세요!</p>)
      }
        const URI = "/home/recruitment/" + type;
        console.log(URI);
        fetch("http://13.125.111.131:8080" + URI, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo4LCJleHAiOjE2ODEyNzcwOTF9.qNFbSaIv_fUcJ4BV-gPIRY_t5u84zbEFahx4FdgSukw7qnvV-OdnVifFdxBg0Zk5cs1I0VfO1YBTjaJJUwSmbA",
            AuthorizationRefresh:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyNzcxOTF9.fhkN47qnZY-Xqgik3RRWH_BXYjy1y95nYBzFwp77Wz1m81ZA_9PbJmb6sTWMciNXkOTenWEg100694CEDApEww"
          }
        })
          .then((response) => {
            if (response !== 200) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            setPostData(response.json);
            console.log(response.json);
          })
          .then(data => console.log(data))
          .catch((error) => {
            console.error("Error:", error);
          });
      }, [type]);
      
return(

    <PostContainerWrapper>
       { postData.length > 0 ? postData.map((post, index)=> (
              <PostComponent key={index} 
              type="main"
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