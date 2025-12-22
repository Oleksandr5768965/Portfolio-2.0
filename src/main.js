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
    threshold: 0.6
  }
);

document.querySelectorAll('.animate-on-scroll').forEach(list => {
  observer.observe(list);
});
