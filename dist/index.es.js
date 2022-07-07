import e,{useState as r,useRef as t,useEffect as o}from"react";import n from"prop-types";import l from"styled-components";let a=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],d=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],c=(e,r)=>1===r?e%4==0?29:28:[3,5,8,10].includes(r)?30:31,s=e=>{let r=e.index-e.firstDayMonth,t=e.index%7,o=e.month-1,n=e.year;o<0&&(o=11,n--);let l=c(n,o),a=(r<0?l+r:r%e.numberOfDays)+1;return{date:a,day:t,dayStatus:r<0?-1:r>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,a).getTime(),dayString:u[t]}},p=(e,r)=>{let t=new Date(e,r).getDay(),o=c(e,r),n=[],l=null,a=0;for(let u=0;u<7;u++)for(let u=0;u<6;u++)l=s({index:a,numberOfDays:o,firstDayMonth:t,year:e,month:r}),n.push(l),a++;return n},m=e=>{if(null!=e&&""!==e){let r=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];r="0"===r.split("")[0]?r.split("")[1]:r;let t=e.split("/")[1];return t="0"===t.split("")[0]?t.split("")[1]:t,{currentDate:r,currentMonth:t,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},g=[{mode:"blue",backgroundColor:"#b1bbda70",color:"#2b489b",alowed:"#2b489b60"},{mode:"green",backgroundColor:"#b1dab770",color:"#164e22",alowed:"#164e2260"},{mode:"purple",backgroundColor:"#d5b1da70",color:"#441c64",alowed:"#441c6460"},{mode:"red",backgroundColor:"#dab1b170",color:"#9b2b2b",alowed:"#9b2b2b60"},{mode:"yellow",backgroundColor:"#eee1a570",color:"#865413",alowed:"#86541360"},{mode:"neutral",backgroundColor:"#c9c9c970",color:"#000000",alowed:"#00000060"}],b="\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n",h=l.div`
  height: 23px;
`,y=l.div`
  margin: 1.2px;
`,f=l.span`
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
    color: ${({currentMode:e,currentColorHover:r,areDaysOutOfMonthAllowed:t,validDay:o})=>g.map((n=>{if(e===n.mode)return`${r&&r?t?0===o?r:n.allowed:r:t?0===o?n.color:n.allowed:n.color};`}))};
    background: ${({currentMode:e,currentBackgroundHover:r})=>g.map((t=>{if(e===t.mode)return`${r&&r?r:t.backgroundColor};`}))};
  }
  ${({validDay:e,sundays:r,currentMode:t,currentBackground:o,currentColorNumbers:n,currentColorNumberSelected:l,currentNumberBackgroundSelected:u,currentNumbersOutOfMonthColor:i,currentDay:d,areDaysOutOfMonthAllowed:c,areCurrentSundaysAllowed:s,daySelected:p})=>0!==e?g.map((e=>{if(t===e.mode)return`background: transparent !important;\n        color: ${c?i&&i?s?i:0===r?"#ddd":i:s?e.alowed:0===r?"#ddd":e.alowed:"#ddd"};\n        pointer-events: ${c?s?"inherit":0===r&&"none":"none"};\n        `})):d===a?g.map((e=>{if(t===e.mode)return`border: solid 1px ${n&&n?d===p?"transparent":n:d===p?"transparent":e.color}; color:${n&&n?d===p?l&&l?l:"white":n:d===p?l&&l?l:"white":e.color}; background: ${d===p?u&&u?u:e.color:"inherit"};`})):d===p?g.map((e=>{if(t===e.mode)return`background: ${u&&u?u:e.color}; color:${l&&l?l:"white"}`})):s?g.map((e=>{if(t===e.mode)return`color:${n&&n?n:e.color}`})):g.map((e=>{if(t===e.mode)return`color:${n&&n?0===r?"#ddd":n:0===r?"#ddd":e.color};background:${0===r?"transparent !important":"inherit"};pointer-events:${0===r?"none":"inherit"}`}))}
`,w=l.div`
  ${b}
  height: 30px;
  width: 100%;
  border-bottom: ${({currentMode:e,currentColor:r})=>g.map((t=>{if(e===t.mode)return`solid 1px ${r&&r?r:t.color}`}))};
`,v=l.div`
  ${b}
  justify-content: center;
  width: 14.285%;
  height: 30px;
  line-height: 30px;
  font-weight: 700;
  color: #666;
  font-size: 9px;
`,M=l.div`
  ${b}
  height: 100%;
  width: 100%;
  margin-top: 3px;
`,k=l.div`
  width: 200px;
  min-height: 220px;
  background: #fff;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px 15px;
`,x=l.div`
  display: flex;
  font-weight: bold;
  font-size: 0.65rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,D=l.button`
  background: ${({isThisYear:e,currentMode:r,currentBackground:t})=>e?g.map((e=>{if(r===e.mode)return t&&t?t:e.backgroundColor})):"transparent"};
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
`,E=l.span`
  display: block;
  padding: 4px 4px 2px;
`,C=l.span`
  width: 100%;
  font-size: ${({isThisYear:e})=>!0===e&&"0.9rem"};
  position: relative;
  bottom: ${({isThisYear:e})=>e&&"2px"};
  color: ${({currentMode:e,currentColor:r})=>g.map((t=>{if(e===t.mode)return r&&r?r:t.color}))};
  margin: ${({isThisYear:e})=>e?"0 3px 0 0":"0"};
  display: flex;
  justify-content: center;
`,S=l.span`
  display: ${({isClosed:e})=>e?"none":"block"};
  cursor: pointer;
  position: relative;
  left: 2px;
  top: 5px;
`,O=l.div`
  float: left;
  width: 100%;
`,N=l.input`
  width: 100%;
  font-size: 0.8rem;
  border: none;
  font-weight: bold;
  transition: 300ms;
  color: ${({currentMode:e,currentColor:r})=>g.map((t=>{if(e===t.mode)return`${r&&r?r:t.color}`}))};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(24, 20, 58, 0.9);
  }
`,$=l.label`
  display: ${({isClosed:e})=>e?"block":"none"};
`,A=({size:r=16,color:t,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M15 18l-6-6 6-6"}))},B=({size:r=16,color:t,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M9 18l6-6-6-6"}))},T=({size:r=16,color:t,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"}))},z=({size:r=16,color:t,currentMode:o})=>{const n=g.map((e=>o===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t&&t?t:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}))},I=({onChangeInputValue:n,myInputRef:l,mode:u,language:c,valueCustom:s,arrowsBackgroundColor:g,numberBackgroundColorHover:b,numberBackgroundSelected:I,color:J,colorNumbers:Y,colorNumbersOnHover:P,colorNumberSelected:L,numbersOutOfMonthColor:H,areDaysOutOfMonthAllowed:j,areSundaysAllowed:F})=>{let R=new Date;r(!1);const[U,K]=r(R.getFullYear()),[W,V]=r(R.getMonth()),[Q,G]=r(p(U,W)),[X,q]=r({timestamp:a,dayStatus:0,currentMonth:null}),[Z,_]=r(!1);r();const[ee,re]=r(),te=t(null);o((()=>{G(p(U,W))}),[U,W]),o((()=>{let e=((e,r,t)=>{let o=new Date(e.timestamp),n=o.getMonth()+1,l=o.getDate();if(-1===e.dayStatus){let r=e.currentMonth,t=e.currentDate;n!==r?(n-=2,l!==t&&(l=t)):1===n?n=12:n-=1}1===e.dayStatus&&(n!==e.currentMonth?n+=2:12===n?n=1:n+=1);return((e,r,t,o,n)=>{switch(o){case"1":return(r<10?"0"+r:r)+"/"+(e<10?"0"+e:e)+"/"+t;case"2":return t+"/"+(e<10?"0"+e:e)+"/"+(r<10?"0"+r:r);default:return}})(n,l,o.getFullYear(),r)})(X,s);if(null===l||""===l)console.log("Error! The calendar is not linked to any input");else if(null===l.current)console.log("Error! The calendar is linked to an input but they are not a valid input");else if(void 0!==l.current.value||null!==l.current.value||""!==l.current.value){l.current.value=e;const{currentDate:r,currentMonth:t,currentYear:o}=null!==m(e)&&m(e),n=new Date(o,t-1,r).getTime();re(n),1===X.dayStatus?(V(W+1),11===W&&(V(0),K(U+1))):-1===X.dayStatus&&(V(W-1),0===W&&(V(11),K(U-1)))}else console.log("there is no value yet")}),[X]),o((()=>{Z&&te.current.focus()}),[Z]),o((()=>{if(null!==n){const{currentDate:e,currentMonth:r,currentYear:t}=null!==m(n)&&m(n);let o=void 0!==r&&r-1;-1===o&&(o=11),V(parseInt(o,10)),K(parseInt(t,10));let l=new Date(t,r-1,e).getTime();re(l),q({timestamp:l,dayStatus:0,currentMonth:r-1,currentDate:e})}}),[n]);const oe=e=>{null===l?console.log("there is no input linked with the calendar component"):(l.current.focus(),q({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date}))};return e.createElement("div",null,e.createElement(k,null,e.createElement("div",null,e.createElement(x,null,e.createElement(D,{isThisYear:!0,currentMode:u,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U-1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U-1)}},e.createElement(E,null,e.createElement(T,{color:J,currentMode:u})))),e.createElement(D,{isThisYear:!1,currentMode:u,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),V(W-1),0===W&&V(11))}},e.createElement("div",{className:"mdpchb-inner",onClick:e=>{e.preventDefault(),e.stopPropagation(),V(W-1),0===W&&V(11)}},e.createElement(E,null,e.createElement(A,{color:J,currentMode:u})))),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},e.createElement(C,{isThisYear:!0,currentMode:u,currentColor:J},e.createElement(S,{onClick:e=>(e=>{e.stopPropagation(),!Z&&_(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!Z&&_(!0))},isClosed:Z,tabIndex:0},U),e.createElement($,{style:{width:"100%"},isClosed:Z,onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===te.current){e.stopPropagation(),e.preventDefault();let r=te.current.value;""===r||void 0===r||K(parseInt(r,10)),_(!1)}}},e.createElement(N,{ref:te,type:"text",name:"year",minLength:4,maxLength:4,currentMode:u,currentColor:J,onBlur:()=>_(!1)}))),e.createElement(C,{isThisYear:!1,currentMode:u,currentColor:J},((e,r)=>{for(let t=0;t<i.length;t++)if(i[t].lang===r){let r=i[t].days;for(let t=0;t<r.length;t++)if(e===r.indexOf(r[t]))return r[t]}})(W,c))),e.createElement(D,{isThisYear:!1,currentMode:u,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),V(W+1),11===W&&V(0))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),V(W+1),11===W&&V(0)}},e.createElement(E,null,e.createElement(B,{color:J,currentMode:u})))),e.createElement(D,{isThisYear:!0,currentMode:u,currentBackground:g,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U+1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U+1)}},e.createElement(E,null,e.createElement(z,{color:J,currentMode:u})))))),e.createElement(O,null,(()=>{let r=Q.map(((r,t)=>e.createElement(h,{key:t},e.createElement(y,null,e.createElement(f,{validDay:r.dayStatus,currentDay:r.timestamp,sundays:r.day,currentMode:u,currentBackground:g,currentColorNumbers:Y,currentColorHover:P,currentColorNumberSelected:L,currentNumbersOutOfMonthColor:H,currentBackgroundHover:b,currentNumberBackgroundSelected:I,areDaysOutOfMonthAllowed:j,areCurrentSundaysAllowed:F,daySelected:ee,tabIndex:0,onClick:e=>{e.stopPropagation(),e.preventDefault(),oe(r)},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),oe(r))}},r.date)))));return e.createElement(h,null,e.createElement(w,{currentMode:u,currentColor:J},d.map((r=>r.lang===c&&r.days.map(((r,t)=>e.createElement(v,{key:t},r)))))),e.createElement(M,null,r))})())))};I.propTypes={onChangeInputValue:n.string,myInputRef:n.object,mode:n.string,language:n.string,valueCustom:n.string,arrowsBackgroundColor:n.string,numberBackgroundColorHover:n.string,numberBackgroundSelected:n.string,numbersOutOfMonthColor:n.string,color:n.string,colorNumbers:n.string,colorNumbersOnHover:n.string,colorNumberSelected:n.string,areDaysOutOfMonthAllowed:n.bool,areSundaysAllowed:n.bool},I.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",color:null,colorNumbers:null,colorNumberSelected:null,colorNumbersOnHover:null,numbersOutOfMonthColor:null,numberBackgroundColorHover:null,numberBackgroundSelected:null,arrowsBackgroundColor:null,areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0};export{I as Calendar};
