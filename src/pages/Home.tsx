import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgImage from "../assets/bg.jpg";
import mbBgImage from "../assets/mobile.png";
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Container>
      <Wrapper>
        <Title>내가 짱구 속 인물이라면?</Title>
        <Button
          onClick={handleClickButton}
          className="btn-danger"
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          테스트 시작!
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center / cover;
  @media screen and (max-width: 769px) {
    background: url(${mbBgImage}) no-repeat center / cover;
    object-fit: contain;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 769px) {
    background: none;
  }
`;
const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-top: 40px;
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 769px) {
    font-size: 58px;
  }
  @media screen and (max-width: 460px) {
    font-size: 42px;
  }
`;
