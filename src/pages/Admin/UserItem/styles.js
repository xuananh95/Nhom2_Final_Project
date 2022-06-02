import styled from "styled-components";

export const SUserItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    .item-left {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      .profile-picture {
        border-radius: 50%;
        img {
          border-radius: 50%;
          border: 1px solid black;
        }
      }
    }
    .item-right {
      position: relative;
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .user-info-btn {
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
        button:hover {
          transform: scale(1.1);
        }
        .info-container {
          z-index: 1;
          position: absolute;
          left: 0%;
          max-width: 500px;
          transform: translateX(60%);
          background-color: #010414;
          color: white;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid gray;
          box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
            0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
            0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          font-size: 12px;
        }
      }
      .delete {
        cursor: pointer;
        .delete-btn:hover {
          color: red;
          transform: scale(1.1);
        }
      }
    }
  }
`;
