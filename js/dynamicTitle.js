window.onload = function () {
   
    let currentTitle = document.title;
    let Message = "Keep browsing !";
  
    document.addEventListener("visibilitychange", function (e) {
      let isPageActive = !document.hidden;
  
      if (!isPageActive) {
        toggle();
      } else {
        document.title = currentTitle;
      }
    });
  
    document.addEventListener("visibilitychange", function (e) {
      if (!document.hidden) {
        document.title = currentTitle;
      }
    });
  
    function toggle() {
      if (document.title === Message) {
        document.title = currentTitle;
      } else {
        document.title = Message;
      }
    }
  };