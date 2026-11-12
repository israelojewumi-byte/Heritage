const menuButton = document.querySelector('#menuButton');
const navigation = document.querySelector('nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
  });
}
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    alert('Thank you for contacting Safe Heritage School. Your form has been checked, but this demo does not send messages to a server.');
    contactForm.reset();
  });
}
