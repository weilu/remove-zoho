function hasZohoIframe(node){
  if(!(node instanceof Element))
    return false;
  var iframes = node.getElementsByTagName('iframe');
  if(iframes.length == 0)
    return false;

  var hasIframe = Array.prototype.slice.call(iframes).some(function(iframe){
    return iframe.src.indexOf('gapps.zoho.com') > -1;
  });

  return hasIframe && node.textContent.indexOf('Zoho') == 0;
}

function hideZoho(addedNode){
  if(!hasZohoIframe(addedNode))
    return;
  addedNode.style.cssText = 'display: none';
}

function mutationCallback(mutation){
  var addedNodes = mutation.addedNodes;
  if(addedNodes.length > 0)
    Array.prototype.slice.call(addedNodes).forEach(hideZoho);
}

window.onload = function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutationCallback);
  });
  observer.observe(document, { childList: true, subtree: true });
}
