import styled, { createGlobalStyle } from 'styled-components';
import { MEDIA_QUERY, COLOR, OTHERS } from 'util/theme';

const ANTD_COLOR = {
  whiteColor: '#fff',
  borderColor: '#f0f0f0',
};

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  body {
    padding: 1rem;
  }

  /* common */
  .m-0 {
    margin: 0 !important;
  }
  .mb-12 {
    margin-bottom: 12px;
  }
  .mb-0 {
    margin-bottom: 0px;
  }
  .mb-8 {
    margin-bottom: 8px;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-12 {
    margin-top: 12px;
  }
  .mr-12 {
    margin-right: 12px;
  }
  .pl-0 {
    padding-left: 0px !important;
  }
  .p-0 {
    padding: 0px !important;
  }
  .walletconnect-modal__base {
    .walletconnect-modal__mobile__toggle a {
      color: ${COLOR.WALLECT_CONNECT_BLUE} !important;
    }
  }
  .ant-alert {
    border-radius: 5px;
  }
  .show-only-sm {
    display: none;
  }
  .hide-only-sm {
    display: initial;
  }

  /* layout */
  .ant-layout {
    background: ${COLOR.WHITE};
  }
  .ant-layout-header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    width: calc(100% - 32px);
    padding: 0 24px;
    height: 80px;
    .ant-menu {
      flex: 1;
      &.ant-menu-horizontal {
        border: none;
      }
      &.ant-menu-horizontal > .ant-menu-item::after,
      .ant-menu-horizontal > .ant-menu-submenu::after {
        border-bottom: none !important;
      }
      .ant-menu-item-selected {
        font-weight: bold;
      }
    }
  }

  /* tabs */
  .ant-tabs-card.ant-tabs-top {
    > .ant-tabs-nav .ant-tabs-tab {
      padding: 10px 16px;
      border-radius: 18px;
      background-color: transparent;
      border-color: transparent !important;
    }
    > .ant-tabs-nav .ant-tabs-tab-active {
      border-bottom-color: ${ANTD_COLOR.borderColor};
      background-color: ${COLOR.GREY_1};
      .ant-tabs-tab-btn {
        color: ${COLOR.BLACK};
      }
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: none;
  }

  /* layout */
  .site-layout {
    padding: 0 24px;
    margin-top: 56px;
  }
  .site-layout-background {
    padding: 24px 0;
    min-height: calc(100vh - 140px);
  }

  ${MEDIA_QUERY.mobileL} {
    .show-only-sm {
      display: initial;
    }
    .hide-only-sm {
      display: none;
    }
  }

  background-size: 100%;
  background-color: ${COLOR.WHITE};

  .site-layout {
    padding: 0 2rem;
  }
  .site-layout-background {
    min-height: calc(100vh - 8.5rem);
  }
  .ant-layout-footer {
    text-align: center;
  }
  .ant-result-title {
    color: ${COLOR.BLACK};
  }

    /* tabs */
    .ant-tabs-card.ant-tabs-top {
    > .ant-tabs-nav .ant-tabs-tab {
      border-radius: 18px;
      background-color: transparent;
      border-color: transparent !important;
    }
    > .ant-tabs-nav .ant-tabs-tab-active {
      border-bottom-color: ${ANTD_COLOR.borderColor};
      background-color: ${COLOR.GREY_1};
      .ant-tabs-tab-btn {
        color: ${COLOR.BLACK};
      }
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: none;
  }

  /* table */
  .ant-table {
    .ant-table-thead {
      > tr > th {
        font-weight: normal;
        padding: 12px 16px;
        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          background-color: transparent;
        }
      }
    }
    .ant-table-tbody > tr {
      > td {
        padding: 12px 16px;
        &.underline span {
          text-decoration: underline;
        }
        .ant-btn {
          &:first-child {
            padding-left: 0;
          }
        }
      }
      &:last-child {
        td {
          &:first-child {
            border-bottom-left-radius: ${OTHERS.borderRadius};
          }
          &:last-child {
            border-bottom-right-radius: ${OTHERS.borderRadius};
          }
        }
      }
    }
  }

  .ant-table:not(.ant-table-bordered) {
    .ant-table-cell:first-child {
      border-left: 1px solid ${COLOR.BORDER_GREY};
    }
    .ant-table-cell:last-child {
      border-right: 1px solid ${COLOR.BORDER_GREY};
    }
    .ant-table-thead {
      > tr > th {
        border-top: 1px solid ${COLOR.BORDER_GREY};
        border-bottom: 1px solid ${COLOR.BORDER_GREY};
      }
    }
  }


  /* form */
  .ant-form-item-label > label {
    font-weight: bold;
  }
  .custom-form-item-lock {
    margin-bottom: 4px;
  }

  /* button */
  .ant-btn-danger {
    text-shadow: none;
  }

  ${MEDIA_QUERY.tablet} {
    body {
      padding: 0rem;
    }
    .ant-layout-header {
      position: relative;
      flex-direction: column;
      height: auto;
      padding: 0;
    }
    .site-layout-background {
      padding: 1rem 0;
      min-height: calc(100vh - 20rem);
    }
    .site-layout {
      margin-top: 0;
    }
  }
`;

export default GlobalStyle;

export const Ellipsis = styled.span`
  max-width: 100px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MEDIA_QUERY.tablet} {
    max-width: 200px;
  }
`;
