import styled from "styled-components";

export const SError = styled.div`
  width: 100%;
  height: 80vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .error-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 40px;
    background-color: rgba(9, 11, 16, 0.8);
    border: 1px solid rgb(55, 120, 232);
    border-radius: 5px;
    .error-message {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
    a {
      color: white;
      cursor: pointer;
      font-size: 2.5rem;
    }
  }
`;
