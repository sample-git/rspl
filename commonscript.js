        $(document).ready(function () {

            var navBack = "rgba(17,32,52,0.4)";
            $(".navbar").css("background", navBack)

            $(window).resize(function () {
                var color = "rgb(3, 38, 73)";
                if ($(window).width() <= 768) {
                    $(".navigation").css('display', 'none');
                    $(".navbar").removeClass("navbar-fixed-top");
                } else {
                    $(".navigation").css('display', 'block');
                    $(".navbar").addClass("navbar-fixed-top");
                };

            });

            if (screen.width < 768) {
                $(".navbar").removeClass("navbar-fixed-top");
            }
            else {
                $(".navbar").addClass("navbar-fixed-top");
            }

            $(".menu-click").click(function () {
                $(".navigation").toggle('slow');
            });


            $(window).scroll(function () {

                var color = "rgba(17,32,52,2)";
                var liColor = "rgb(245,222,179)";


                if ($(window).scrollTop() > 140) {
                    $(".navbar").css("background", color);
                    $(".navigation li a").css("color", "white");
                } else {
                    $(".navbar").css("background", navBack);
                    $(".navigation li a").css("color", liColor);
                }

            });
        });