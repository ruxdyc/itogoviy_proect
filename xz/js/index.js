$('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">&#8249</button>',
    nextArrow: '<button type="button" class="slick-next">&#8250</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  
  function changeBackgroundColor() {
    let body = document.getElementsByTagName("body")[0];
    let currentBackgroundColor = body.style.backgroundColor;
  
    if (currentBackgroundColor === 'rgb(37, 35, 35)') {
      body.style.backgroundColor = 'rgb(150, 147, 147)'
    } else {
      body.style.backgroundColor = 'rgb(37, 35, 35)'
    }
  };
  
  // Инициализация АОS
  AOS.init();
  
  // Галерея
  $(document).ready(function () {
    $("[data-fancybox]").fancybox({
      buttons: [
        "zoom",
        "slideShow",
        "download",
        "thumbs",
        "share",
        "fullScreen",
        "close"
  
      ],
      loop: true,
    })
  });
  
  let form = document.getElementById('myForm');
  let modal = document.getElementById('modal');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.classList.add('animate__animated', 'animate__wobble')
    // Показываем окно
    modal.style.display = 'block';
    setTimeout(function () {
      modal.style.display = 'none';
      document.getElementById('myForm').submit();
  
    }, 2000);
  
  });
  
  let closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
  });
  
  