"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),a=o(t),l=o(r);let u=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],c=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],s=(e,t)=>1===t?e%4==0?29:28:[3,5,8,10].includes(t)?30:31,p=e=>{let t=e.index-e.firstDayMonth,r=e.index%7,o=e.month-1,n=e.year;o<0&&(o=11,n--);let a=s(n,o),l=(t<0?a+t:t%e.numberOfDays)+1;return{date:l,day:r,dayStatus:t<0?-1:t>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,l).getTime(),dayString:d[r]}},m=(e,t)=>{let r=new Date(e,t).getDay(),o=s(e,t),n=[],a=null,l=0;for(let u=0;u<7;u++)for(let u=0;u<6;u++)a=p({index:l,numberOfDays:o,firstDayMonth:r,year:e,month:t}),n.push(a),l++;return n},f=e=>{if(null!=e&&""!==e){let t=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];t="0"===t.split("")[0]?t.split("")[1]:t;let r=e.split("/")[1];return r="0"===r.split("")[0]?r.split("")[1]:r,{currentDate:t,currentMonth:r,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},g=[{mode:"blue",backgroundColor:"#b1bbda70",color:"#2b489b",alowed:"#2b489b60"},{mode:"green",backgroundColor:"#b1dab770",color:"#164e22",alowed:"#164e2260"},{mode:"purple",backgroundColor:"#d5b1da70",color:"#441c64",alowed:"#441c6460"},{mode:"red",backgroundColor:"#dab1b170",color:"#9b2b2b",alowed:"#9b2b2b60"},{mode:"yellow",backgroundColor:"#eee1a570",color:"#865413",alowed:"#86541360"},{mode:"neutral",backgroundColor:"#c9c9c970",color:"#000000",alowed:"#00000060"}],b="\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n",h=l.default.div`
  height: 23px;
`,y=l.default.div`
  margin: 1.2px;
`,w=l.default.span`
  ${b}
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 26px;
  padding: 3px 4px;
  font-weight: 400;
  border: solid 1px transparent;
  font-size: 0.7rem;
  transition: 300ms ease-in-out;
  &:hover {
    border: solid 1px transparent;
    box-shadow: 2px 4px 4px rgba(24, 20, 58, 0.5);
    z-index: 1;
    cursor: pointer;
    color: ${({currentMode:e,currentColorHover:t,areDaysOutOfMonthAllowed:r,validDay:o})=>g.map((n=>{if(e===n.mode)return`${t&&t?r?0===o?t:n.allowed:t:r?0===o?n.color:n.allowed:n.color};`}))};
    background: ${({currentMode:e,currentBackgroundHover:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.backgroundColor};`}))};
  }
  ${({validDay:e,sundays:t,currentMode:r,currentBackground:o,currentColorNumbers:n,currentColorNumberSelected:a,currentNumberBackgroundSelected:l,currentNumbersOutOfMonthColor:d,currentDay:i,areDaysOutOfMonthAllowed:c,areCurrentSundaysAllowed:s,daySelected:p})=>0!==e?g.map((e=>{if(r===e.mode)return`background: transparent !important;\n        color: ${c?d&&d?s?d:0===t?"#ddd":d:s?e.alowed:0===t?"#ddd":e.alowed:"#ddd"};\n        pointer-events: ${c?s?"inherit":0===t&&"none":"none"};\n        `})):i===u?g.map((e=>{if(r===e.mode)return`border: solid 1px ${n&&n?i===p?"transparent":n:i===p?"transparent":e.color}; color:${n&&n?i===p?a&&a?a:"white":n:i===p?a&&a?a:"white":e.color}; background: ${i===p?l&&l?l:e.color:"inherit"};`})):i===p?g.map((e=>{if(r===e.mode)return`background: ${l&&l?l:e.color}; color:${a&&a?a:"white"}`})):s?g.map((e=>{if(r===e.mode)return`color:${n&&n?n:e.color}`})):g.map((e=>{if(r===e.mode)return`color:${n&&n?0===t?"#ddd":n:0===t?"#ddd":e.color};background:${0===t?"transparent !important":"inherit"};pointer-events:${0===t?"none":"inherit"}`}))}
`,v=l.default.div`
  ${b}
  height: 30px;
  width: 100%;
  border-bottom: ${({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`solid 1px ${t&&t?t:r.color}`}))};
`,M=l.default.div`
  ${b}
  justify-content: center;
  width: 14.285%;
  height: 30px;
  line-height: 30px;
  font-weight: 700;
  color: #666;
  font-size: 9px;
`,k=l.default.div`
  ${b}
  height: 100%;
  width: 100%;
  margin-top: 3px;
`,x=l.default.div`
  width: 200px;
  min-height: 220px;
  background: #fff;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px 15px;
`,D=l.default.div`
  display: flex;
  font-weight: bold;
  font-size: 0.65rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,E=l.default.button`
  background: ${({isThisYear:e,currentMode:t,currentBackground:r})=>e?g.map((e=>{if(t===e.mode)return r&&r?r:e.backgroundColor})):"transparent"};
  font-size: ${({isThisYear:e})=>"0.7rem"};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0;
  padding: 0;
`,C=l.default.span`
  display: block;
  padding: 4px 4px 2px;
`,S=l.default.span`
  width: 100%;
  font-size: ${({isThisYear:e})=>!0===e&&"0.9rem"};
  position: relative;
  bottom: ${({isThisYear:e})=>e&&"2px"};
  color: ${({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return t&&t?t:r.color}))};
  margin: ${({isThisYear:e})=>e?"0 3px 0 0":"0"};
  display: flex;
  justify-content: center;
`,O=l.default.span`
  display: ${({isClosed:e})=>e?"none":"block"};
  cursor: pointer;
  position: relative;
  left: 2px;
  top: 5px;
`,N=l.default.div`
  float: left;
  width: 100%;
`,$=l.default.input`
  width: 100%;
  font-size: 0.8rem;
  border: none;
  font-weight: bold;
  transition: 300ms;
  color: ${({currentMode:e,currentColor:t})=>g.map((r=>{if(e===r.mode)return`${t&&t?t:r.color}`}))};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(24, 20, 58, 0.9);
  }
`,A=l.default.label`
  display: ${({isClosed:e})=>e?"block":"none"};
`,B=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M15 18l-6-6 6-6"}))},T=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M9 18l6-6-6-6"}))},z=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"}))},I=({size:e=16,color:t,currentMode:r})=>{const o=g.map((e=>r===e.mode&&e.color)).filter((e=>!1!==e))[0];return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.default.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}))},J=({onChangeInputValue:t,myInputRef:r,mode:o,language:a,valueCustom:l,arrowsBackgroundColor:d,numberBackgroundColorHover:s,numberBackgroundSelected:p,color:g,colorNumbers:b,colorNumbersOnHover:J,colorNumberSelected:Y,numbersOutOfMonthColor:P,areDaysOutOfMonthAllowed:j,areSundaysAllowed:L})=>{let H=new Date;e.useState(!1);const[F,R]=e.useState(H.getFullYear()),[U,K]=e.useState(H.getMonth()),[W,V]=e.useState(m(F,U)),[q,Q]=e.useState({timestamp:u,dayStatus:0,currentMonth:null}),[_,G]=e.useState(!1);e.useState();const[X,Z]=e.useState(),ee=e.useRef(null);e.useEffect((()=>{V(m(F,U))}),[F,U]),e.useEffect((()=>{let e=((e,t,r)=>{let o=new Date(e.timestamp),n=o.getMonth()+1,a=o.getDate();if(-1===e.dayStatus){let t=e.currentMonth,r=e.currentDate;n!==t?(n-=2,a!==r&&(a=r)):1===n?n=12:n-=1}1===e.dayStatus&&(n!==e.currentMonth?n+=2:12===n?n=1:n+=1);return((e,t,r,o,n)=>{switch(o){case"1":return(t<10?"0"+t:t)+"/"+(e<10?"0"+e:e)+"/"+r;case"2":return r+"/"+(e<10?"0"+e:e)+"/"+(t<10?"0"+t:t);default:return}})(n,a,o.getFullYear(),t)})(q,l);if(null===r||""===r)console.log("Error! The calendar is not linked to any input");else if(null===r.current)console.log("Error! The calendar is linked to an input but they are not a valid input");else if(void 0!==r.current.value||null!==r.current.value||""!==r.current.value){r.current.value=e;const{currentDate:t,currentMonth:o,currentYear:n}=null!==f(e)&&f(e),a=new Date(n,o-1,t).getTime();Z(a),1===q.dayStatus?(K(U+1),11===U&&(K(0),R(F+1))):-1===q.dayStatus&&(K(U-1),0===U&&(K(11),R(F-1)))}else console.log("there is no value yet")}),[q]),e.useEffect((()=>{_&&ee.current.focus()}),[_]),e.useEffect((()=>{if(null!==t){const{currentDate:e,currentMonth:r,currentYear:o}=null!==f(t)&&f(t);let n=void 0!==r&&r-1;-1===n&&(n=11),K(parseInt(n,10)),R(parseInt(o,10));let a=new Date(o,r-1,e).getTime();Z(a),Q({timestamp:a,dayStatus:0,currentMonth:r-1,currentDate:e})}}),[t]);const te=e=>{null===r?console.log("there is no input linked with the calendar component"):(r.current.focus(),Q({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date}))};return n.default.createElement("div",null,n.default.createElement(x,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(E,{isThisYear:!0,currentMode:o,currentBackground:d,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),R(F-1))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),R(F-1)}},n.default.createElement(C,null,n.default.createElement(z,{color:g,currentMode:o})))),n.default.createElement(E,{isThisYear:!1,currentMode:o,currentBackground:d,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U-1),0===U&&K(11))}},n.default.createElement("div",{className:"mdpchb-inner",onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U-1),0===U&&K(11)}},n.default.createElement(C,null,n.default.createElement(B,{color:g,currentMode:o})))),n.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},n.default.createElement(S,{isThisYear:!0,currentMode:o,currentColor:g},n.default.createElement(O,{onClick:e=>(e=>{e.stopPropagation(),!_&&G(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!_&&G(!0))},isClosed:_,tabIndex:0},F),n.default.createElement(A,{style:{width:"100%"},isClosed:_,onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===ee.current){e.stopPropagation(),e.preventDefault();let t=ee.current.value;""===t||void 0===t||R(parseInt(t,10)),G(!1)}}},n.default.createElement($,{ref:ee,type:"text",name:"year",minLength:4,maxLength:4,currentMode:o,currentColor:g,onBlur:()=>G(!1)}))),n.default.createElement(S,{isThisYear:!1,currentMode:o,currentColor:g},((e,t)=>{for(let r=0;r<i.length;r++)if(i[r].lang===t){let t=i[r].days;for(let r=0;r<t.length;r++)if(e===t.indexOf(t[r]))return t[r]}})(U,a))),n.default.createElement(E,{isThisYear:!1,currentMode:o,currentBackground:d,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U+1),11===U&&K(0))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U+1),11===U&&K(0)}},n.default.createElement(C,null,n.default.createElement(T,{color:g,currentMode:o})))),n.default.createElement(E,{isThisYear:!0,currentMode:o,currentBackground:d,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),R(F+1))}},n.default.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),R(F+1)}},n.default.createElement(C,null,n.default.createElement(I,{color:g,currentMode:o})))))),n.default.createElement(N,null,(()=>{let e=W.map(((e,t)=>n.default.createElement(h,{key:t},n.default.createElement(y,null,n.default.createElement(w,{validDay:e.dayStatus,currentDay:e.timestamp,sundays:e.day,currentMode:o,currentBackground:d,currentColorNumbers:b,currentColorHover:J,currentColorNumberSelected:Y,currentNumbersOutOfMonthColor:P,currentBackgroundHover:s,currentNumberBackgroundSelected:p,areDaysOutOfMonthAllowed:j,areCurrentSundaysAllowed:L,daySelected:X,tabIndex:0,onClick:t=>{t.stopPropagation(),t.preventDefault(),te(e)},onKeyDown:t=>{13===t.keyCode&&(t.stopPropagation(),t.preventDefault(),te(e))}},e.date)))));return n.default.createElement(h,null,n.default.createElement(v,{currentMode:o,currentColor:g},c.map((e=>e.lang===a&&e.days.map(((e,t)=>n.default.createElement(M,{key:t},e)))))),n.default.createElement(k,null,e))})())))};J.propTypes={onChangeInputValue:a.default.string,myInputRef:a.default.object,mode:a.default.string,language:a.default.string,valueCustom:a.default.string,arrowsBackgroundColor:a.default.string,numberBackgroundColorHover:a.default.string,numberBackgroundSelected:a.default.string,numbersOutOfMonthColor:a.default.string,color:a.default.string,colorNumbers:a.default.string,colorNumbersOnHover:a.default.string,colorNumberSelected:a.default.string,areDaysOutOfMonthAllowed:a.default.bool,areSundaysAllowed:a.default.bool},J.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",color:null,colorNumbers:null,colorNumberSelected:null,colorNumbersOnHover:null,numbersOutOfMonthColor:null,numberBackgroundColorHover:null,numberBackgroundSelected:null,arrowsBackgroundColor:null,areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0},exports.Calendar=J;
