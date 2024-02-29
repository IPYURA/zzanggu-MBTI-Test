import { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [mbti, setMbti] = useState<string>("");
  const navigate = useNavigate();

  const breakPoint = () => {
    if ((questionNo + 1) % 3 === 0) {
      switch (questionNo) {
        case 2:
          totalScore >= 2 ? setMbti(mbti + "E") : setMbti(mbti + "I");
          setTotalScore(0);
          break;
        case 5:
          totalScore >= 2 ? setMbti(mbti + "S") : setMbti(mbti + "N");
          setTotalScore(0);
          break;
        case 8:
          totalScore >= 2 ? setMbti(mbti + "T") : setMbti(mbti + "F");
          setTotalScore(0);
          break;
        case 11:
          totalScore >= 2 ? setMbti(mbti + "J") : setMbti(mbti + "P");
          setTotalScore(0);
          break;
        default:
          break;
      }
    }
  };

  const handleClickButton = (no: number) => {
    setQuestionNo(questionNo + 1);
    setTotalScore(totalScore + no);
    breakPoint();
  };

  if (QuestionData.length === questionNo) {
    setTimeout(() => {
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }, 700);
  }

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / 12) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>
        {questionNo === 12
          ? QuestionData[11].title
          : QuestionData[questionNo].title}
      </Title>

      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1)}
          variant="danger"
          style={{ width: "100%" }}
        >
          {questionNo === 12
            ? QuestionData[11].answera
            : QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0)}
          variant="danger"
          style={{ width: "100%" }}
        >
          {questionNo === 12
            ? QuestionData[11].answerb
            : QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.bgColor_pc};
  border: 1px solid #f3f2a9;
  word-break: keep-all;
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 769px) {
    background: ${(props) => props.theme.bgColor_mb};
  }
`;
const Title = styled.div`
  font-size: 34px;
  text-align: center;
  margin: 30px 0;
  @media screen and (max-width: 769px) {
    font-size: 30px;
  }
`;
const ButtonGroup = styled.div`
  margin-top: 50px;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  Button {
    height: 130px;
    font-size: 24px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 15px;
    flex-direction: column;
    Button {
      font-size: 20px;
    }
  }
`;
