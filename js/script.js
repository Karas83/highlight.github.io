var swiper = new Swiper(".mySwipertopnft", {
  slidesPerView: 3,
  spaceBetween: 0,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 35
    },
    860: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 35
    }
  }
});

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {


      const sidebar = button.parentElement;
      const tabs = sidebar.parentElement;
      const tabq = tabs.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabActivate = tabq.querySelector(`.tab-content[data-tab="${tabNumber}"]`)

      sidebar.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('tab-btn-active')
      })
      tabq.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('tab-content-active')
      })
      button.classList.add('tab-btn-active')
      tabActivate.classList.add('tab-content-active')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
