import { FC, MouseEvent } from "react";
import { ReactComponent as SuccessIcon } from "./../../utils/success.svg";
import { ReactComponent as ErrorIcon } from "./../../utils/error.svg";
import { ReactComponent as EnterIcon } from "./../../utils/enter.svg";
import styled from "styled-components";
import { Statuses } from "./../Start";
import { useNavigate } from "react-router-dom";

type StatusProps = {
  status: string;
  setStatus: (value: any) => void;
};

export const Status: FC<StatusProps> = ({ status, setStatus }) => {
  const navigate = useNavigate();
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    setStatus(Statuses.success);
    navigate("/verify/1");
  };

  return (
    <StatusContainer>
      <div>Status: </div>
      {status === "success" ? (
        <Span>
          Ok
          <Success>
            <SuccessIcon />
          </Success>
        </Span>
      ) : status === "error" ? (
        <Span>
          Не ok :(
          <Error>
            <ErrorIcon />
          </Error>
        </Span>
      ) : (
        <Verify>
          <Span>No verified </Span>
          <button className="button" onClick={click}>
            <EnterIcon /> Verify
          </button>
        </Verify>
      )}
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  font-size: 25px;
  background-color: #a0a0a050;
  display: flex;
  padding: 20px;
  align-items: baseline;
  margin-bottom: 20px;
`;
const Span = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const Success = styled.svg`
  background-color: #2aa42a9e;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  padding: 5px 5px;
`;
const Error = styled(Success)`
  background-color: #cd33259e;
`;
const Verify = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`;
