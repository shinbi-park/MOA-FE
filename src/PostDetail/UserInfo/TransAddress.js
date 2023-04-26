import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const TransAddress = ({ lat, lng }) => {
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setUserAddress(result[0].address.address_name);
      } else {
        console.log("error");
      }
    });
  }, [lat, lng]);

  const lastSpaceIdx = userAddress?.lastIndexOf(" ") || -1;
  const address = userAddress?.slice(0, lastSpaceIdx);

  return <Wrapper>{address}</Wrapper>;
};

export default TransAddress;
