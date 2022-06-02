import styled from "styled-components";

export const SUserHistory = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 2fr 2fr;
  .grid-item {
    border-left: 1px solid green;
  }
  .item-1 {
    border-left: none;
  }
`;