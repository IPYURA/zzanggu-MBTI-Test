import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ResultData } from "../assets/data/resultdata";
import { Button } from "react-bootstrap";
import { IData } from "../assets/data/resultdata";

const Result = () => {
  const [resultData, setResultData] = useState<IData | null>(null);
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result || null);
  }, [mbti]);

  return (
    <Container>
      <Header>당신이 짱구 속 인물이라면?</Header>
      <Wrapper>
        <Image>
          <img
            src={resultData?.image}
            alt="resultImage"
            width={350}
            height={350}
          />
        </Image>
        <ResultDesc>
          "{resultData?.best}"인 당신은 "{resultData?.name}" 입니다!
        </ResultDesc>
        <Desc>{resultData?.desc}</Desc>
        <Button onClick={handleClickButton} variant="danger">
          테스트 다시하기
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: keep-all;
  background ${(props) => props.theme.bgColor_pc};
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 769px){
    background: ${(props) => props.theme.bgColor_mb};
    height:auto;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  font-size: 35px;
  color: #fff;
  background: ${(props) => props.theme.hdColor};
  line-height: 80px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor_pc};
  @media screen and (max-width: 769px) {
    height: 100%;
    background: ${(props) => props.theme.bgColor_mb};
  }
`;
const Image = styled.div`
  width: 350px;
  height: 350px;
  margin: 20px 0;
  img {
    object-fit: contain;
  }
`;
const ResultDesc = styled.div`
  width: 70%;
  font-size: 30px;
  font-weight: 550;
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
`;
const Desc = styled(ResultDesc)`
  font-size: 24px;
`;
