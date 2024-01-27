
    document.addEventListener('DOMContentLoaded', function () {
        const Link = document.querySelector('.link');

        Link.addEventListener('click', function (event) {
            event.preventDefault();

            // Add a class to rotate the form
            document.querySelector('.main form').classList.add('rotate-form');

            // Add a class to rotate the entire body (you can modify this based on your layout)
            // document.body.classList.add('rotate-body');

            // Redirect to the sign-up page after the rotation effect
            setTimeout(function () {
                window.location.href = Link.href;
            }, 800); // Adjust the timeout based on your transition duration
        });
    });
