import styled from "styled-components";

export const SUserHistory = styled.div`
  margin-top: 20px;
  /* display: grid;
  grid-template-columns: 2fr 3fr 2fr 2fr 2fr;
  .grid-item {
    border-left: 1px solid rgb(55, 120, 232);
  }
  .item-1 {
    border-left: none;
  } */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  .history-header {
    font-size: 2rem;
    font-weight: bold;
  }
  .history-flex-row {
    padding-top: 5px;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border-bottom: 1px solid rgb(55, 120, 232);
    .history-flex-item {
      /* border-left: 1px solid rgb(55, 120, 232);
      padding-left: 10px; */
      margin-right: 10px;
      text-align: center;
      margin-bottom: 15px;
    }
    .item-1 {
      border-left: none;
      flex: 2;
    }
    .item-2 {
      flex: 3;
    }
    .item-3 {
      flex: 1;
    }
    .item-4 {
      flex: 1.5;
    }
    .item-5 {
      flex: 1.5;
    }
  }
`;
