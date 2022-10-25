import { Header } from "@components/common";
import { FullScreen } from "@style/wrap";
import React from "react";
import styled from "styled-components";

function Template({ children }: React.PropsWithChildren<any>) {
  return (
    <FullScreen>
      <Header></Header>
      <Content>{children}</Content>
    </FullScreen>
  );
}

const Content = styled.main`
  position: absolute;

  top: 82px;
  width: 100%;
  height: calc(100vh - 82px);

  padding: 18px 12px 0;
  box-sizing: border-box;

  overflow-y: visible;
`;

export { Template };
