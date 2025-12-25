import './styles/main.scss'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const spans = entry.target.querySelectorAll('li span ');
      spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 150}ms`;
        span.classList.add('is-visible');
      });
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6 //delay before start animation
  }
);

document.querySelectorAll('.animate-on-scroll').forEach(list => { 
   observer.observe(list); 
});

document.querySelector("#send-form").addEventListener("submit", (event) => {
   event.preventDefault();
   const nameField = document.querySelector("#name");
   const emailField = document.querySelector("#email");
   const messageField = document.querySelector("#message");

   if (nameField.value === "" || messageField.value === "" || emailField.value === "") { 
    nameField.classList.toggle("form-error-state-animation");
    messageField.classList.toggle("form-error-state-animation");
    emailField.classList.toggle("form-error-state-animation");
    console.log("Form error state");
   } else {
    // nameField.classList.remove("form-error-state-animation");
    // messageField.classList.remove("form-error-state-animation");
   }
});
