import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeItem from "./NoticeItem";
import axios from "axios";

const NoticeWrap = styled.div`
  width: 1025px;
  border: 2px solid #000;
  border-radius: 6px;
  padding: 10px;
`;

const NoticeInput = styled.textarea`
  resize: none;
  width: 1025px;
  height: 143px;
  border: none;

  :focus {
    outline: none;
  }
`;

const VotingCheckDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const NoticeAddBtnDiv = styled.div`
  width: 1045px;
  display: flex;
  justify-content: end;
`;

const NoticeAddBtn = styled.button`
  margin-top: 14px;
  border-radius: 10px;
  background-color: black;
  color: #fff;
  font-weight: 600;
  width: 87px;
  height: 28px;
`;

const AddNotice = () => {
  const [notice, setNotice] = useState("");

  const [newNotice, setNewNotice] = useState({});
  const [isChecked, setisChecked] = useState(false);

  const fetchNotice = async () => {
    const response = await axios
      .get("http://13.125.111.131:8080/recruitment/2/notice", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo5LCJleHAiOjE2ODEyODc5NDl9.T-2IXekDbG9a0y8TaSepcWfpOSxJgpUPZvlkkeXWQ3EucSwgWgmWafudaxelZPSSl3xcWGH8hbpfY_0GIMRYHg",

          AuthorizationRefresh:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyODgwNDl9.KXHwTPY1HvTwhfZo9PdCPdMWgRElud6mh18ymofGyi65ozWAVLAPqpcYB1LRTRzqX5J0iDtt3IS_w8VZa2eLsQ",
        },
      })
      .then((response) => {
        console.log(response.data.notices);
        setNewNotice(response.data.notices[3]);
      });
  };
  // useEffect(() => {
  //   fetchNotice();
  // }, [newNotice]);

  const onSubmitNotice = (e) => {
    e.preventDefault();
    // notice.check = isChecked;

    axios
      .post(
        "http://13.125.111.131:8080/recruitment/2/notice",
        {
          content: notice.content,
          checkVote: isChecked,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOlsiUk9MRV9VU0VSIl0sImlkIjo5LCJleHAiOjE2ODEyODc5NDl9.T-2IXekDbG9a0y8TaSepcWfpOSxJgpUPZvlkkeXWQ3EucSwgWgmWafudaxelZPSSl3xcWGH8hbpfY_0GIMRYHg",

            AuthorizationRefresh:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyODgwNDl9.KXHwTPY1HvTwhfZo9PdCPdMWgRElud6mh18ymofGyi65ozWAVLAPqpcYB1LRTRzqX5J0iDtt3IS_w8VZa2eLsQ",
          },
        }
      )

      .then((response) => console.log(response));
    // setNewNotice([notice, ...newNotice]);
    setNotice("");
    setisChecked(false);
  };

  const onNoticeDelete = (id) => {
    //const response = await axios.delete(`/recruitment/{recruitmentId}/notice`);
    setNewNotice(newNotice.filter((item) => item.noticeId !== id));
  };

  // const onEditNotice = (id, newContent) => {
  //   //const response = await axios.Patch(`/recruitment/{recruitmentId}/notice/{noticeId}`,{data});
  //   setNewNotice(
  //     newNotice.map((item) =>
  //       item.noticeId === id ? { ...item, content: newContent } : item
  //     )
  //   );
  // };

  // const onVoteFinish = (id, votestate) => {
  //   setisChecked(votestate);
  //   setNewNotice(
  //     newNotice.map((item) =>
  //       item.noticeId === id ? { ...item, check: isChecked } : item
  //     )
  //   );
  // };

  return (
    <div>
      <h1>공지사항 추가</h1>
      <div>
        <form onSubmit={onSubmitNotice}>
          <NoticeWrap>
            <NoticeInput
              placeholder="공지사항을 입력하세요"
              value={notice}
              onChange={(e) => setNotice(notice)}
            />
            <VotingCheckDiv>
              <label>
                투표기능 포함
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setisChecked(e.target.checked)}
                />
              </label>
            </VotingCheckDiv>
          </NoticeWrap>
          <NoticeAddBtnDiv>
            <NoticeAddBtn>등록하기</NoticeAddBtn>
          </NoticeAddBtnDiv>
        </form>
      </div>
      {/* {newNotice.map((newnotice) => (
        <div key={newnotice.noticeId}>
          <NoticeItem
            newnotice={newnotice}
            onNoticeDelete={onNoticeDelete}
            onEditNotice={onEditNotice}
            onVoteFinish={onVoteFinish}
          />
        </div>
      ))} */}
      {newNotice ? (
        <NoticeItem
          newnotice={newNotice}
          // onNoticeDelete={onNoticeDelete}
          // onEditNotice={onEditNotice}
          // onVoteFinish={onVoteFinish}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddNotice;
