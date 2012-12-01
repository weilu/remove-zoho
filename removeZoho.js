removeZoho = function(addedNode){
  if(addedNode.className != "nH hh")
    return;
  if(addedNode.parentNode == null)
    return;
  addedNode.parentNode.removeChild(addedNode)
}

mutationCallback = function(mutation){
  addedNodes = mutation.addedNodes;
  if(addedNodes.length > 0)
    Array.prototype.slice.call(addedNodes).forEach(removeZoho)
}

window.onload = function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutationCallback);
  });
  observer.observe(document, { childList: true, subtree: true });
}
