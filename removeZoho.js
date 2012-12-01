removeZoho = function(addedNode){
  if(addedNode.className != "nH hh")
    return;
  if(addedNode.parentNode == null)
    return;
  addedNode.parentNode.removeChild(addedNode)
}

mutationCallback = function(mutation){
  addedNodes = mutation.addedNodes;
  if(addedNodes.length > 0){
    for(var i=0; i<addedNodes.length; i++){
      removeZoho(addedNodes[i]);
    }
  }
}

window.onload = function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutationCallback);
  });
  observer.observe(document, { childList: true, subtree: true });
}
