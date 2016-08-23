---
layout: blank
---

(function(){
  var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
  domain: '{{ site.woopra_config.domain }}',
  cookie_domain: '{{ site.woopra_config.cookie_domain }}'
});

// Function located in assets/js/app.js
var p = extractUrlParams();
if ('email' in p) {
  if ('lastname' in p && 'firstname' in p) {
    woopra.identify({
      email: p['email'],
      name: p['firstname'] + ' ' + p['lastname']
    });
  } else {woopra.identify({email: p['email']})}
}

woopra.track();
