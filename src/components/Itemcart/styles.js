import styled from "styled-components";

export const SItemCart = styled.div`
  background-color: rgba(9, 11, 16, 0.8);
  min-width: 800px;
  max-width: 1000px;
  padding: 10px 20px;
  margin: 10px 0;
  margin-top: 35px;
  font-size: 23px;
  border: 1px solid rgb(55, 120, 232);
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  justify-content: left;
  .left-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-right: 30px;
    img {
      /* width: 40%; */
      height: auto;
      border-radius: 8px;
      /* padding-left: 40px; */
    }
    .infob {
      /* margin-left: 20px; */
      .name {
        color: orange;
        text-align: center;
      }
      .price {
        color: green;
        margin-top: 10px;
      }
    }
  }
  .right-cart {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    align-items: left;
    .seats-number {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .seats {
        padding-right: 20px;
      }
      .count {
        display: flex;
        flex-direction: row;
        align-items: center;
        button {
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: none;
          color: white;
          border-radius: 12px;
          &.decrease {
            background-color: gray;
            &:hover {
              background-color: red;
            }
          }
          &.plus {
            background-color: gray;
            &:hover {
              background-color: green;
            }
          }
        }
        span {
          margin: 0 10px;
        }
      }
    }
    .price {
      /* padding:10px */
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
    .btn-group {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .btn {
        width: 100px;
        font-size: 20px;
        height: 40px;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        margin: 8px;
      }
      .cancel {
        background-color: gray;
        &:hover {
          transform: scale(1.2);
        }
      }
      .payment {
        color: white;
        background-color: black;
        border: 1px solid rgb(55, 120, 232);
        &:hover {
          background-color: #3495eb;
          transform: scale(1.2);
        }
      }
    }
  }
`;
