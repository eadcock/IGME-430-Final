(()=>{var e={483:e=>{var t,n=function(e){$("#errorMessage").text(e),$("#noteMessage").show()},r=function(e,t,r,c){$.ajax({cache:!1,type:e,url:t,data:r,dataType:"json",success:c,error:function(e,t,r){var c=JSON.parse(e.responseText);n(c.error)}})};e.exports.handleError=n,e.exports.sendAjax=r,e.exports.redirect=function(e){$("#noteMessage").hide(),window.location=e.redirect},e.exports.fetchAccount=function(e){r("GET","/me",null,(function(n){t=n,e(n)}))},e.exports.cachedAccount=t},945:(e,t,n)=>{var r=n(483),c=function(e){r.sendAjax("POST","/premium",{upgrade:!1,_csrf:e},(function(){u(e),r.fetchAccount((function(e){return console.log(e)}))}))},o=function(e){r.sendAjax("POST","/premium",{upgrade:!0,_csrf:e},(function(t){u(e),console.log(t),r.fetchAccount((function(e){return console.log(e)}))}))},a=function(e){var t=e.user;console.log(t);var n=React.createElement("div",{id:"free"},React.createElement("h3",null,"Free"),React.createElement("p",null,"Yup, this is the free tier. You get all base functionality, plus some ads for your enjoyment :)"),t.premium?React.createElement("button",{id:"freeSubmit",onClick:function(t){c(e.csrf)}},"Downgrade"):React.createElement("button",{id:"freeSubmit",onClick:function(t){c(e.csrf)},disabled:!0},"Currently activated!")),r=React.createElement("div",{id:"premium"},React.createElement("h3",null,"Premium"),React.createElement("p",null,"Here's the premium plan that costs.... nothing. :) Just click the button."),t.premium?React.createElement("button",{id:"premiumSubmit",onClick:function(t){o(e.csrf)},disabled:!0},"Currently activated!"):React.createElement("button",{id:"premiumSubmit",onClick:function(t){o(e.csrf)}},"Upgrade"));return React.createElement("div",{id:"offersWrapper"},React.createElement("h2",null,"Wow! Look at all of your plans! Pick your favorite:"),React.createElement("div",{id:"offers"},n,r))},u=function(e){r.fetchAccount((function(t){ReactDOM.render(React.createElement(a,{user:t.account,csrf:e}),document.querySelector("#content"))}))};$((function(){r.sendAjax("GET","/getToken",null,(function(e){u(e.csrfToken)}))}))}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n(483),n(945)})();