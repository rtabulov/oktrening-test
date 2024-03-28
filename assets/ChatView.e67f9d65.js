import{d as O,m as q,a as I,n as S,u as nt}from"./index.81bcdcba.js";function u(n){const t=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&t==="[object Date]"?new n.constructor(+n):typeof n=="number"||t==="[object Number]"||typeof n=="string"||t==="[object String]"?new Date(n):new Date(NaN)}function p(n,t){return n instanceof Date?new n.constructor(t):new Date(t)}const rt=6048e5,ct=864e5,Y=43200,U=1440;let ut={};function T(){return ut}function W(n,t){var i,l,f,m,g,d,h,w;const e=T(),r=(w=(h=(m=(f=t==null?void 0:t.weekStartsOn)!=null?f:(l=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:l.weekStartsOn)!=null?m:e.weekStartsOn)!=null?h:(d=(g=e.locale)==null?void 0:g.options)==null?void 0:d.weekStartsOn)!=null?w:0,a=u(n),s=a.getDay(),o=(s<r?7:0)+s-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function N(n){return W(n,{weekStartsOn:1})}function at(n){const t=u(n),e=t.getFullYear(),r=p(n,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=N(r),s=p(n,0);s.setFullYear(e,0,4),s.setHours(0,0,0,0);const o=N(s);return t.getTime()>=a.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function z(n){const t=u(n);return t.setHours(0,0,0,0),t}function E(n){const t=u(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function dt(n,t){const e=z(n),r=z(t),a=+e-E(e),s=+r-E(r);return Math.round((a-s)/ct)}function lt(n){const t=at(n),e=p(n,0);return e.setFullYear(t,0,4),e.setHours(0,0,0,0),N(e)}function F(n,t){const e=u(n),r=u(t),a=e.getTime()-r.getTime();return a<0?-1:a>0?1:a}function ft(n){return p(n,Date.now())}function mt(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ht(n){if(!mt(n)&&typeof n!="number")return!1;const t=u(n);return!isNaN(Number(t))}function gt(n,t){const e=u(n),r=u(t),a=e.getFullYear()-r.getFullYear(),s=e.getMonth()-r.getMonth();return a*12+s}function wt(n){return t=>{const r=(n?Math[n]:Math.trunc)(t);return r===0?0:r}}function yt(n,t){return+u(n)-+u(t)}function bt(n){const t=u(n);return t.setHours(23,59,59,999),t}function _t(n){const t=u(n),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function vt(n){const t=u(n);return+bt(t)==+_t(t)}function xt(n,t){const e=u(n),r=u(t),a=F(e,r),s=Math.abs(gt(e,r));let o;if(s<1)o=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-a*s);let i=F(e,r)===-a;vt(u(n))&&s===1&&F(n,r)===1&&(i=!1),o=a*(s-Number(i))}return o===0?0:o}function Mt(n,t,e){const r=yt(n,t)/1e3;return wt(e==null?void 0:e.roundingMethod)(r)}function pt(n){const t=u(n),e=p(n,0);return e.setFullYear(t.getFullYear(),0,1),e.setHours(0,0,0,0),e}const Dt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},St=(n,t,e)=>{let r;const a=Dt[n];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};function X(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const Pt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ot={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ct={date:X({formats:Pt,defaultWidth:"full"}),time:X({formats:Ot,defaultWidth:"full"}),dateTime:X({formats:kt,defaultWidth:"full"})},Wt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Tt=(n,t,e,r)=>Wt[n];function k(n){return(t,e)=>{const r=e!=null&&e.context?String(e.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,i=e!=null&&e.width?String(e.width):o;a=n.formattingValues[i]||n.formattingValues[o]}else{const o=n.defaultWidth,i=e!=null&&e.width?String(e.width):n.defaultWidth;a=n.values[i]||n.values[o]}const s=n.argumentCallback?n.argumentCallback(t):t;return a[s]}}const Yt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ft={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Et={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},It={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$t=(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Xt={ordinalNumber:$t,era:k({values:Yt,defaultWidth:"wide"}),quarter:k({values:Ft,defaultWidth:"wide",argumentCallback:n=>n-1}),month:k({values:Nt,defaultWidth:"wide"}),day:k({values:Et,defaultWidth:"wide"}),dayPeriod:k({values:qt,defaultWidth:"wide",formattingValues:It,defaultFormattingWidth:"wide"})};function C(n){return(t,e={})=>{const r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=t.match(a);if(!s)return null;const o=s[0],i=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(i)?Ht(i,g=>g.test(o)):Rt(i,g=>g.test(o));let f;f=n.valueCallback?n.valueCallback(l):l,f=e.valueCallback?e.valueCallback(f):f;const m=t.slice(o.length);return{value:f,rest:m}}}function Rt(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function Ht(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function jt(n){return(t,e={})=>{const r=t.match(n.matchPattern);if(!r)return null;const a=r[0],s=t.match(n.parsePattern);if(!s)return null;let o=n.valueCallback?n.valueCallback(s[0]):s[0];o=e.valueCallback?e.valueCallback(o):o;const i=t.slice(a.length);return{value:o,rest:i}}}const Lt=/^(\d+)(th|st|nd|rd)?/i,At=/\d+/i,Qt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Bt={any:[/^b/i,/^(a|c)/i]},Gt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vt={any:[/1/i,/2/i,/3/i,/4/i]},Jt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ut={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Kt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Zt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},te={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ee={ordinalNumber:jt({matchPattern:Lt,parsePattern:At,valueCallback:n=>parseInt(n,10)}),era:C({matchPatterns:Qt,defaultMatchWidth:"wide",parsePatterns:Bt,defaultParseWidth:"any"}),quarter:C({matchPatterns:Gt,defaultMatchWidth:"wide",parsePatterns:Vt,defaultParseWidth:"any",valueCallback:n=>n+1}),month:C({matchPatterns:Jt,defaultMatchWidth:"wide",parsePatterns:Ut,defaultParseWidth:"any"}),day:C({matchPatterns:zt,defaultMatchWidth:"wide",parsePatterns:Kt,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:Zt,defaultMatchWidth:"any",parsePatterns:te,defaultParseWidth:"any"})},st={code:"en-US",formatDistance:St,formatLong:Ct,formatRelative:Tt,localize:Xt,match:ee,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ne(n){const t=u(n);return dt(t,pt(t))+1}function re(n){const t=u(n),e=+N(t)-+lt(t);return Math.round(e/rt)+1}function it(n,t){var m,g,d,h,w,x,y,v;const e=u(n),r=e.getFullYear(),a=T(),s=(v=(y=(h=(d=t==null?void 0:t.firstWeekContainsDate)!=null?d:(g=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)!=null?h:a.firstWeekContainsDate)!=null?y:(x=(w=a.locale)==null?void 0:w.options)==null?void 0:x.firstWeekContainsDate)!=null?v:1,o=p(n,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const i=W(o,t),l=p(n,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const f=W(l,t);return e.getTime()>=i.getTime()?r+1:e.getTime()>=f.getTime()?r:r-1}function ae(n,t){var i,l,f,m,g,d,h,w;const e=T(),r=(w=(h=(m=(f=t==null?void 0:t.firstWeekContainsDate)!=null?f:(l=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:l.firstWeekContainsDate)!=null?m:e.firstWeekContainsDate)!=null?h:(d=(g=e.locale)==null?void 0:g.options)==null?void 0:d.firstWeekContainsDate)!=null?w:1,a=it(n,t),s=p(n,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),W(s,t)}function se(n,t){const e=u(n),r=+W(e,t)-+ae(e,t);return Math.round(r/rt)+1}function c(n,t){const e=n<0?"-":"",r=Math.abs(n).toString().padStart(t,"0");return e+r}const M={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return c(t==="yy"?r%100:r,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):c(e+1,2)},d(n,t){return c(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return c(n.getHours()%12||12,t.length)},H(n,t){return c(n.getHours(),t.length)},m(n,t){return c(n.getMinutes(),t.length)},s(n,t){return c(n.getSeconds(),t.length)},S(n,t){const e=t.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,e-3));return c(a,t.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},K={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return e.ordinalNumber(a,{unit:"year"})}return M.y(n,t)},Y:function(n,t,e,r){const a=it(n,r),s=a>0?a:1-a;if(t==="YY"){const o=s%100;return c(o,2)}return t==="Yo"?e.ordinalNumber(s,{unit:"year"}):c(s,t.length)},R:function(n,t){const e=at(n);return c(e,t.length)},u:function(n,t){const e=n.getFullYear();return c(e,t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return c(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return M.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const a=se(n,r);return t==="wo"?e.ordinalNumber(a,{unit:"week"}):c(a,t.length)},I:function(n,t,e){const r=re(n);return t==="Io"?e.ordinalNumber(r,{unit:"week"}):c(r,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):M.d(n,t)},D:function(n,t,e){const r=ne(n);return t==="Do"?e.ordinalNumber(r,{unit:"dayOfYear"}):c(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return c(s,2);case"eo":return e.ordinalNumber(s,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});case"eeee":default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return c(s,t.length);case"co":return e.ordinalNumber(s,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});case"cccc":default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return c(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});case"iiii":default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const a=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let a;switch(r===12?a=P.noon:r===0?a=P.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let a;switch(r>=17?a=P.evening:r>=12?a=P.afternoon:r>=4?a=P.morning:a=P.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let r=n.getHours()%12;return r===0&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return M.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):M.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return t==="Ko"?e.ordinalNumber(r,{unit:"hour"}):c(r,t.length)},k:function(n,t,e){let r=n.getHours();return r===0&&(r=24),t==="ko"?e.ordinalNumber(r,{unit:"hour"}):c(r,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):M.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):M.s(n,t)},S:function(n,t){return M.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return tt(r);case"XXXX":case"XX":return D(r);case"XXXXX":case"XXX":default:return D(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return tt(r);case"xxxx":case"xx":return D(r);case"xxxxx":case"xxx":default:return D(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Z(r,":");case"OOOO":default:return"GMT"+D(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Z(r,":");case"zzzz":default:return"GMT"+D(r,":")}},t:function(n,t,e){const r=Math.trunc(n.getTime()/1e3);return c(r,t.length)},T:function(n,t,e){const r=n.getTime();return c(r,t.length)}};function Z(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),s=r%60;return s===0?e+String(a):e+String(a)+t+c(s,2)}function tt(n,t){return n%60===0?(n>0?"-":"+")+c(Math.abs(n)/60,2):D(n,t)}function D(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=c(Math.trunc(r/60),2),s=c(r%60,2);return e+a+t+s}const et=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ot=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},ie=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return et(n,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",et(r,t)).replace("{{time}}",ot(a,t))},oe={p:ot,P:ie},ce=/^D+$/,ue=/^Y+$/,de=["D","DD","YY","YYYY"];function le(n){return ce.test(n)}function fe(n){return ue.test(n)}function me(n,t,e){const r=he(n,t,e);if(console.warn(r),de.includes(n))throw new RangeError(r)}function he(n,t,e){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ge=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,we=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ye=/^'([^]*?)'?$/,be=/''/g,_e=/[a-zA-Z]/;function ve(n,t,e){var m,g,d,h,w,x,y,v,R,H,j,L,A,Q,B,G,V,J;const r=T(),a=(g=(m=e==null?void 0:e.locale)!=null?m:r.locale)!=null?g:st,s=(H=(R=(x=(w=e==null?void 0:e.firstWeekContainsDate)!=null?w:(h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)!=null?x:r.firstWeekContainsDate)!=null?R:(v=(y=r.locale)==null?void 0:y.options)==null?void 0:v.firstWeekContainsDate)!=null?H:1,o=(J=(V=(Q=(A=e==null?void 0:e.weekStartsOn)!=null?A:(L=(j=e==null?void 0:e.locale)==null?void 0:j.options)==null?void 0:L.weekStartsOn)!=null?Q:r.weekStartsOn)!=null?V:(G=(B=r.locale)==null?void 0:B.options)==null?void 0:G.weekStartsOn)!=null?J:0,i=u(n);if(!ht(i))throw new RangeError("Invalid time value");let l=t.match(we).map(_=>{const b=_[0];if(b==="p"||b==="P"){const $=oe[b];return $(_,a.formatLong)}return _}).join("").match(ge).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const b=_[0];if(b==="'")return{isToken:!1,value:xe(_)};if(K[b])return{isToken:!0,value:_};if(b.match(_e))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:_}});a.localize.preprocessor&&(l=a.localize.preprocessor(i,l));const f={firstWeekContainsDate:s,weekStartsOn:o,locale:a};return l.map(_=>{if(!_.isToken)return _.value;const b=_.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&fe(b)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&le(b))&&me(b,t,String(n));const $=K[b[0]];return $(i,b,a.localize,f)}).join("")}function xe(n){const t=n.match(ye);return t?t[1].replace(be,"'"):n}function Me(n,t,e){var w,x;const r=T(),a=(x=(w=e==null?void 0:e.locale)!=null?w:r.locale)!=null?x:st,s=2520,o=F(n,t);if(isNaN(o))throw new RangeError("Invalid time value");const i=Object.assign({},e,{addSuffix:e==null?void 0:e.addSuffix,comparison:o});let l,f;o>0?(l=u(t),f=u(n)):(l=u(n),f=u(t));const m=Mt(f,l),g=(E(f)-E(l))/1e3,d=Math.round((m-g)/60);let h;if(d<2)return e!=null&&e.includeSeconds?m<5?a.formatDistance("lessThanXSeconds",5,i):m<10?a.formatDistance("lessThanXSeconds",10,i):m<20?a.formatDistance("lessThanXSeconds",20,i):m<40?a.formatDistance("halfAMinute",0,i):m<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):d===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",d,i);if(d<45)return a.formatDistance("xMinutes",d,i);if(d<90)return a.formatDistance("aboutXHours",1,i);if(d<U){const y=Math.round(d/60);return a.formatDistance("aboutXHours",y,i)}else{if(d<s)return a.formatDistance("xDays",1,i);if(d<Y){const y=Math.round(d/U);return a.formatDistance("xDays",y,i)}else if(d<Y*2)return h=Math.round(d/Y),a.formatDistance("aboutXMonths",h,i)}if(h=xt(f,l),h<12){const y=Math.round(d/Y);return a.formatDistance("xMonths",y,i)}else{const y=h%12,v=Math.trunc(h/12);return y<3?a.formatDistance("aboutXYears",v,i):y<9?a.formatDistance("overXYears",v,i):a.formatDistance("almostXYears",v+1,i)}}function pe(n,t){return Me(n,ft(n),t)}const De=O({name:"ChatBar",props:{chat:{type:Object,required:!0},active:{type:Boolean,default:!1}},computed:{...q(I)},methods:{formatDistanceToNow:pe}});var Se=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"p-2 transition-colors hover:bg-slate-800",class:{"!bg-slate-700":t.active}},[e("RouterLink",{staticClass:"flex gap-4",attrs:{to:`/chats/${t.chat.slug}`}},[e("div",{staticClass:"h-12 w-12 shrink-0 overflow-hidden rounded-full"},[e("img",{attrs:{src:t.chat.avatar,alt:t.chat.name}})]),e("div",{staticClass:"flex min-w-0 grow flex-col"},[e("p",{staticClass:"flex items-center justify-between"},[e("span",{staticClass:"min-w-0 truncate font-medium"},[t._v(t._s(t.chat.name))]),t.chat.lastMessage?e("time",{staticClass:"text-sm text-slate-400",attrs:{datetime:t.chat.lastMessage.createdAt.toLocaleString()}},[t._v(" "+t._s(t.formatDistanceToNow(t.chat.lastMessage.createdAt))+" ")]):t._e()]),t.chat.lastMessage?e("p",{staticClass:"max-w-fit truncate text-sm text-slate-400"},[t._v(" "+t._s(t.chat.lastMessage.text)+" ")]):t._e()])])],1)},Pe=[],Oe=S(De,Se,Pe,!1,null,null,null,null);const ke=Oe.exports,Ce=O({name:"ChatSelect",props:{chatSlug:{type:String,default:null},chatId:{type:Number,default:null}},components:{ChatBar:ke},computed:{...q(I)}});var We=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"flex flex-col bg-slate-900"},t._l(t.chatsStore.chats,function(r){return e("ChatBar",{key:r.id,attrs:{chat:r,active:t.chatId===r.id}})}),1)},Te=[],Ye=S(Ce,We,Te,!1,null,null,null,null);const Fe=Ye.exports,Ne=O({name:"ChatMessageInput",data(){return{text:""}},emits:{submit(n){return n.length>=1}},methods:{onSubmit(){this.$emit("submit",this.text),this.text=""}}});var Ee=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("form",{staticClass:"bg-slate-900",on:{submit:function(r){return r.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"block w-full bg-slate-900 px-5 py-2 text-sm outline-none",attrs:{type:"text",placeholder:"Write a message...",minlength:"1",required:""},domProps:{value:t.text},on:{input:function(r){r.target.composing||(t.text=r.target.value)}}})])},qe=[],Ie=S(Ne,Ee,qe,!1,null,null,null,null);const $e=Ie.exports,Xe=O({name:"ChatMessageItem",props:{message:{type:Object,required:!0},isSender:{type:Boolean,default:!1}},methods:{formatTime(n){return ve(n,"HH:mm")}}});var Re=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"flex",class:{"justify-end":t.isSender}},[e("p",{staticClass:"inline-block max-w-96 rounded-full px-3 py-2",class:{"rounded-br-none bg-slate-700":t.isSender,"rounded-bl-none bg-slate-900":!t.isSender}},[t._v(" "+t._s(t.message.text)+" "),e("time",{staticClass:"inline-block translate-y-1.5 pl-2 text-xs text-slate-400",class:{"pr-0.5":!t.isSender},attrs:{datetime:t.message.createdAt.toLocaleString()}},[t._v(" "+t._s(t.formatTime(t.message.createdAt))+" ")])])])},He=[],je=S(Xe,Re,He,!1,null,null,null,null);const Le=je.exports,Ae=O({name:"ChatMessages",props:{messages:{type:Array,required:!0},chatId:{type:Number,required:!0}},components:{ChatMessageInput:$e,ChatMessageItem:Le},computed:{...q(I,nt)},methods:{onSubmit(n){this.chatsStore.sendMessage({text:n,to:this.chatId})}}});var Qe=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"flex h-full max-h-full min-h-0 grow flex-col"},[e("div",{staticClass:"flex max-h-full min-h-0 grow flex-col justify-end gap-1 overflow-y-auto p-2 text-sm"},t._l(t.messages,function(r){return e("ChatMessageItem",{key:r.id,attrs:{message:r,"is-sender":r.from===t.userStore.selectedUserId}})}),1),e("div",[e("ChatMessageInput",{on:{submit:t.onSubmit}})],1)])},Be=[],Ge=S(Ae,Qe,Be,!1,null,null,null,null);const Ve=Ge.exports,Je={};var Ue=function(){var t=this;return t._self._c,t._m(0)},ze=[function(){var n=this,t=n._self._c;return t("div",{staticClass:"flex h-full items-center justify-center"},[t("p",{staticClass:"mb-32 rounded-full bg-slate-800 px-4 py-1 text-sm font-medium"},[n._v(" Select a chat to start messaging ")])])}],Ke=S(Je,Ue,ze,!1,null,null,null,null);const Ze=Ke.exports,tn=O({name:"ChatView",props:{chatSlug:{type:String,default:null},chatId:{type:Number,default:null}},components:{ChatSelect:Fe,ChatMessages:Ve,ChatSelectPrompt:Ze},computed:{...q(nt,I),messages(){return this.userStore.selectedUserId?this.chatsStore.messages.filter(n=>{const t=[n.from,n.to];return t.includes(this.chatId)&&t.includes(this.userStore.selectedUserId)}):[]}},watch:{"userStore.selectedUserId":{immediate:!0,handler(n){n||this.$router.push("/")}}}});var en=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"container"},[e("div",{staticClass:"flex max-h-full min-h-0 gap-px"},[e("div",{staticClass:"w-80"},[e("ChatSelect",t._b({},"ChatSelect",t.$props,!1))],1),e("div",{staticClass:"max-h-full min-h-0 grow"},[t.chatId?e("ChatMessages",{attrs:{messages:t.messages,chatId:t.chatId}}):e("ChatSelectPrompt")],1)])])},nn=[],rn=S(tn,en,nn,!1,null,null,null,null);const sn=rn.exports;export{sn as default};
