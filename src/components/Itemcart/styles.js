import styled from "styled-components";

export const SItemCart = styled.div`
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .left-cart {
    flex-grow:1;
    img {
      width: 40%;
      height: auto;
      border-radius: 8px;
      padding-left:40px;
    }
    align-items: center;
    .infob {
      margin-left: 56px;
      .name {
        color: orange;
      }
      .price {
        color: green;
        margin-top: 5px;
      }
    }
  }
  .right-cart {
    flex-grow: 3;  
    align-items: left;
    .seats-number{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .seats{
        padding-right:20px;
    }
    .count {
      margin-right: 70px;
      button {
        width: 20px;
        height: 20px;
        cursor: pointer;
        border: none;
        color: white;
        border-radius: 12px;
        &.decrease {
          background-color: black;
        }
        &.plus {
          background-color: gray;
        }
      }
      span {
        margin: 0 10px;
        color: gray;
      }
    }
    .delete {
      cursor: pointer;
    }
  }
  .price{
      padding:10px
  }
  .payment{
      margin: 50px;
      margin-left: 150px;
      width: 100px;
      font-size:20px;
        height: 40px;
        cursor: pointer;
        border: none;
        color: white;
      background-color: black;
      border 1px solid red;
      border-radius: 10px;
  }
}
`;
