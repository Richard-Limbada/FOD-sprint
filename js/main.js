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
    
    new Vivus('botSvg', {duration: 200}, function (data) {
        console.log("THE DxdfgndryjnATA888", data);

    });
        new Vivus('my-svg2', {duration: 200}, function (data) {
        console.log("THE DxdfgndryjnsdATlllA", data);

    });
    
    
    AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});
    
var modalPortfolio = new tingle.modal({
    footer: false,
    stickyFooter: false,
});

	$('body').on('click', '.portfolioItem', function(event){
		var html = $(this).find('.portfolioExtra').html();
console.log("tingle ready");
		modalPortfolio.setContent(html);
		modalPortfolio.open();
	})		
}  




