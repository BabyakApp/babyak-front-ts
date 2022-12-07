import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  button{
    width: 341px;
    height: 120px;
    flex-grow: 0;
    margin: 0 6px 0 0;
    padding: 7px 10px 8px 10.7px;
    border-radius: 13px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
  };
  
  .infoTitle{
    width: 62px;
    height: 20px;
    margin: 14px 213px 2px 3px;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #151515;
  }
  .infoContent{
    width: 343px;
    height: 100px;
    margin: 2px 16px 81px;
    font-family: NotoSansKR;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  .infoOption{
    flex-grow: 0;
    margin: 45px 5px 0 1px;
    font-family: NotoSansKR;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

`;

export default GlobalStyles;