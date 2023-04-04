import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const Wrapper = styled.div`
  span {
    font-weight: 550;
  }
  .userAddress {
    color: #5d5fef;
    font-weight: 700;
  }
`;
const StyledMap = styled(Map)`
  width: 575px;
  height: 300px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;
const SearchContainer = styled.div`
  input {
    align-items: center;
    box-shadow: 2px 1px 5px #bdbdbd;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #707070;
    font-size: 16px;
    width: 500px;
    min-height: 15px;
  }
  button {
    width: 50px;
    height: 35px;
    padding: 8px;
    border: none;
    background-color: ${(props) => props.backgroundColor};
    font-weight: bold;
    color: black;
    font-size: 16px;
    margin-left: 10px;
    box-shadow: 2px 1px 5px #bdbdbd;
    &:hover {
      cursor: pointer;
    }
  }
`;

function KakaoMap({ handleUserLocation }) {
  const [state, setState] = useState({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true
  });
  const [searchAddress, setSearchAddress] = useState("");
  const [markerPosition, setMarkerPosition] = useState({});
  const [userAddress, setUserAddress] = useState(null);

  const geocoder = new window.kakao.maps.services.Geocoder();
  const handleMapClick = (map, mouseEvent) => {
    const latlng = mouseEvent.latLng;
    setMarkerPosition({
      lat: latlng.getLat(),
      lng: latlng.getLng()
    });
    handleUserLocation({
      lat: latlng.getLat(),
      lng: latlng.getLng()
    });
    const latLng = new window.kakao.maps.LatLng(
      latlng.getLat(),
      latlng.getLng()
    );
    geocoder.coord2Address(
      latLng.getLng(),
      latLng.getLat(),
      (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setUserAddress(result[0].address.address_name);
        } else {
          console.log("error");
        }
      }
    );
  };

  const SearchMap = () => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    let callback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState((prevState) => ({
          ...prevState,
          center: { lat: newSearch.y, lng: newSearch.x }
        }));
      }
    };
    geocoder.addressSearch(searchAddress, callback);
  };

  const handleSearchAddress = (e) => {
    setSearchAddress(e.target.value);
  };

  useEffect(() => {
    const handleLoad = () => {
      if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps SDK loaded!");
      } else {
        console.log(
          "Kakao Maps SDK not loaded yet. Trying again in 1 second..."
        );
        setTimeout(handleLoad, 1000);
      }
    };

    handleLoad();
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <Wrapper>
      <SearchContainer>
        <input
          onChange={handleSearchAddress}
          onKeyPress={(e) => e.key === "Enter" && SearchMap()}
        />
        <button onClick={SearchMap}>검색</button>
      </SearchContainer>

      {userAddress === null ? (
        <span>선택된 지역이 없습니다</span>
      ) : (
        <span>
          선택된 지역은 <span className="userAddress">{userAddress}</span>{" "}
          입니다.
        </span>
      )}

      <StyledMap
        center={{ lat: state.center.lat, lng: state.center.lng }}
        onClick={handleMapClick}
      >
        {markerPosition.lat && markerPosition.lng && (
          <MapMarker position={markerPosition} />
        )}
      </StyledMap>
    </Wrapper>
  );
}

export default KakaoMap;