window.addEventListener('DOMContentLoaded', function() {
    
    // Timer

    const deadline = '2024-05-20';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 / 60)) % 60),
            seconds = Math.floor((t / 1000)  % 60);
        }
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.total__timer', deadline);

    // Discover 

    const parentBtn = document.querySelector('.discover__btns'),
          discoverBtn = document.querySelectorAll('.discover__btn');

    function unactiveBtn( ) {
        discoverBtn.forEach((item) => {
            item.classList.remove('discover__btn_active');
        });
    }

    function activeBtn(i = 0) {
        discoverBtn[i].classList.add('discover__btn_active');
    }

    unactiveBtn();
    activeBtn();

    parentBtn.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('discover__btn')) {
            discoverBtn.forEach((item, i) => {
                if (target == item) {
                    unactiveBtn();
                    activeBtn(i);
                }
            });
        }
    });
});

