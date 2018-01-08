(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-dingwei" viewBox="0 0 1024 1024">'+""+'<path d="M512 960.5l-16.7-13.8c-3.4-2.8-85.1-70.8-168-169-49-58.1-88.2-114.6-116.4-168.1-36.2-68.6-54.5-132.7-54.5-190.5 0-48 9.4-94.6 28-138.4 17.9-42.4 43.6-80.4 76.2-113 32.7-32.7 70.7-58.3 113-76.2 43.9-18.6 90.4-28 138.4-28s94.6 9.4 138.4 28c42.4 17.9 80.4 43.6 113 76.2 32.7 32.7 58.3 70.7 76.2 113 18.6 43.9 28 90.4 28 138.4 0 57.8-18.3 121.9-54.5 190.5-28.2 53.5-67.4 110-116.4 168.1-82.9 98.2-164.6 166.1-168 169L512 960.5z m0-844.7c-167.3 0-303.3 136.1-303.3 303.3 0 190.4 237.6 414.4 303.3 472.8 28-24.8 87-79.5 145.3-148.6 103.4-122.6 158-234.7 158-324.2 0-167.2-136-303.3-303.3-303.3z" fill="" ></path>'+""+'<path d="M512 610c-105.3 0-190.9-85.6-190.9-190.9S406.7 228.2 512 228.2s190.9 85.6 190.9 190.9S617.3 610 512 610z m0-329.5c-76.4 0-138.6 62.2-138.6 138.6S435.6 557.7 512 557.7s138.6-62.2 138.6-138.6S588.4 280.5 512 280.5z" fill="" ></path>'+""+"</symbol>"+""+'<symbol id="icon-bofang" viewBox="0 0 1024 1024">'+""+'<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"  ></path>'+""+'<path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-saoyisao" viewBox="0 0 1024 1024">'+""+'<path d="M665.6 128a21.333333 21.333333 0 1 1 0-42.666667h123.648A149.482667 149.482667 0 0 1 938.666667 234.816v133.504a21.333333 21.333333 0 1 1-42.666667 0v-133.504A106.816 106.816 0 0 0 789.248 128h-123.669333zM896 675.968a21.333333 21.333333 0 1 1 42.666667 0v113.258667A149.397333 149.397333 0 0 1 789.333333 938.666667H234.666667c-82.389333 0-149.333333-66.986667-149.333334-149.205334v-122.752a21.333333 21.333333 0 0 1 42.666667 0v122.752A106.773333 106.773333 0 0 0 234.666667 896h554.666666c58.88 0 106.666667-47.808 106.666667-106.773333v-113.28zM128 363.050667a21.333333 21.333333 0 1 1-42.666667 0v-128.213334C85.333333 152.298667 152.170667 85.333333 234.624 85.333333h128.725333a21.333333 21.333333 0 0 1 0 42.666667h-128.725333A106.730667 106.730667 0 0 0 128 234.858667v128.192zM106.666667 533.333333a21.333333 21.333333 0 0 1 0-42.666666h810.666666a21.333333 21.333333 0 0 1 0 42.666666H106.666667z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)