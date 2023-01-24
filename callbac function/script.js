
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