document.addEventListener('DOMContentLoaded', function () {
    // 'https://scontent.fceb6-4.fna.fbcdn.net/v/t1.15752-9/494329435_1778556699712569_4156330040736651523_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEzJMLWol5Y-oow7-RffySnnUZlNeROogCdRmU15E6iAO2A5F-lCtvzqSPyQ6IvXDdG0IpfnyOEAf0lj0lVupJs&_nc_ohc=ikyCREAspmoQ7kNvwHxoAti&_nc_oc=Adk1WfB5NNwwK2pAH42TebkxYRGEZYw33ZTwYfa5mFdgIyCm7PZyGeKazZx2V48RhCo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&oh=03_Q7cD2QGwc7Klcrj_jHBSKjhJB-jMz17g-V6k5Pr6D5TYF0YXrw&oe=68596656',
    // 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/494329268_1205148974408678_3702281630410124843_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEADU_ElOG0hJJxp5TZRWVW460BuSfkRG7jrQG5J-REbqwAdfB6pThg-xOSNzZvOdI7mJXGM6d5t2EA2TPWERhd&_nc_ohc=XuG1uGxMof0Q7kNvwHlUdjF&_nc_oc=Adl-2OqNp7QOSDs9NUDaG1q0S95l-vkozU5J31NUH6yMgh4vIso7_gDhGj0pBGW2A0s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=03_Q7cD2QFzs02HlVqjn95E3C9KhFB6aK__oIQTomo4-Gw36KygsA&oe=68595888',
    // 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/494813149_1652141978784537_5659584144045431895_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGq9JYFT2yXa7EqfmVnzPm96STI36qiZnfpJMjfqqJmd5BPgrqXiJdDiVvzIMqTfERru26SnKwFPEHUbfOmLHm6&_nc_ohc=yJwC29MW-tMQ7kNvwF_yxf1&_nc_oc=AdnVpp4FXuINibibedcSpivzkp-97Ldb1B-kHn8cYWCV3CC8856B2Q1YyVouMKJeH_U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=03_Q7cD2QHMA15Ciyvzw84uH4wp7tVxYDZgme8tnWSUYXfJ7-TN0Q&oe=68597266',
    // 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/494340563_1433103031017824_8699852007031414321_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFnKhEZyLcxXM9ob_tLEuwdXtHIvPmE-ale0ci8-YT5qXk5MfY5BDirZ17cLkHjfQx3wZ6mRomcn9MiKdQFWxeS&_nc_ohc=pBIl-MlP7yEQ7kNvwGfqFgD&_nc_oc=AdmeTznqTglCVsadmUF3fFJpFOWYe2wOp7Om1Yay3Rw3CDPB3b8GL4IPBIqOj8G1qpY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=03_Q7cD2QH1WNq4CABD_nhKPRcommwXCrtuB-GH6bN7aWSKmq1ctg&oe=6859450D',
    // 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/494325886_1166950275185168_4943761296671336553_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEP8B6feOo8GPVQFeIL5SoRJs7jep-RfKgmzuN6n5F8qPC54kfaQPtHzsVj7Rm0QpIW_gGQIghT7x3-pDI4T_ww&_nc_ohc=wmevw6dO9kYQ7kNvwH-rA5a&_nc_oc=Admg33k9PjjuyEHC92jRWIbNhokRTbTrnzOTwYra6H--D9fae-18Df9-DXb0jQDb18Y&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=03_Q7cD2QE_wDTNMKZqfyLT9VwV_rzDYc07gKrJrCyQh32YHSYR5w&oe=685964B2',
    // 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/494822133_1216015223235234_7504787994851846049_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHPc04fERJbnnERvle4ko5t5Nmc5JPUvD3k2Zzkk9S8PTValGNU9mwbY_1T6D2aWOLJ95WFuZzodrJmwzmWy8Tw&_nc_ohc=2wiYboccJGMQ7kNvwEUlurx&_nc_oc=Adm9TRvf1b5clD_6pmfEc2ks8VG49dzCk65fI9tqi0Leh1wrNpVrI7EoNTg8gWYs_HM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=03_Q7cD2QFoXpgev1u4FEsDAvsYQ3R_H9P3H4wvuZuQn2ZfLq3XzA&oe=68596A55',
    // 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/494336502_24213338778258267_7162292966495852938_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH0AlRgiQfq53naJtU1RKh5iQZngFclAJCJBmeAVyUAkDdPMqiHDVpByuBbrTEIkUReC-EUJoJbuaOSsl8oImeE&_nc_ohc=v11qct-3LdwQ7kNvwHE9WYU&_nc_oc=AdkJoeHWlQk_4Ahtpc0E2ZwlrxbcpPpgTo1z2iziJVdeROZSQ6aMWQTFyVy_Bejn4lQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=03_Q7cD2QE2cbkIAQgENywVbbfv6ZncE6bj8tq5Bhqbe9oGEJ2N-Q&oe=685963C1',
    // 'https://scontent.fceb6-2.fna.fbcdn.net/v/t1.15752-9/494338870_602788056171736_6757179719182419338_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEtZVEeThqAjuOHlAta2AZYOY2G6WuNRfs5jYbpa41F-1eLQeQIfuSj7YRDgBD4zs_-sz9z0amDcNX--ySaqf2-&_nc_ohc=UjUXDcLYxLcQ7kNvwEdhAkC&_nc_oc=Adlm9l0x_jFyUAMThblUXJcbFApk0z8tCrImB2wIKO7ZfE-iCrZwbuw-9RlrCjft4Bg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&oh=03_Q7cD2QG5LJHATTp6gaGDGyVHOA-wTFR4HQc2knk4KP5D5Clysw&oe=68596975',
    // 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/494327769_1371809690538150_32480719109622471_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFvHcrHfIHqZ75OeQkNNsE11r-lzbxy6dvWv6XNvHLp290Hgtr_5WIqBL-aC7BAMhNNOzGPw5BUE_69TVAHPTV4&_nc_ohc=s-CVPT1okx0Q7kNvwHIA21W&_nc_oc=AdnogLCokpJW3QJgNfsg340sFVnV2DuWihORgJV92SBoy9hvc1-Ipd6AeTpiwwvTizw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=03_Q7cD2QHSp2sgZ-lyeyhJOZlslCpIRYD0bUzrAdwHLq8rzDmLHw&oe=6859610E',
    // 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/494814095_1775015100034263_4797046773555453361_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHl2JoT7I1rz9zA8TPe0mV0hPjOfNM8KxmE-M580zwrGYdoLrDgeyoMOzar4WwXxv-rLJchkYAtDBIDYU9u9r-y&_nc_ohc=cCSr38hJ5qIQ7kNvwHLce4u&_nc_oc=AdmG7TdFYf0xxMMNzzy-h_U84hiazmThCcGxX9jX-7CTOA2ivPb2qvdblX_bB1zoKJ0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=03_Q7cD2QGTgw2fYua_5EJRHD7ioRn05MSC-26-XSQgxOOZ8fQNXw&oe=685970C0',
    // 'https://scontent.fceb6-4.fna.fbcdn.net/v/t1.15752-9/494816144_684090544427542_2993518088021483860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF1J4RKOXq9m8w82xjJRivbDur5nep6wYcO6vmd6nrBh8jMJRcSCDONVYT7ytQFyxGPwRZET1oerPGwU3BwuMoA&_nc_ohc=HJ8TWwxbLFgQ7kNvwHsv5Ey&_nc_oc=AdkrCvUBAOneqx1tMY1kCeDP09JghCXiLTtoU7KXbu7vOulC5kAUdNQf4F77c_WvYt0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&oh=03_Q7cD2QFAwCwJMjUi6kUPSbs27_Ovqy5YQLKOhC4z4tvwoJwpHw&oe=68596A30'
    // DOM Elements
    const initialScreen = document.getElementById('initial-screen');
    const sliderScreen = document.getElementById('slider-screen');
    const dislikeBtn = document.getElementById('dislike-btn');
    const heartBtn = document.getElementById('heart-btn');
    const dislikeNotification = document.getElementById('dislike-notification');
    const dislikeNotification2 = document.getElementById('dislike-notification2');
    const sliderTrack = document.querySelector('.slider-track');
    const playBtn = document.getElementById('play-btn');
    const music = document.getElementById('music');
    const volumeControl = document.getElementById('volume');

    // Sample images (you can replace with your own)
    const images = [
        'https://tse4.mm.bing.net/th?id=OIP.LsACBr8rho1lQpaxCzP7MwHaHa&pid=Api&P=0&h=180',
        'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/495046993_1801698917393171_1658174193016905955_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFRs5edGGp27PAycPq7e5BeRuGBglu88ftG4YGCW7zx-2ZStDhBys2HZcW2jjg2JC1jpCuM6Ddkh9uZ0Hdy5e04&_nc_ohc=kUcBsQ3kzWYQ7kNvwE5Pyt7&_nc_oc=AdlDFjljmE93czKCNH1b62GRAbPw2oUGhjZJGMxlfavV7KNFk_tXtLwOMwUXEqom1OA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=03_Q7cD2QEQvB3ruWRHGJMx9ssxBHBJkVz4uWRzJ-BpxQDg51u9JA&oe=685BD64C',
        'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/494815633_1387438782304728_1296180088173741265_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF6a5OhP04nzog7skFLHwjvkrA4sdu_ygSSsDix27_KBPerslGg03GrWX4u-YjKxJ0wh1pJzi-Fe4szjVFpsUKl&_nc_ohc=5gIpYYocfqgQ7kNvwHWotg_&_nc_oc=AdksiJDMcCZoSKMpTz-gNV7RBuw6mZNNHkx9PXn2s7sMHbSjD-AFydomDGsBCgEDirQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=03_Q7cD2QEIyV5S2EvZxNdyM-mr8S3oVyaZnxJMuheVeSeZYP6AKg&oe=685C086F',
        'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/494325484_481949655007129_6622375930006023219_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFnrk0RG9g74PD270atBWltHE2Ve2_1VxocTZV7b_VXGtPaIvM8ocDzQSI5xAiNL28a-4yMR-IExY1msn0GJKk7&_nc_ohc=Ai8D72M1Y6sQ7kNvwHE8KKH&_nc_oc=AdlpgmuHeC1TnBdB6h5RLDn4npdtz9WKf_o_t3rcPVrP4Swn3h78xWzEkw4WYufy4Ko&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=03_Q7cD2QHeoY_2vv-n1ZjhM9YMjVTnWxULHvZCcbwzfG0FjZTIHw&oe=685BFFAE'

    ];

    // Duplicate images to create infinite loop effect
    const allImages = [...images, ...images, ...images];

    // Current slide index
    let currentSlide = 0;
    let slideInterval;
    let isPlaying = false;
    let clickedCount = 0;


    // Initialize the slider
    function initSlider() {
        // Clear any existing images
        sliderTrack.innerHTML = '';

        // Add images to the slider track
        allImages.forEach((img, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = `Slide ${index + 1}`;
            imgElement.classList.add('slider-image');
            if (index === 0) imgElement.classList.add('active');
            sliderTrack.appendChild(imgElement);
        });

        // Set initial position
        updateSliderPosition();
    }

    // Update slider position
    function updateSliderPosition() {
        const slideWidth = sliderTrack.children[0].clientWidth;
        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        // Update active class
        document.querySelectorAll('.slider-image').forEach((img, index) => {
            if (index === currentSlide % images.length) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    // Auto slide function
    function autoSlide() {
        currentSlide++;
        if (currentSlide >= allImages.length - 1) {
            // Reset to middle when reaching near the end
            currentSlide = images.length;
            // Jump without animation
            sliderTrack.style.transition = 'none';
            updateSliderPosition();
            // Force reflow
            void sliderTrack.offsetWidth;
            sliderTrack.style.transition = 'transform 0.5s ease';
        }
        updateSliderPosition();
    }

    // Start auto sliding
    function startSlider() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 3000);
    }

    // Stop auto sliding
    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Toggle play/pause
    function togglePlay() {
        if (isPlaying) {
            music.pause();
            stopSlider();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            music.play();
            startSlider();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    // Event Listeners
    dislikeBtn.addEventListener('click', function () {
        clickedCount += 1;

        if (clickedCount === 1) {
            dislikeNotification.classList.add('show');
            setTimeout(() => {
                dislikeNotification.classList.remove('show');
            }, 2000);
        } else {
            dislikeNotification.classList.remove('show');
            dislikeNotification2.classList.add('show');
            setTimeout(() => {
                dislikeNotification2.classList.remove('show');
                // Redirects the user out of the current page (e.g., to Google)
                window.location.href = 'https://www.google.com';
            }, 1000);
        }
    });


    heartBtn.addEventListener('click', function () {
        dislikeNotification.classList.remove('show');
        initialScreen.classList.remove('active');
        sliderScreen.classList.add('active');
        initSlider();
    });

    playBtn.addEventListener('click', togglePlay);

    volumeControl.addEventListener('input', function () {
        music.volume = this.value;
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (sliderScreen.classList.contains('active')) {
            updateSliderPosition();
        }
    });

    // Preload images for better performance
    function preloadImages() {
        images.forEach(img => {
            const image = new Image();
            image.src = img;
        });
    }

    preloadImages();
});