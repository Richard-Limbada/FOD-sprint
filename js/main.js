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
    new Vivus('my-svg1', {duration: 200}, function (data) {
        console.log("THE DxdfgndryjnATA888", data);

    });
        new Vivus('my-svg2', {duration: 200}, function (data) {
        console.log("THE DxdfgndryjnATlllA", data);

    });
    
    
    AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});
		

     
}  
