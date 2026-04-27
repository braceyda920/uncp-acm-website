/* =============================================
   UNCP ACM — CONTACT PAGE JAVASCRIPT
   ============================================= */

(function () {
  const form = document.getElementById('theForm');
  const formWrap = document.getElementById('contactForm');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorEl.style.display = 'none';

    // Basic validation
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();

    if (!firstName || !lastName) {
      showError('Please enter your first and last name.');
      return;
    }

    if (!email || !email.includes('@')) {
      showError('Please enter a valid email address.');
      return;
    }

    if (!subject) {
      showError('Please select a subject for your message.');
      return;
    }

    if (message.length < 10) {
      showError('Please write a message (at least 10 characters).');
      return;
    }

    // Simulate sending (GitHub Pages is static — no backend)
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      formWrap.querySelector('form').style.display = 'none';
      successEl.style.display = 'block';
    }, 1200);
  });

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
    errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();
