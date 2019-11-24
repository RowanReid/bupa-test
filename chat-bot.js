var codeTest2 = false;

async function onConversationsAPIReady2() {
  
  if(codeTest2 == true) {
    return;
  // else we are good to go
  } else {
    
    // Attempt to clear and reset the chatbot entirely on page load
    window.HubSpotConversations.clear();
    
  }
}

if (window.HubSpotConversations) {

  onConversationsAPIReady2();

}else {
  window.hsConversationsOnReady = [onConversationsAPIReady2];
}

// add an event listener that will clear the cookies on page unload
window.addEventListener('beforeunload', function(e) {
   if(window.HubSpotConversations) {
     
     window.HubSpotConversations.clear();
   }
});
