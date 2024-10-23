import styled from "styled-components";

export const TranslateWrapper = styled.div`
  margin-top: 8px;
  position: absolute;
  right: 16px;

  #google_translate_element {
    select {
      padding: 8px;
      border-radius: 4px;
      background-color: #f0f0f0;
      color: #333;
      border: none;
      outline: none;
    }

    .goog-te-gadget {
      font-size: 0 !important;
      a {
        font-size: 0 !important;
      }

      img {
        display: none;
      }
    }
  }
`;
