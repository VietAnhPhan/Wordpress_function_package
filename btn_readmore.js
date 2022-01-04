
        const readmore_text = document.querySelectorAll(".readmore-text");
        const readmore_btn = document.querySelectorAll(".readmore-btn");

        readmore_btn.forEach(function (el, id) {
            el.addEventListener("click", (e) => {
               
                readmore_text[id].classList.toggle('readmore-text');
                if (readmore_btn[id].innerText == 'MỞ RỘNG') {
                    readmore_btn[id].innerText = 'RÚT GỌN';
                }
                else {
                    readmore_btn[id].innerText = 'MỞ RỘNG';
                }
            });
        });
