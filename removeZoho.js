window.onload = function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m){
      if(m.addedNodes.length > 0 && m.addedNodes[0].className == "nH hh"){
        var zoho = m.addedNodes[0]
        if(zoho.parentNode == null)
          return;
        zoho.parentNode.removeChild(zoho)
      }
    })
  });
  observer.observe(document, { childList: true, subtree: true});
}
