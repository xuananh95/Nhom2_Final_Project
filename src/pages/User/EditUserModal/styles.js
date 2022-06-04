import styled from "styled-components";

export const SEditUserModal = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border-radius: 5px;
  padding: 20px;
  .edit-info {
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    .info-row {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .info-row-title {
        flex: 1;
        font-weight: bold;
      }
      .info-row-value {
        flex: 1;
        margin-left: 35px;
        select,
        input {
          border: none;
          background-color: #4ca3f5;
          color: white;
          outline: none;
          padding: 10px;
          border-radius: 5px;
          width: 100%;
          margin: 5px;
        }
      }
    }
    .btn-group {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;
