window.onload = function () {
     
    if (document.readyState === "interactive") {
        console.log('interactive');
    } else if (document.readyState === "complete") {
        console.log('complete');
        document.body.classList.add('--ready');
    }
     
     new Vivus('my-svg', {duration: 200}, function (data) {
        console.log("THE DxdfgndryjnATA", data);

    });

    
}  
