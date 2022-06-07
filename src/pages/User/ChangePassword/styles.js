import styled from "styled-components";

export const SChangePwd = styled.form`
  /* background-color: white; */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  label {
    color: white;
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
    font-size: 1rem;
  }
  .btn-group {
    margin: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    button {
      width: 150px;
      height: 50px;
      font-size: 1rem;
      margin-left: 5px;
    }
  }
`;
