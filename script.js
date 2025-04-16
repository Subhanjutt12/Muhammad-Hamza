const testimonials = document.querySelectorAll('.testimonial');
const prev = document.querySelector('.nav.left');
const next = document.querySelector('.nav.right');
let index = 0;

function showTestimonial(idx) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}

prev.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

showTestimonial(index);

