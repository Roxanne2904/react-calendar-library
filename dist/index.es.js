import e,{useState as r,useRef as o,useEffect as t}from"react";import n from"prop-types";import a from"styled-components";let l=Date.now()-Date.now()%864e5+1e3*(new Date).getTimezoneOffset()*60;const d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=[{lang:"en",days:["January","February","March","April","May","June","July","August","September","October","November","December"]},{lang:"fr",days:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septempbre","Octobre","Novembre","Decembre"]},{lang:"spa",days:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{lang:"por",days:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},{lang:"ger",days:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]}],c=[{lang:"en",days:["SUN","MON","TUE","WED","THU","FRI","SAT"]},{lang:"fr",days:["DIM","LUN","MAR","MER","JEU","VEN","SAM"]},{lang:"spa",days:["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]},{lang:"por",days:["DOM","SEG","TER","QUA","QUI","SEXT","SAB"]},{lang:"ger",days:["SON","MON","DIEN","MITT","DON","FRE","SAM"]}],u=(e,r)=>1===r?e%4==0?29:28:[3,5,8,10].includes(r)?30:31,s=e=>{let r=e.index-e.firstDayMonth,o=e.index%7,t=e.month-1,n=e.year;t<0&&(t=11,n--);let a=u(n,t),l=(r<0?a+r:r%e.numberOfDays)+1;return{date:l,day:o,dayStatus:r<0?-1:r>=e.numberOfDays?1:0,currentMonth:new Date(e.year,e.month).getMonth()+1,timestamp:new Date(e.year,e.month,l).getTime(),dayString:d[o]}},p=(e,r)=>{let o=new Date(e,r).getDay(),t=u(e,r),n=[],a=null,l=0;for(let d=0;d<7;d++)for(let d=0;d<6;d++)a=s({index:l,numberOfDays:t,firstDayMonth:o,year:e,month:r}),n.push(a),l++;return n},m=e=>{if(null!=e&&""!==e){let r=2===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2];r="0"===r.split("")[0]?r.split("")[1]:r;let o=e.split("/")[1];return o="0"===o.split("")[0]?o.split("")[1]:o,{currentDate:r,currentMonth:o,currentYear:4===e.split("/")[0].length?e.split("/")[0]:e.split("/")[2]}}return null},y=[{mode:"blue",backgroundColor:"#b1bbda70",color:"#2b489b",alowed:"#2b489b60"},{mode:"green",backgroundColor:"#b1dab770",color:"#164e22",alowed:"#164e2260"},{mode:"purple",backgroundColor:"#d5b1da70",color:"#441c64",alowed:"#441c6460"},{mode:"red",backgroundColor:"#dab1b170",color:"#9b2b2b",alowed:"#9b2b2b60"},{mode:"yellow",backgroundColor:"#eee1a570",color:"#865413",alowed:"#86541360"},{mode:"neutral",backgroundColor:"#c9c9c970",color:"#000000",alowed:"#00000060"}],g="\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n",b=a.div.withConfig({displayName:"styled__StyledCalendarContainer",componentId:"sc-12gez38-0"})(["height:23px;"]),h=a.div.withConfig({displayName:"styled__StyledCalendarDaysContainer",componentId:"sc-12gez38-1"})(["margin:1.2px;"]);a.span.withConfig({displayName:"styled__StyledCalendarDays",componentId:"sc-12gez38-2"})([""," display:flex;justify-content:center;align-items:center;min-width:26px;padding:3px 4px;font-weight:400;border:solid 1px transparent;font-size:0.7rem;transition:300ms ease-in-out;&:hover{border:solid 1px transparent;box-shadow:2px 4px 4px rgba(24,20,58,0.5);z-index:1;cursor:pointer;color:",";background:",";}",""],g,(({currentMode:e,currentColorHover:r,areDaysOutOfMonthAllowed:o,validDay:t})=>y.map((n=>{if(e===n.mode)return`${r&&r?o?0===t?r:n.allowed:r:o?0===t?n.color:n.allowed:n.color};`}))),(({currentMode:e,currentBackgroundHover:r})=>y.map((o=>{if(e===o.mode)return`${r&&r?r:o.backgroundColor};`}))),(({validDay:e,sundays:r,currentMode:o,currentBackground:t,currentColorNumbers:n,currentColorNumberSelected:a,currentNumberBackgroundSelected:d,currentNumbersOutOfMonthColor:i,currentDay:c,areDaysOutOfMonthAllowed:u,areCurrentSundaysAllowed:s,daySelected:p})=>0!==e?y.map((e=>{if(o===e.mode)return`background: transparent !important;\n        color: ${u?i&&i?s?i:0===r?"#ddd":i:s?e.alowed:0===r?"#ddd":e.alowed:"#ddd"};\n        pointer-events: ${u?s?"inherit":0===r&&"none":"none"};\n        `})):c===l?y.map((e=>{if(o===e.mode)return`border: solid 1px ${n&&n?c===p?"transparent":n:c===p?"transparent":e.color}; color:${n&&n?c===p?a&&a?a:"white":n:c===p?a&&a?a:"white":e.color}; background: ${c===p?d&&d?d:e.color:"inherit"};`})):c===p?y.map((e=>{if(o===e.mode)return`background: ${d&&d?d:e.color}; color:${a&&a?a:"white"}`})):s?y.map((e=>{if(o===e.mode)return`color:${n&&n?n:e.color}`})):y.map((e=>{if(o===e.mode)return`color:${n&&n?0===r?"#ddd":n:0===r?"#ddd":e.color};background:${0===r?"transparent !important":"inherit"};pointer-events:${0===r?"none":"inherit"}`}))));const f=a.div.withConfig({displayName:"styled__StyledCalendarHeader",componentId:"sc-12gez38-3"})([""," height:30px;width:100%;border-bottom:",";"],g,(({currentMode:e,currentColor:r})=>y.map((o=>{if(e===o.mode)return`solid 1px ${r&&r?r:o.color}`})))),w=a.div.withConfig({displayName:"styled__StyledCalendarName",componentId:"sc-12gez38-4"})([""," justify-content:center;width:14.285%;height:30px;line-height:30px;font-weight:700;color:#666;font-size:9px;"],g),x=a.div.withConfig({displayName:"styled__StyledHeaderBody",componentId:"sc-12gez38-5"})([""," height:100%;width:100%;margin-top:3px;"],g),v=a.div.withConfig({displayName:"styled__StyledCalendarDisplay",componentId:"sc-12gez38-6"})(["width:200px;min-height:220px;background:#fff;box-shadow:10px 10px 40px rgba(0,0,0,0.2);border-radius:10px;padding:15px 15px;"]),k=a.div.withConfig({displayName:"styled__StyledYMContent",componentId:"sc-12gez38-7"})(["display:flex;font-weight:bold;font-size:0.65rem;justify-content:space-between;align-items:center;width:100%;"]),C=a.button.withConfig({displayName:"styled__StyledYMButtonContainer",componentId:"sc-12gez38-8"})(["background:",";font-size:",";border:none;display:flex;justify-content:center;align-items:center;float:left;box-sizing:border-box;cursor:pointer;margin:0;padding:0;"],(({isThisYear:e,currentMode:r,currentBackground:o})=>e?y.map((e=>{if(r===e.mode)return o&&o?o:e.backgroundColor})):"transparent"),(({isThisYear:e})=>"0.7rem")),D=a.span.withConfig({displayName:"styled__StyledArrow",componentId:"sc-12gez38-9"})(["display:block;padding:4px 4px 2px;"]),M=a.span.withConfig({displayName:"styled__StyledYMDisplay",componentId:"sc-12gez38-10"})(["width:100%;font-size:",";position:relative;bottom:",";color:",";margin:",";display:flex;justify-content:center;"],(({isThisYear:e})=>!0===e&&"0.9rem"),(({isThisYear:e})=>e&&"2px"),(({currentMode:e,currentColor:r})=>y.map((o=>{if(e===o.mode)return r&&r?r:o.color}))),(({isThisYear:e})=>e?"0 3px 0 0":"0")),_=a.span.withConfig({displayName:"styled__StyledYDisplay",componentId:"sc-12gez38-11"})(["display:",";cursor:pointer;position:relative;left:2px;top:5px;"],(({isClosed:e})=>e?"none":"block")),E=a.div.withConfig({displayName:"styled__StyledCalendarBody",componentId:"sc-12gez38-12"})(["float:left;width:100%;"]),S=a.input.withConfig({displayName:"styled__StyledYInput",componentId:"sc-12gez38-13"})(["width:100%;font-size:0.8rem;border:none;font-weight:bold;transition:300ms;color:",";&:focus{outline:none;box-shadow:0px 0px 2px rgba(24,20,58,0.9);}"],(({currentMode:e,currentColor:r})=>y.map((o=>{if(e===o.mode)return`${r&&r?r:o.color}`})))),N=a.label.withConfig({displayName:"styled__StyledYLabel",componentId:"sc-12gez38-14"})(["display:",";"],(({isClosed:e})=>e?"block":"none")),z=({size:r=16,color:o,currentMode:t})=>{const n=y.map((e=>t===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o&&o?o:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M15 18l-6-6 6-6"}))},O=({size:r=16,color:o,currentMode:t})=>{const n=y.map((e=>t===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o&&o?o:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M9 18l6-6-6-6"}))},I=({size:r=16,color:o,currentMode:t})=>{const n=y.map((e=>t===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o&&o?o:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5"}))},$=({size:r=16,color:o,currentMode:t})=>{const n=y.map((e=>t===e.mode&&e.color)).filter((e=>!1!==e))[0];return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o&&o?o:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M13 17l5-5-5-5M6 17l5-5-5-5"}))};!function(e,r){void 0===r&&(r={});var o=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".datePickerIsOpened{display:block}.datePickerIsClosed{display:none}.day{align-items:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-wrap:wrap;font-size:.7rem;font-weight:400;justify-content:center;min-width:26px;padding:3px 4px;position:relative;transition:.3s ease-in-out}.day,.day:hover{border:1px solid transparent}.day:hover{box-shadow:2px 4px 4px rgba(24,20,58,.5);cursor:pointer;z-index:1}.day_in--red{color:#9b2b2b}.day_in--green{color:#164e22}.day_in--purple{color:#441c64}.day_in--yellow{color:#865413}.day_in--blue{color:#2b489b}.day_in--neutral{color:#000}.currentDay--red:hover,.day_in--red:hover{background-color:#dab1b170;color:#9b2b2b}.currentDay--green:hover,.day_in--green:hover{background-color:#b1dab770;color:#164e22}.currentDay--purple:hover,.day_in--purple:hover{background-color:#d5b1da70;color:#441c64}.currentDay--yellow:hover,.day_in--yellow:hover{background-color:#eee1a570;color:#865413}.currentDay--blue:hover,.day_in--blue:hover{background-color:#b1bbda70;color:#2b489b}.currentDay--neutral:hover,.day_in--neutral:hover{background-color:#c9c9c970;color:#000}.day_out{background:transparent!important;color:#ddd;pointer-events:none}.day_out--red{color:#9b2b2b60}.day_out--green{color:#164e2260}.day_out--purple{color:#441c6460}.day_out--yellow{color:#86541360}.day_out--blue{color:#2b489b60}.day_out--neutral{color:#00000060}.currentDay--red{border:1px solid #9b2b2b;color:#9b2b2b}.currentDay--green{border:1px solid #164e22;color:#164e22}.currentDay--purple{border:1px solid #441c64;color:#441c64}.currentDay--yellow{border:1px solid #865413;color:#865413}.currentDay--blue{border:1px solid #2b489b;color:#2b489b}.currentDay--neutral{border:1px solid #000;color:#000}.day_selected--red{background-color:#9b2b2b;color:#fff}.day_selected--green{background-color:#164e22;color:#fff}.day_selected--purple{background-color:#441c64;color:#fff}.day_selected--yellow{background-color:#865413;color:#fff}.day_selected--blue{background-color:#2b489b;color:#fff}.day_selected--neutral{background-color:#000;color:#fff}.day_selected--neutral--custom{background:green;color:#ff0}");const T=({onChangeInputValue:n,myInputRef:a,mode:d,language:u,valueCustom:s,arrowsBackgroundColor:y,numberBackgroundColorHover:g,numberBackgroundSelected:T,color:A,colorNumbers:B,colorNumbersOnHover:Y,colorNumberSelected:J,numbersOutOfMonthColor:P,areDaysOutOfMonthAllowed:L,areSundaysAllowed:j})=>{let H=new Date;r(!1);const[F,R]=r(H.getFullYear()),[U,K]=r(H.getMonth()),[W,V]=r(p(F,U)),[Q,G]=r({timestamp:l,dayStatus:0,currentMonth:null}),[X,q]=r(!1);r();const[Z,ee]=r(),re=o(null);t((()=>{V(p(F,U))}),[F,U]),t((()=>{let e=((e,r,o)=>{let t=new Date(e.timestamp),n=t.getMonth()+1,a=t.getDate();if(-1===e.dayStatus){let r=e.currentMonth,o=e.currentDate;n!==r?(n-=2,a!==o&&(a=o)):1===n?n=12:n-=1}1===e.dayStatus&&(n!==e.currentMonth?n+=2:12===n?n=1:n+=1);return((e,r,o,t,n)=>{switch(t){case"1":return(r<10?"0"+r:r)+"/"+(e<10?"0"+e:e)+"/"+o;case"2":return o+"/"+(e<10?"0"+e:e)+"/"+(r<10?"0"+r:r);default:return}})(n,a,t.getFullYear(),r)})(Q,s);if(null===a||""===a)console.log("Error! The calendar is not linked to any input");else if(null===a.current)console.log("Error! The calendar is linked to an input but they are not a valid input");else if(void 0!==a.current.value||null!==a.current.value||""!==a.current.value){a.current.value=e;const{currentDate:r,currentMonth:o,currentYear:t}=null!==m(e)&&m(e),n=new Date(t,o-1,r).getTime();ee(n),1===Q.dayStatus?(K(U+1),11===U&&(K(0),R(F+1))):-1===Q.dayStatus&&(K(U-1),0===U&&(K(11),R(F-1)))}else console.log("there is no value yet")}),[Q]),t((()=>{X&&re.current.focus()}),[X]),t((()=>{if(null!==n){const{currentDate:e,currentMonth:r,currentYear:o}=null!==m(n)&&m(n);let t=void 0!==r&&r-1;-1===t&&(t=11),K(parseInt(t,10)),R(parseInt(o,10));let a=new Date(o,r-1,e).getTime();ee(a),G({timestamp:a,dayStatus:0,currentMonth:r-1,currentDate:e})}}),[n]);const oe=e=>{null===a?console.log("there is no input linked with the calendar component"):(a.current.focus(),G({timestamp:e.timestamp,dayStatus:e.dayStatus,currentMonth:e.currentMonth,currentDate:e.date}))};return e.createElement("div",null,e.createElement(v,null,e.createElement("div",null,e.createElement(k,null,e.createElement(C,{isThisYear:!0,currentMode:d,currentBackground:y,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),R(F-1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),R(F-1)}},e.createElement(D,null,e.createElement(I,{color:A,currentMode:d})))),e.createElement(C,{isThisYear:!1,currentMode:d,currentBackground:y,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U-1),0===U&&K(11))}},e.createElement("div",{className:"mdpchb-inner",onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U-1),0===U&&K(11)}},e.createElement(D,null,e.createElement(z,{color:A,currentMode:d})))),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"14%"}},e.createElement(M,{isThisYear:!0,currentMode:d,currentColor:A},e.createElement(_,{onClick:e=>(e=>{e.stopPropagation(),!X&&q(!0)})(e),onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),!X&&q(!0))},isClosed:X,tabIndex:0},F),e.createElement(N,{style:{width:"100%"},isClosed:X,onKeyDown:e=>{if(13===e.keyCode&&document.activeElement===re.current){e.stopPropagation(),e.preventDefault();let r=re.current.value;""===r||void 0===r||R(parseInt(r,10)),q(!1)}}},e.createElement(S,{ref:re,type:"text",name:"year",minLength:4,maxLength:4,currentMode:d,currentColor:A,onBlur:()=>q(!1)}))),e.createElement(M,{isThisYear:!1,currentMode:d,currentColor:A},((e,r)=>{for(let o=0;o<i.length;o++)if(i[o].lang===r){let r=i[o].days;for(let o=0;o<r.length;o++)if(e===r.indexOf(r[o]))return r[o]}})(U,u))),e.createElement(C,{isThisYear:!1,currentMode:d,currentBackground:y,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),K(U+1),11===U&&K(0))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),K(U+1),11===U&&K(0)}},e.createElement(D,null,e.createElement(O,{color:A,currentMode:d})))),e.createElement(C,{isThisYear:!0,currentMode:d,currentBackground:y,onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),R(F+1))}},e.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),R(F+1)}},e.createElement(D,null,e.createElement($,{color:A,currentMode:d})))))),e.createElement(E,null,(()=>{let r=W.map(((r,o)=>e.createElement(b,{key:o},e.createElement(h,null,e.createElement("span",{className:"day "+(0!==r.dayStatus?(L?0===r.day?j?`day_out--${d} day_out--${d}--custom`:"day_out":`day_out--${d} day_out--${d}--custom`:"day_out")+" ":0===r.day?j?r.timestamp===l?r.timestamp===Z?`day_selected--${d} day_selected--${d}--custom`:`currentDay--${d} currentDay--${d}--custom`:r.timestamp===Z?`day_selected--${d} day_selected--${d}--custom`:`day_in--${d} day_in--${d}--custom`:"day_out":r.timestamp===l?r.timestamp===Z?`day_selected--${d} day_selected--${d}--custom`:`currentDay--${d} currentDay--${d}--custom`:r.timestamp===Z?`day_selected--${d} day_selected--${d}--custom`:`day_in--${d} day_in--${d}--custom`),tabIndex:0,onClick:e=>{e.stopPropagation(),e.preventDefault(),oe(r)},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),e.preventDefault(),oe(r))}},r.date)))));return e.createElement(b,null,e.createElement(f,{currentMode:d,currentColor:A},c.map((r=>r.lang===u&&r.days.map(((r,o)=>e.createElement(w,{key:o},r)))))),e.createElement(x,null,r))})())))};T.propTypes={onChangeInputValue:n.string,myInputRef:n.object,mode:n.string,language:n.string,valueCustom:n.string,arrowsBackgroundColor:n.string,numberBackgroundColorHover:n.string,numberBackgroundSelected:n.string,numbersOutOfMonthColor:n.string,color:n.string,colorNumbers:n.string,colorNumbersOnHover:n.string,colorNumberSelected:n.string,areDaysOutOfMonthAllowed:n.bool,areSundaysAllowed:n.bool},T.defaultProps={onChangeInputValue:null,myInputRef:null,mode:"neutral",language:"en",valueCustom:"1",color:null,colorNumbers:null,colorNumberSelected:null,colorNumbersOnHover:null,numbersOutOfMonthColor:null,numberBackgroundColorHover:null,numberBackgroundSelected:null,arrowsBackgroundColor:null,areDaysOutOfMonthAllowed:!1,areSundaysAllowed:!0};export{T as Calendar};
