// import React from "react";
// import styled from "styled-components";
// import { todayTimestamp } from "./tools_functions";

// export const modeType = [
//   {
//     mode: "blue",
//     backgroundColor: "#b1bbda70",
//     color: "#2b489b",
//     alowed: "#2b489b60",
//   },
//   {
//     mode: "green",
//     backgroundColor: "#b1dab770",
//     color: "#164e22",
//     alowed: "#164e2260",
//   },
//   {
//     mode: "purple",
//     backgroundColor: "#d5b1da70",
//     color: "#441c64",
//     alowed: "#441c6460",
//   },
//   {
//     mode: "red",
//     backgroundColor: "#dab1b170",
//     color: "#9b2b2b",
//     alowed: "#9b2b2b60",
//   },
//   {
//     mode: "yellow",
//     backgroundColor: "#eee1a570",
//     color: "#865413",
//     alowed: "#86541360",
//   },
//   {
//     mode: "neutral",
//     backgroundColor: "#c9c9c970",
//     color: "#000000",
//     alowed: "#00000060",
//   },
// ];

// //*CSS
// const CONTAINER_PATTERN = `
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
// `;

// //*Styled

// export const StyledCalendarContainer = styled.div`
//   height: 23px;
// `;
// export const StyledCalendarDaysContainer = styled.div`
//   margin: 1.2px;
// `;
// export const StyledCalendarDays = styled.span`
//   ${CONTAINER_PATTERN}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-width: 26px;
//   padding: 3px 4px;
//   font-weight: 400;
//   border: solid 1px transparent;
//   font-size: 0.7rem;
//   transition: 300ms ease-in-out;
//   &:hover {
//     border: solid 1px transparent;
//     box-shadow: 2px 4px 4px rgba(24, 20, 58, 0.5);
//     z-index: 1;
//     cursor: pointer;
//     color: ${({
//       currentMode,
//       currentColorHover,
//       areDaysOutOfMonthAllowed,
//       validDay,
//     }) =>
//       modeType.map((elt) => {
//         if (currentMode === elt.mode) {
//           return `${
//             currentColorHover && currentColorHover
//               ? areDaysOutOfMonthAllowed
//                 ? validDay === 0
//                   ? currentColorHover
//                   : elt.allowed
//                 : currentColorHover
//               : areDaysOutOfMonthAllowed
//               ? validDay === 0
//                 ? elt.color
//                 : elt.allowed
//               : elt.color
//           };`;
//         }
//       })};
//     background: ${({ currentMode, currentBackgroundHover }) =>
//       modeType.map((elt) => {
//         if (currentMode === elt.mode) {
//           return `${
//             currentBackgroundHover && currentBackgroundHover
//               ? currentBackgroundHover
//               : elt.backgroundColor
//           };`;
//         }
//       })};
//   }
//   ${({
//     validDay,
//     sundays,
//     currentMode,
//     currentBackground,
//     currentColorNumbers,
//     currentColorNumberSelected,
//     currentNumberBackgroundSelected,
//     currentNumbersOutOfMonthColor,
//     currentDay,
//     areDaysOutOfMonthAllowed,
//     areCurrentSundaysAllowed,
//     daySelected,
//   }) =>
//     validDay !== 0
//       ? modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return `background: transparent !important;
//         color: ${
//           areDaysOutOfMonthAllowed
//             ? currentNumbersOutOfMonthColor && currentNumbersOutOfMonthColor
//               ? areCurrentSundaysAllowed
//                 ? currentNumbersOutOfMonthColor
//                 : sundays === 0
//                 ? "#ddd"
//                 : currentNumbersOutOfMonthColor
//               : areCurrentSundaysAllowed
//               ? elt.alowed
//               : sundays === 0
//               ? "#ddd"
//               : elt.alowed
//             : "#ddd"
//         };
//         pointer-events: ${
//           areDaysOutOfMonthAllowed
//             ? areCurrentSundaysAllowed
//               ? "inherit"
//               : sundays === 0 && "none"
//             : "none"
//         };
//         `;
//           }
//         })
//       : currentDay === todayTimestamp
//       ? modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return `border: solid 1px ${
//               currentColorNumbers && currentColorNumbers
//                 ? currentDay === daySelected
//                   ? "transparent"
//                   : currentColorNumbers
//                 : currentDay === daySelected
//                 ? "transparent"
//                 : elt.color
//             }; color:${
//               currentColorNumbers && currentColorNumbers
//                 ? currentDay === daySelected
//                   ? currentColorNumberSelected && currentColorNumberSelected
//                     ? currentColorNumberSelected
//                     : "white"
//                   : currentColorNumbers
//                 : currentDay === daySelected
//                 ? currentColorNumberSelected && currentColorNumberSelected
//                   ? currentColorNumberSelected
//                   : "white"
//                 : elt.color
//             }; background: ${
//               currentDay === daySelected
//                 ? currentNumberBackgroundSelected &&
//                   currentNumberBackgroundSelected
//                   ? currentNumberBackgroundSelected
//                   : elt.color
//                 : "inherit"
//             };`;
//           }
//         })
//       : currentDay === daySelected
//       ? modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return `background: ${
//               currentNumberBackgroundSelected && currentNumberBackgroundSelected
//                 ? currentNumberBackgroundSelected
//                 : elt.color
//             }; color:${
//               currentColorNumberSelected && currentColorNumberSelected
//                 ? currentColorNumberSelected
//                 : "white"
//             }`;
//           }
//         })
//       : areCurrentSundaysAllowed
//       ? modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return `color:${
//               currentColorNumbers && currentColorNumbers
//                 ? currentColorNumbers
//                 : elt.color
//             }`;
//           }
//         })
//       : modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return `color:${
//               currentColorNumbers && currentColorNumbers
//                 ? sundays === 0
//                   ? "#ddd"
//                   : currentColorNumbers
//                 : sundays === 0
//                 ? "#ddd"
//                 : elt.color
//             };background:${
//               sundays === 0 ? "transparent !important" : "inherit"
//             };pointer-events:${sundays === 0 ? "none" : "inherit"}`;
//           }
//         })}
// `;
// export const StyledCalendarHeader = styled.div`
//   ${CONTAINER_PATTERN}
//   height: 30px;
//   width: 100%;
//   border-bottom: ${({ currentMode, currentColor }) =>
//     modeType.map((elt) => {
//       if (currentMode === elt.mode) {
//         return `solid 1px ${
//           currentColor && currentColor ? currentColor : elt.color
//         }`;
//       }
//     })};
// `;
// export const StyledCalendarName = styled.div`
//   ${CONTAINER_PATTERN}
//   justify-content: center;
//   width: 14.285%;
//   height: 30px;
//   line-height: 30px;
//   font-weight: 700;
//   color: #666;
//   font-size: 9px;
// `;
// export const StyledHeaderBody = styled.div`
//   ${CONTAINER_PATTERN}
//   height: 100%;
//   width: 100%;
//   margin-top: 3px;
// `;
// export const StyledCalendarDisplay = styled.div`
//   width: 200px;
//   min-height: 220px;
//   background: #fff;
//   box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   padding: 15px 15px;
// `;
// export const StyledYMContent = styled.div`
//   display: flex;
//   font-weight: bold;
//   font-size: 0.65rem;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;
// export const StyledYMButtonContainer = styled.button`
//   background: ${({ isThisYear, currentMode, currentBackground }) =>
//     !isThisYear
//       ? `transparent`
//       : modeType.map((elt) => {
//           if (currentMode === elt.mode) {
//             return currentBackground && currentBackground
//               ? currentBackground
//               : elt.backgroundColor;
//           }
//         })};
//   font-size: ${({ isThisYear }) => (!isThisYear ? `0.7rem` : `0.7rem`)};
//   border: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   float: left;
//   box-sizing: border-box;
//   cursor: pointer;
//   margin: 0;
//   padding: 0;
// `;
// export const StyledArrow = styled.span`
//   display: block;
//   padding: 4px 4px 2px;
// `;
// export const StyledYMDisplay = styled.span`
//   width: 100%;
//   font-size: ${({ isThisYear }) => isThisYear === true && `0.9rem`};
//   position: relative;
//   bottom: ${({ isThisYear }) => isThisYear && `2px`};
//   color: ${({ currentMode, currentColor }) =>
//     modeType.map((elt) => {
//       if (currentMode === elt.mode) {
//         return currentColor && currentColor ? currentColor : elt.color;
//       }
//     })};
//   margin: ${({ isThisYear }) => (!isThisYear ? `0` : `0 3px 0 0`)};
//   display: flex;
//   justify-content: center;
// `;
// export const StyledYDisplay = styled.span`
//   display: ${({ isClosed }) => (isClosed ? `none` : `block`)};
//   cursor: pointer;
//   position: relative;
//   left: 2px;
//   top: 5px;
// `;
// export const StyledCalendarBody = styled.div`
//   float: left;
//   width: 100%;
// `;
// export const StyledYInput = styled.input`
//   width: 100%;
//   font-size: 0.8rem;
//   border: none;
//   font-weight: bold;
//   transition: 300ms;
//   color: ${({ currentMode, currentColor }) =>
//     modeType.map((elt) => {
//       if (currentMode === elt.mode) {
//         return `${currentColor && currentColor ? currentColor : elt.color}`;
//       }
//     })};
//   &:focus {
//     outline: none;
//     box-shadow: 0px 0px 2px rgba(24, 20, 58, 0.9);
//   }
// `;
// export const StyledYLabel = styled.label`
//   display: ${({ isClosed }) => (isClosed ? `block` : `none`)};
// `;
