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
  padding: 10px;
  .history-header {
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(55, 120, 232);
  }
  .history-flex-row {
    //padding-top: 5px;
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border-bottom: 1px solid rgb(23, 39, 61);
    background-color: rgb(15, 29, 47, 0.7);
    background-image: linear-gradient(to right, rgb(5, 10, 14, 0.8), rgb(23, 39, 61, 0.9));
    .history-flex-item {
      /* border-left: 1px solid rgb(55, 120, 232);
      padding-left: 10px; */
      margin-right: 10px;
      text-align: center;
      padding: 15px;
    }
    .item-1 {
      border-left: none;
      flex: 2;
    }
    .item-2 {
      flex: 3;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .item-2:hover {
      color: #1b77f0;
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
