import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Come drink with us", "We'll get you to the moon and back"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
