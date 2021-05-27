$(document).ready(function(){
	$('#sl-01').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:false,
        pauseOnDotsHover:true,
        infinite: true,
        centerMode: true,
        initialSlide: 1,
		slidesToShow: 3,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:true,
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
                    slidesToShow: 1,
				}
			}
		]
	});
	
	$('#sl-02').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:false,
        pauseOnDotsHover:true,
        infinite: false,
        centerMode: true,
        initialSlide: 1,
		slidesToShow: 3,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:true,
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
                    slidesToShow: 1,
				}
			}
		]
	});
});

