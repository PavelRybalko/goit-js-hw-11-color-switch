(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e){var n=document.querySelector("button[data-action=start]"),a=document.querySelector("button[data-action=stop]");a.disabled=!0;var o=null,d=!1,i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];n.addEventListener("click",(function(){if(d)return;o=setInterval((function(){var t,e;document.body.style.backgroundColor=i[(t=0,e=5,Math.floor(Math.random()*(e-t+1)+t))]}),1e3),d=!0,n.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(o),d=!1,n.disabled=!1,a.disabled=!0}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.7b78078e6d6d9ac5a4d5.js.map