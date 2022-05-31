import styled from "styled-components";

export const SUserItem = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  .item-left {
    flex: 1;
  }
  .item-right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .user-info {
      margin-right: 20px;
      button {
        width: 80px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
        border: none;
        background-color: #1b77f0;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
      }
    }
    .delete {
      cursor: pointer;
      .delete-btn:hover {
        color: red;
      }
    }
  }
`;
