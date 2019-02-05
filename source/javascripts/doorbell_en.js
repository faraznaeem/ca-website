window.doorbellOptions = {
  strings: {
    'feedback-button-text': 'Do you have any questions?',

    'title': 'Contact us',
    'intro-text': 'Would you like to know more aboutt Craft Academy. Get in touch with us using the form below or call on +46 (0)732-612527',
  },
  id: '1974',
  appKey: 'zF0anPyXM2iItB1yfkqhwe8iMBdR4mBuiKPuwH2oe0OuFBvK9IFoksmZVigjgaGS'
};
(function(w, d, t) {
  var hasLoaded = false;
  function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/'+window.doorbellOptions['id']+'?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
  if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
  if (d.readyState == 'complete') { l(); }
}(window, document, 'script'));
