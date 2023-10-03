const iconMenu = document.querySelector("#i-menu");
const iconClose = document.querySelector("#i-close");
const backToTopButton = document.querySelector(".back-to-top");
const navMobile = document.querySelector("#nav-mobile");
const linksNav = document.querySelectorAll(".scroll-link");
const rangeInput = document.getElementById('formRecompensa');
const modal = document.getElementById('modalRecompensa');
const modalValue = document.getElementById('modalRecompensaValue');

const obterEstilo = (elemento) => {
  const style = window.getComputedStyle(elemento);
  return style;
};

const alterarIcone = (iconeVisivel, iconeOculto) => {
  if (obterEstilo(iconeVisivel).display == "flex") {
    iconeVisivel.style.display = "none";
    iconeOculto.style.display = "flex";
  }
};

const estadoNavMobile = (estado) => {
  if (obterEstilo(navMobile).display == "none" && estado == true) {
    navMobile.style.display = "flex";
  } else {
    navMobile.style.display = "none";
  }
};

iconMenu.onclick = function () {
  alterarIcone(iconMenu, iconClose);
  estadoNavMobile(true);
};

iconClose.onclick = function () {
  alterarIcone(iconClose, iconMenu);
  estadoNavMobile(false);
};

linksNav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alterarIcone(iconClose, iconMenu);
    estadoNavMobile(false);

    const targetId = link.getAttribute("href").substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      if (targetSection.id == "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      const targetOffset = targetSection.offsetTop - 50;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  });
});


rangeInput.addEventListener('input', () => {
    const value = rangeInput.value;
    modalValue.textContent = `$ ${value}`;
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 4000);
});


window.onresize = () => {
  if (window.innerWidth >= 1024) {
      alterarIcone(iconClose, iconMenu);
      estadoNavMobile(false);
  }
};


window.onscroll = () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.remove('hide');
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
    backToTopButton.classList.add('hide');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top");

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToTop();
  });

  function smoothScrollToTop() {
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

});