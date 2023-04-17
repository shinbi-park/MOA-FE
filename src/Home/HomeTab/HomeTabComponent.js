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

const HomeTabComponent = ({type}) => {
    const [postData, setPostData] = useState([]);
    
    useEffect(() => {
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
            setPostData(response.value);
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, [type]);

return(

    <PostContainerWrapper>
       {postData.map((post, index)=> (
              <PostComponent key={index} 
              type="main"
              title={post.title}
              author={post.author} category={post.category} tags={post.tags} recruitStatus={post.recruitStatus} date={post.createAt}replyCount={post.replyCount}
              />
            ))}
  
    </PostContainerWrapper>
)

}

export default HomeTabComponent;