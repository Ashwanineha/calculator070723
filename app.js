(function name(params) {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function name(button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
            
            screen.value('click', function name(e) {
                if (screen.value === '') {


                    screen.value = "";

                } else {
                    let answer = eval(screen.value);
                    screen.value = answer;
                })
        });



    })();