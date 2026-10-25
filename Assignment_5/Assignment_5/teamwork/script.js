(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.id === 'regForm') {
                checkPasswords();
            }

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault();
                if (form.id === 'regForm') {
                    document.getElementById('successMsg').classList.remove('d-none');
                }
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passFeedback = document.getElementById('passFeedback');

function checkPasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        passFeedback.textContent = "Passwords do not match!";
    } else {
        confirmPassword.setCustomValidity("");
    }
}

document.getElementById('resetBtn').addEventListener('click', () => {
    const regForm = document.getElementById('regForm');
    regForm.classList.remove('was-validated');
    document.getElementById('successMsg').classList.add('d-none');
    confirmPassword.setCustomValidity("");
});
document.addEventListener('DOMContentLoaded', () => {

  const userNameInput = document.getElementById('userNameInput');
  const greetBtn = document.querySelector('#greetBtn');
  const welcomeMessage = document.getElementById('welcomeMessage');

  greetBtn.addEventListener('click', () => {
    const rawValue = userNameInput.value;
    const cleanName = rawValue.trim(); 

    if (cleanName === '') {
      welcomeMessage.textContent = 'Please enter your lovely name first, sweetie.';
      welcomeMessage.style.color = '#e53e3e';
    } else {

      welcomeMessage.textContent = `Welcome to GlowUp Studio, lovely ${cleanName}! We are so glad you are here.`;
      welcomeMessage.style.color = '#2d6a4f';
    }
  });

  const themeToggleBtn = document.getElementById('themeToggleBtn');

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      themeToggleBtn.textContent = 'Switch to Sunny Glow';
      themeToggleBtn.classList.remove('btn-purple');
      themeToggleBtn.classList.add('btn-green');
    } else {
      themeToggleBtn.textContent = 'Switch to Cozy Night';
      themeToggleBtn.classList.remove('btn-green');
      themeToggleBtn.classList.add('btn-purple');
    }
  });


  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');

      btn.setAttribute('aria-expanded', !isExpanded);
      answer.hidden = isExpanded;
      icon.textContent = isExpanded ? '+' : '−';
    });
  });


  const searchInput = document.getElementById('searchInput');
  const ritualCards = document.querySelectorAll('.ritual-card');
  const searchCount = document.getElementById('searchCount');
  const noResults = document.getElementById('noResults');

  searchInput.addEventListener('input', () => {
    const filterQuery = searchInput.value.toLowerCase().trim();
    let matchesCount = 0;

    ritualCards.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(filterQuery) || desc.includes(filterQuery)) {
        card.style.display = 'flex';
        matchesCount++;
      } else {
        card.style.display = 'none';
      }
    });

    searchCount.textContent = `Showing ${matchesCount} matching ritual(s)`;
    noResults.style.display = (matchesCount === 0) ? 'block' : 'none';
  });

  const itemForm = document.getElementById('itemForm');
  const itemInput = document.getElementById('itemInput');
  const itemList = document.getElementById('itemList');
  const itemCount = document.getElementById('itemCount');

  function updateRoutineCount() {
    itemCount.textContent = itemList.children.length;
  }

  itemForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const stepText = itemInput.value.trim();
    if (stepText === '') {
      return; 
    }


    const li = document.createElement('li');
    li.className = 'routine-li';

    const spanText = document.createElement('span');
    spanText.textContent = stepText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-remove';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Remove';

    deleteBtn.addEventListener('click', () => {
      li.remove();
      updateRoutineCount();
    });

    li.appendChild(spanText);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    itemInput.value = '';
    updateRoutineCount();
  });

});