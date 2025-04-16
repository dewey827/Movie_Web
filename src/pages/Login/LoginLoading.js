import React from "react";
import styled from "styled-components";

import {PropagateLoader} from "react-spinners";

const LoginLoading = ({loading}) => {
    return(
        <LoadingContainer>
            <LoadingIcon>
                <PropagateLoader
                color="#7063FF"
                size={40}
                speedMultiplier={1}
                loading
                cssOverride={overRide}
                />
            </LoadingIcon>
            <LoadingText>Please wail...⏳</LoadingText>
        </LoadingContainer>
    );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 200px;
`;

const LoadingIcon = styled.div`
  position: absolute;
`;
//css 상속
const overRide = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  top: '100px',
};

const LoadingText = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #676767;
`;

export default LoginLoading;