var codeTest = false;

function onConversationsAPIReady() {

  if(codeTest == true) {
    return;
  }else {
    codeTest = true;

    window.hsConversationsSettings = {
      loadImmediately: false,
    };

    window.HubSpotConversations.clear();
    window.HubSpotConversations.widget.load();
    window.HubSpotConversations.on('conversationClosed', payload => {
      window.HubSpotConversations.clear();
    });
  }

}

if (window.HubSpotConversations) {
  onConversationsAPIReady();
}else {
  window.hsConversationsOnReady = [onConversationsAPIReady];
}

setTimeout(function(){ 
  if(codeTest != true) {
    onConversationsAPIReady();
  }
}, 10000);