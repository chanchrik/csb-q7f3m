(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,a){e.exports={mapModalWrapper:"RouteMap_mapModalWrapper__3TLAZ",mapModalBody:"RouteMap_mapModalBody__1G8fb",mapWrapper:"RouteMap_mapWrapper__lVdxo",mapCloseBtn:"RouteMap_mapCloseBtn__16ELu",actionsWrapper:"RouteMap_actionsWrapper__36EFL",addRouteToMapBtn:"RouteMap_addRouteToMapBtn__1WOWt"}},19:function(e,t,a){e.exports={navmenuwrapper:"LeftNav_navmenuwrapper__1wel_",active:"LeftNav_active__1cYt1"}},28:function(e,t){},30:function(e,t,a){e.exports={exportBtn:"ExportFile_exportBtn__9zdZn"}},38:function(e,t,a){},4:function(e,t,a){e.exports={itemWrapper:"RouteItem_itemWrapper__34iq8",nameText:"RouteItem_nameText__3qUjq",btn:"RouteItem_btn__1puGH",control:"RouteItem_control__2G0no",headerText:"RouteItem_headerText__1vj7Y",saveBtn:"RouteItem_saveBtn__hiacK",error:"RouteItem_error__2y7DD",errorClear:"RouteItem_errorClear__Y626M"}},6:function(e,t,a){e.exports={routeViewWrapper:"RouteView_routeViewWrapper__3EtoV",headerText:"RouteView_headerText__2p60d",descriptionText:"RouteView_descriptionText__FW58U",createBtn:"RouteView_createBtn__CcJB0",routesWrapper:"RouteView_routesWrapper__EQD4Y",stopWrapper:"RouteView_stopWrapper__IL2M9",displayFlex:"RouteView_displayFlex__2sNfM"}},73:function(e,t){},74:function(e,t){},75:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a(8),n=a.n(c),s=a(3),r=a(25),i=a(2),u={navItem:"Routes"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"updateNav"===t.type?Object(i.a)(Object(i.a)({},e),{},{navItem:t.payLoad}):e},d={viewMap:!1,routesStopsList:[],route:{},mapBounds:null,routesSelectList:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return"viewMap"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewMap:!0},t.payLoad):"closeMap"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewMap:!1,route:{},routesStopsList:[]}):"setSelectRoutes"===t.type?Object(i.a)(Object(i.a)({},e),{},{routesSelectList:t.payLoad}):"addRouteToMap"===t.type?Object(i.a)(Object(i.a)({},e),{},{routesStopsList:t.payLoad}):"loadMap"===t.type?Object(i.a)({},e):e},j={routesList:[],viewCreateForm:!1,stopsList:[],viewEditForm:!1,route:{},sendRequest:!0,deleteRoute:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"setRoutes"===t.type?Object(i.a)(Object(i.a)({},e),{},{routesList:t.payLoad}):"setStops"===t.type?Object(i.a)(Object(i.a)({},e),{},{stopsList:t.payLoad}):"createRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewCreateForm:!0}):"deleteRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{deleteRoute:!0,route:t.payLoad}):"fetchRoutes"===t.type?Object(i.a)(Object(i.a)({},e),{},{sendRequest:!e.sendRequest}):"editRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewEditForm:!0,route:t.payLoad}):"closeEditRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewEditForm:!1}):"closeCreateRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{viewCreateForm:!1}):"closeDeleteRoute"===t.type?Object(i.a)(Object(i.a)({},e),{},{deleteRoute:!1}):e},m=Object(r.a)({navSelection:l,mapSelection:p,route:b}),f=Object(r.b)(m),O=(a(38),a(10)),h=a.n(O),v=a(15),x=a(19),_=a.n(x),y=a(1),R=function(e){var t=Object(s.c)((function(e){return e.navSelection.navItem})),a=Object(s.b)(),o=function(e){a({type:"updateNav",payLoad:e.target.innerHTML})};return Object(y.jsxs)("div",{className:_.a.navmenuwrapper,children:[Object(y.jsx)("div",{className:"".concat("Routes"===t&&_.a.active),onClick:o,children:"Routes"}),Object(y.jsx)("div",{className:"".concat("Stops"===t&&_.a.active),onClick:o,children:"Stops"})]})},L=a(4),N=a.n(L),w=function(e){var t=Object(s.b)();return Object(y.jsxs)("div",{className:N.a.itemWrapper,children:[Object(y.jsx)("div",{className:N.a.nameText,children:e.route.name}),Object(y.jsxs)("div",{className:N.a.itemActions,children:[Object(y.jsx)("button",{className:N.a.btn,onClick:function(){var a=[];e.route.stopsList.forEach((function(e){a.push(e.location)}));var o=[{id:e.route.id,name:e.route.name,stopsList:a}];t({type:"viewMap",payLoad:{route:e.route,routesStopsList:o}})},children:Object(y.jsx)("i",{className:"fa fa-binoculars"})}),Object(y.jsx)("button",{className:N.a.btn,onClick:function(){t({type:"editRoute",payLoad:e.route})},children:Object(y.jsx)("i",{className:"fa fa-pencil"})}),Object(y.jsx)("button",{className:N.a.btn,onClick:function(){t({type:"deleteRoute",payLoad:e.route})},children:Object(y.jsx)("i",{className:"fa fa-trash"})})]})]})},g=a(5),E=a(16),M=a(9),S=a.n(M),C=function(e){return Object(y.jsx)("div",{className:S.a.modalWrapper,children:Object(y.jsxs)("div",{className:S.a.modalBody,children:[Object(y.jsx)("button",{className:S.a.closeBtn,onClick:function(){e.onClose()},children:Object(y.jsx)("i",{className:"fa fa-close"})}),e.children]})})},B=function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.route.stopsList})),c=Object(s.c)((function(e){return e.route.route})),n=Object(o.useState)(""),r=Object(g.a)(n,2),i=r[0],u=r[1],l=Object(o.useState)(""),d=Object(g.a)(l,2),p=d[0],j=d[1],b=Object(o.useState)(""),m=Object(g.a)(b,2),f=m[0],O=m[1],x=Object(o.useState)(!0),_=Object(g.a)(x,2),R=_[0],L=_[1],w=Object(o.useState)(!0),M=Object(g.a)(w,2),S=M[0],B=M[1],W=Object(o.useState)(!0),T=Object(g.a)(W,2),k=T[0],F=T[1],D=function(){!e.isEditRoute&&t({type:"closeCreateRoute"}),e.isEditRoute&&t({type:"closeEditRoute"})},I=function(){var a=Object(v.a)(h.a.mark((function a(o){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n="https://chalodemo-default-rtdb.firebaseio.com/route.json",e.isEditRoute&&(n="https://chalodemo-default-rtdb.firebaseio.com/route/"+c.guid+".json"),fetch(n,{method:e.isEditRoute?"PUT":"POST",body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){t({type:"fetchRoutes"}),D()}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),A=[{value:"up",label:"Up"},{value:"down",label:"Down"}];return Object(o.useEffect)((function(){if(e.isEditRoute){u(c.name),j(A.filter((function(e){return e.value===c.direction}))[0]);var t=[];c.stopsList.forEach((function(e){t.push({label:e.stopName,value:e})})),O(t)}}),[]),Object(y.jsxs)(C,{onClose:D,children:[Object(y.jsx)("div",{className:N.a.headerText,children:e.isEditRoute?"Edit Route":"Create New Route"}),Object(y.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==i.trim())if(L(!0),Object.keys(p).length)if(B(!0),f.length){F(!0);var a=[];f.forEach((function(e){a.push(e.value)}));var o={id:e.isEditRoute?c.id:(new Date).getTime(),name:i,direction:p.value,status:"active",stopsList:a};I(o)}else F(!1);else B(!1);else L(!1)},children:[Object(y.jsxs)("div",{className:N.a.control,children:[Object(y.jsx)("label",{className:"".concat(!R&&N.a.error," ").concat(R&&N.a.errorClear),htmlFor:"name",children:"Name"}),Object(y.jsx)("input",{type:"text",id:"name",onChange:function(e){u(e.target.value)},value:i})]}),Object(y.jsxs)("div",{className:N.a.control,children:[Object(y.jsx)("label",{className:"".concat(!S&&N.a.error," ").concat(S&&N.a.errorClear),htmlFor:"direction",children:"Direction"}),Object(y.jsx)(E.a,{options:A,onChange:function(e){j(e)},value:p})]}),Object(y.jsxs)("div",{className:N.a.control,children:[Object(y.jsx)("label",{className:"".concat(!k&&N.a.error," ").concat(k&&N.a.errorClear),htmlFor:"stops",children:"Stops"}),Object(y.jsx)(E.a,{options:a,isMulti:!0,onChange:function(e){O(e)},value:f})]}),Object(y.jsx)("button",{className:N.a.saveBtn,children:e.isEditRoute?"Save Route":"Add Route"})]})]})},W=a(17),T=Object(W.GoogleApiWrapper)({apiKey:"AIzaSyALUiHW1mdHAUD_MeAAwDNRMSXwZgAx5YE"})((function(e){var t=Object(o.useState)(null),a=Object(g.a)(t,2),c=a[0],n=a[1],s=["red","blue","green","black","pink"];return Object(y.jsx)("div",{children:Object(y.jsxs)(W.Map,{google:e.google,zoom:8,style:{width:"500px",height:"400px",position:"relative"},initialCenter:e.routeList[0].stopsList[0],onReady:function(){var t=new e.google.maps.LatLngBounds;e.routeList.forEach((function(a){a.stopsList.forEach((function(a){t.extend(new e.google.maps.LatLng(a.lat,a.lng))}))})),n(t)},bounds:c,children:[e.routeList.map((function(e,t){return Object(y.jsx)(W.Polyline,{path:e.stopsList,strokeColor:s[t%5],strokeOpacity:1,strokeWeight:6},e.id)})),e.routeList.map((function(e,t){return e.stopsList.map((function(a,o){return Object(y.jsx)(W.Marker,{position:a,title:e.name},"marker-".concat(t,"-").concat(o))}))}))]})})})),k=a(13),F=a.n(k),D=function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],n=Object(s.c)((function(e){return e.mapSelection.routesStopsList})),r=Object(s.c)((function(e){return e.mapSelection.routesSelectList})),i=Object(s.c)((function(e){return e.mapSelection.route})),u=Object(s.b)();return Object(o.useEffect)((function(){c(r.filter((function(e){return e.value.id===i.id})))}),[]),Object(y.jsx)("div",{className:F.a.mapModalWrapper,children:Object(y.jsxs)("div",{className:F.a.mapModalBody,children:[Object(y.jsx)("button",{className:F.a.mapCloseBtn,onClick:function(){u({type:"closeMap",payLoad:!1})},children:Object(y.jsx)("i",{className:"fa fa-close"})}),Object(y.jsxs)("div",{className:F.a.actionsWrapper,children:[Object(y.jsx)("label",{htmlFor:"name",children:"Add routes to map"}),Object(y.jsx)(E.a,{options:r,isMulti:!0,onChange:function(e){var t=[],a=[];e.forEach((function(e){a=[],e.value.stopsList.forEach((function(e){a.push(e.location)})),t.push({id:e.value.id,name:e.value.name,stopsList:a})})),t.length&&u({type:"addRouteToMap",payLoad:t}),c(e)},value:a})]}),Object(y.jsx)("div",{className:F.a.mapWrapper,children:Object(y.jsx)(T,{routeList:n})})]})})},I=function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.route.route})),o=function(){t({type:"closeDeleteRoute"})};return Object(y.jsx)(C,{onClose:o,children:Object(y.jsxs)("div",{className:S.a.confirmBody,children:[Object(y.jsxs)("p",{className:S.a.warningText,children:["Procced to Delete ",a.name]}),Object(y.jsx)("p",{className:S.a.descText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(y.jsx)("button",{className:S.a.confirmBtn,onClick:function(){var e="https://chalodemo-default-rtdb.firebaseio.com/route/"+a.guid+".json";fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){t({type:"fetchRoutes"}),o()}))},children:"Confirm"})]})})},A=a(6),V=a.n(A),q=a(29),U=a(24),Y=a(30),Z=a.n(Y),G=function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:Z.a.exportBtn,onClick:function(){var t={Sheets:{data:U.utils.json_to_sheet(e.fileData)},SheetNames:["data"]},a=U.write(t,{bookType:"xlsx",type:"array"}),o=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});q.saveAs(o,e.fileName+".xlsx")},children:"Export Data"})})},H=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.navSelection.navItem})),a=Object(s.c)((function(e){return e.mapSelection.viewMap})),c=Object(s.c)((function(e){return e.route.routesList})),n=Object(s.c)((function(e){return e.route.viewCreateForm})),r=Object(s.c)((function(e){return e.route.viewEditForm})),u=Object(s.c)((function(e){return e.route.sendRequest})),l=Object(s.c)((function(e){return e.route.deleteRoute})),d=Object(s.c)((function(e){return e.route.stopsList})),p=Object(o.useCallback)(Object(v.a)(h.a.mark((function t(){var a,o,c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://chalodemo-default-rtdb.firebaseio.com/route.json");case 3:return a=t.sent,t.next=6,a.json();case 6:o=t.sent,c=[],n=[],Object.entries(o).forEach((function(e){c.push(Object(i.a)(Object(i.a)({},e[1]),{},{guid:e[0]})),n.push({label:e[1].name,value:Object(i.a)(Object(i.a)({},e[1]),{},{guid:e[0]})})})),e({type:"setRoutes",payLoad:c}),e({type:"setSelectRoutes",payLoad:n}),e({type:"fetchRoutes"}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])}))),[]);Object(o.useEffect)((function(){u&&p()}),[u]);var j=Object(o.useCallback)(Object(v.a)(h.a.mark((function t(){var a,o,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://chalodemo-default-rtdb.firebaseio.com/stops.json");case 3:return a=t.sent,t.next=6,a.json();case 6:o=t.sent,c=[],Object.entries(o).forEach((function(e){c.push({label:e[1].stopName,value:e[1]})})),e({type:"setStops",payLoad:c}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),[]);return Object(o.useEffect)((function(){j()}),[j]),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:V.a.routeViewWrapper,children:[Object(y.jsx)(R,{}),"Routes"===t&&Object(y.jsxs)("div",{className:V.a.routesWrapper,children:[Object(y.jsx)("div",{className:V.a.headerText,children:t}),Object(y.jsx)("p",{className:V.a.descriptionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),Object(y.jsxs)("div",{className:V.a.displayFlex,children:[Object(y.jsx)("button",{className:V.a.createBtn,onClick:function(){e({type:"createRoute"})},children:"Create New Route"}),Object(y.jsx)(G,{fileName:"routes",fileData:c})]}),Object(y.jsx)("div",{children:c.map((function(e,t){return Object(y.jsx)(w,{route:e},e.id)}))})]}),"Stops"===t&&Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:V.a.headerText,children:t}),Object(y.jsx)("p",{className:V.a.descriptionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),Object(y.jsxs)("div",{className:V.a.displayFlex,children:[Object(y.jsx)("p",{children:"All Stops"}),Object(y.jsx)(G,{fileName:"stops",fileData:d})]}),d.map((function(e,t){return Object(y.jsx)("div",{className:V.a.stopWrapper,children:e.label},e.value.stopId)}))]})]}),a&&Object(y.jsx)(D,{}),l&&Object(y.jsx)(I,{}),n&&Object(y.jsx)(B,{isEditRoute:!1}),r&&Object(y.jsx)(B,{isEditRoute:r})]})};function J(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(H,{})})}var P=document.getElementById("root");n.a.render(Object(y.jsx)(s.a,{store:f,children:Object(y.jsx)(J,{})}),P)},9:function(e,t,a){e.exports={closeBtn:"Modal_closeBtn__1xWZV",confirmBtn:"Modal_confirmBtn__2o5cB",modalWrapper:"Modal_modalWrapper__VFEZN",modalBody:"Modal_modalBody__1CdAm",confirmBody:"Modal_confirmBody__1_iXQ",warningText:"Modal_warningText__f7oD-"}}},[[75,1,2]]]);
//# sourceMappingURL=main.67661080.chunk.js.map