
// function loadScript(src){
//     let script = document.createElement("script")
//     script.src = src
//     document.body.append(script)
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")


// But we say whenever it will loaded run my extra function 

function loadScript(src, callback){
    let script = document.createElement("script")
    script.src = src
    callback(src)
    document.body.append(script)
}



loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js", (someFunc) = (src) =>{
    alert('Loaded src' + src) 
})

// This is called 'callback-based' style of async programming. a function that does something asynchronously should provide a callback argument where we put the function to run after its complete

// Handling callback error (below code from harry bhai)

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  
  function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 