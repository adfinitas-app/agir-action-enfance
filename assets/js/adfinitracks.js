function loadScript(url, callback)
{
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.async = true;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}
loadScript("https://www.adfinitas.fr/cdn/lib/adfinitracks.min.js", function() {
!function(name,path,ctx){
	var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
	}('Reveal','https://www.adfinitas.fr/cdn/lib/reveal.min.js',adfinitracks);
adfinitracks.Reveal.ready(function(){
  var client = new adfinitracks.Reveal({
      projectId: '592fcbd154532c46e9be47ad',
      writeKey: 'D98080B49F73412AB9CD80EAE4CEEC32E4B67DE456047B491612903546925BA3'
  });
  var p = adfinitracks.extractUrlParams();
  var eenc = "";
  var mbzid = ""
  if ("eenc" in p){eenc = p["eenc"].toLowerCase();}
  if ("mbzid" in p){mbzid = p["mbzid"];}
  client.recordEvent('pageview', {
      title		: document.title,
      url     : document.location.href,
      user		: {"uuid": adfinitracks.getUniqueId(),
                   "md5": eenc,
                   "id_mesopmindbaz": mbzid},
      organization : "actionenfance.org",
      device	: adfinitracks.getDevice()
  });
  setTimeout(function(){
    client.recordEvent('timespent', {
      title   : document.title,
      url     : document.location.href,
      user    : {"uuid": adfinitracks.getUniqueId(),
                   "md5": eenc,
                   "id_mesopmindbaz": mbzid},
      organization : "actionenfance.org",
      device  : adfinitracks.getDevice(),
      duration : 30
    })
  }, 30000);
  (function(){
  	var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");
  woopra.config({
  	domain: 'actionenfance.org'
    });
  mbzid ? woopra.identify({"id_mesopmindbaz":mbzid}) : false;
  eenc ? woopra.identify({"md5":eenc}) : false;
      woopra.identify({"adfuuid":adfinitracks.getUniqueId()});
	  woopra.track();
      adfinitracks.trackAudience("A2KHO6RS7FBHRBRODRCVDU", "NMGKWCSJMRGD5BV6YGVRVM");
    });
  });