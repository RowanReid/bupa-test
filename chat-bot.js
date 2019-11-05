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
    window.HubSpotConversations.widget.refresh();
    window.HubSpotConversations.widget.remove();
    window.HubSpotConversations.widget.load();
    window.HubSpotConversations.on('conversationClosed', payload => {
      window.HubSpotConversations.clear();
      window.HubSpotConversations.widget.refresh();
      window.HubSpotConversations.widget.remove();
      window.HubSpotConversations.widget.load();
      console.log('Conversation Closed');
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
    console.log('Timer done');

  }

}, 10000);
