import { Button } from "@components/common";
import { WHITES } from "@style/color";
import { P1, Tag1 } from "@style/font";
import styled, { keyframes } from "styled-components";
import { PolicyProps } from "./types";

function Policy({ onAgree, onNotAgree }: PolicyProps) {
  return (
    <Wrap>
      <Tag1 className="intro">
        본 설문조사는 산업통상자원부의 지원을 받아, 한국전자기술연구원(KETI)에서
        수행하는 것으로서, BEMS 공공데이터 수집/분석을 위한 연구입니다. 해당
        연구 고유의 목적 이외에 다른 용도의 추가 활용은 발생하지 않음을
        알려드립니다.
      </Tag1>
      <P1 className="title">개인정보 수집/이용 동의서</P1>
      <Tag1 className="description">
        <pre>
          {`1.수집하는 개인정보 항목
 • 성명, 성별, 나이

2.개인정보의 수집 및 이용 목적 제공하신 정보는 BEMS 공공데이터 수집/분석을 위한 연구에 사용합니다.
2-1.본인 확인 식별 절차에 이용(성명, 성별, 나이)
2-2.의사소통 및 정보 전달 등에 이용(성명, 성별, 나이)

3.개인정보의 보유 및 이용 기간 수집된 개인정보의 보유 기간은 BEMS 공공데이터 수집/분석을 위한 연구 종료 후 4년간이며 삭제 요청 시, 당사자는 개인 정보를 재생이 불가능한 방법으로 즉시 파기합니다.
• 귀하는 이에 대한 동의를 거부할 수 있습니다. 
• 다만 동의가 없을 경우 당 기관의 BEMS 공공데이터 수집/분석을 위한 연구 참여 신청이 불가능할 수도 있음을 알려드립니다.`}
        </pre>
      </Tag1>
      <div className="button-group">
        <Button onClick={onAgree}>동의</Button>
        <Button onClick={onNotAgree}>동의 안함</Button>
      </div>
    </Wrap>
  );
}

const OpacityAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Wrap = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;

  width: 100vw;
  height: 100vh;
  height: calc(var(--vh) * 100);

  display: flex;
  flex-direction: column;

  background: rgba(51, 51, 51, 0.8);
  z-index: 255;

  padding: 48px 12px;
  box-sizing: border-box;

  & > .intro {
    color: ${WHITES[8]};
    word-break: break-all;

    margin: 0 0 24px;
  }

  & > .title {
    color: ${WHITES[10]};
    margin: 0 0 12px;
  }

  & > .description {
    color: ${WHITES[7]};
    margin: 0 0 24px;
    & > pre {
      white-space: pre-wrap;
    }
  }

  & > .button-group {
    display: flex;
    column-gap: 8px;

    align-self: flex-end;
  }

  animation: ${OpacityAnimation} 0.3s ease-out forwards;
`;

export { Policy };
