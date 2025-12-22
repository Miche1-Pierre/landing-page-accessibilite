const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// MODAL GALERIE
// ===================================

const galleryModal = document.getElementById('gallery-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const galleryItems = document.querySelectorAll('.gallery-item');
let lastFocusedElement = null;

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imageSrc = item.getAttribute('data-image');
    const imageAlt = item.getAttribute('data-alt');
    const description = item.getAttribute('data-description');

    lastFocusedElement = item;

    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalTitle.textContent = imageAlt;
    modalDescription.textContent = description;

    galleryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      modalClose.focus();
    }, 100);
  });
});

function closeModal() {
  galleryModal.classList.add('hidden');
  document.body.style.overflow = '';

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !galleryModal.classList.contains('hidden')) {
    closeModal();
  }
});

const modelStats = {
  a290: {
    year: '2024',
    speed: '285 km/h',
    acceleration: '3.2s',
    weight: '1479 kg'
  },
  a390: {
    year: '2024',
    speed: '300 km/h',
    acceleration: '3.0s',
    weight: '1520 kg'
  },
  a110: {
    year: '2017',
    speed: '250 km/h',
    acceleration: '4.5s',
    weight: '1103 kg'
  },
  a110s: {
    year: '2019',
    speed: '260 km/h',
    acceleration: '4.4s',
    weight: '1114 kg'
  },
  a110r: {
    year: '2022',
    speed: '285 km/h',
    acceleration: '3.9s',
    weight: '1082 kg'
  },
  a110gts: {
    year: '2024',
    speed: '275 km/h',
    acceleration: '4.2s',
    weight: '1120 kg'
  }
};

const modelSelectors = document.querySelectorAll('.model-selector');

if (modelSelectors.length > 0) {
  modelSelectors.forEach(button => {
    button.addEventListener('click', () => {
      const selectedModel = button.getAttribute('data-model');
      const stats = modelStats[selectedModel];

      if (stats) {
        document.querySelector('[data-stat="year"]').textContent = stats.year;
        document.querySelector('[data-stat="speed"]').textContent = stats.speed;
        document.querySelector('[data-stat="acceleration"]').textContent = stats.acceleration;
        document.querySelector('[data-stat="weight"]').textContent = stats.weight;

        modelSelectors.forEach(btn => {
          btn.setAttribute('aria-pressed', 'false');
          btn.classList.remove('bg-[#0055A4]', 'text-white');
          btn.classList.add('hover:bg-muted');
        });

        button.setAttribute('aria-pressed', 'true');
        button.classList.add('bg-[#0055A4]', 'text-white');
        button.classList.remove('hover:bg-muted');
      }
    });
  });
}

// ===================================
// ACCESSIBILITÉ
// ===================================
const accessibilitySettings = {
  fontSize: 'normal',
  fontStyle: 'normal',
  lineSpacing: 'normal',
  highContrast: false
};

function loadAccessibilitySettings() {
  const saved = localStorage.getItem('accessibilitySettings');
  if (saved) {
    Object.assign(accessibilitySettings, JSON.parse(saved));
    applyAccessibilitySettings();
  }
}

function saveAccessibilitySettings() {
  localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
}

function applyAccessibilitySettings() {
  const html = document.documentElement;

  html.classList.remove('font-size-small', 'font-size-normal', 'font-size-large', 'font-size-xlarge');
  html.classList.remove('font-dyslexic');
  html.classList.remove('line-spacing-relaxed', 'line-spacing-loose');
  html.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');

  html.classList.add(`font-size-${accessibilitySettings.fontSize}`);

  if (accessibilitySettings.fontStyle === 'dyslexic') {
    html.classList.add('font-dyslexic');
  }

  if (accessibilitySettings.lineSpacing !== 'normal') {
    html.classList.add(`line-spacing-${accessibilitySettings.lineSpacing}`);
  }

  html.classList.add(`contrast-${accessibilitySettings.contrast}`);
}

function updateAccessibilityButtonStates() {
  document.querySelectorAll('[data-font-size]').forEach(btn => {
    const size = btn.getAttribute('data-font-size');
    const isActive = size === accessibilitySettings.fontSize;
    btn.setAttribute('aria-pressed', isActive);
    btn.classList.toggle('bg-accent', isActive);
    if (isActive) {
      btn.setAttribute('aria-label', btn.getAttribute('aria-label').replace(')', ' (active)'));
    }
  });

  document.querySelectorAll('[data-font-style]').forEach(btn => {
    const style = btn.getAttribute('data-font-style');
    const isActive = style === accessibilitySettings.fontStyle;
    btn.setAttribute('aria-pressed', isActive);
    btn.classList.toggle('bg-accent', isActive);
  });

  document.querySelectorAll('[data-line-spacing]').forEach(btn => {
    const spacing = btn.getAttribute('data-line-spacing');
    const isActive = spacing === accessibilitySettings.lineSpacing;
    btn.setAttribute('aria-pressed', isActive);
    btn.classList.toggle('bg-accent', isActive);
  });

  document.querySelectorAll('[data-contrast]').forEach(btn => {
    const contrast = btn.getAttribute('data-contrast');
    const isActive = contrast === accessibilitySettings.contrast;
    btn.setAttribute('aria-pressed', isActive);
    btn.classList.toggle('bg-accent', isActive);
  });
}

document.querySelectorAll('[data-font-size]').forEach(btn => {
  btn.addEventListener('click', () => {
    accessibilitySettings.fontSize = btn.getAttribute('data-font-size');
    applyAccessibilitySettings();
    updateAccessibilityButtonStates();
    saveAccessibilitySettings();
  });
});

document.querySelectorAll('[data-font-style]').forEach(btn => {
  btn.addEventListener('click', () => {
    accessibilitySettings.fontStyle = btn.getAttribute('data-font-style');
    applyAccessibilitySettings();
    updateAccessibilityButtonStates();
    saveAccessibilitySettings();
  });
});

document.querySelectorAll('[data-line-spacing]').forEach(btn => {
  btn.addEventListener('click', () => {
    accessibilitySettings.lineSpacing = btn.getAttribute('data-line-spacing');
    applyAccessibilitySettings();
    updateAccessibilityButtonStates();
    saveAccessibilitySettings();
  });
});

document.querySelectorAll('[data-contrast]').forEach(btn => {
  btn.addEventListener('click', () => {
    accessibilitySettings.contrast = btn.getAttribute('data-contrast');
    applyAccessibilitySettings();
    updateAccessibilityButtonStates();
    saveAccessibilitySettings();
  });
});

const resetBtn = document.getElementById('reset-accessibility');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    accessibilitySettings.fontSize = 'normal';
    accessibilitySettings.fontStyle = 'normal';
    accessibilitySettings.lineSpacing = 'normal';
    accessibilitySettings.contrast = 'normal';
    applyAccessibilitySettings();
    updateAccessibilityButtonStates();
    saveAccessibilitySettings();
  });
}
loadAccessibilitySettings();
updateAccessibilityButtonStates();

// ===================================
// FORMULAIRE DE CONTACT
// ===================================

const contactForm = document.getElementById('contact-form');
const messageTextarea = document.getElementById('message');
const messageCount = document.getElementById('message-count');
const formSuccess = document.getElementById('form-success');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  if (!phone) return true;
  return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone);
}
function showError(fieldId, show = true) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);

  if (show) {
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('border-destructive', 'focus:ring-destructive');
    if (error) error.classList.remove('hidden');
  } else {
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('border-destructive', 'focus:ring-destructive');
    if (error) error.classList.add('hidden');
  }
}

if (messageTextarea && messageCount) {
  messageTextarea.addEventListener('input', () => {
    const length = messageTextarea.value.length;
    messageCount.textContent = `${length} caractère${length > 1 ? 's' : ''}`;

    if (messageTextarea.value.trim().length > 0) {
      showError('message', messageTextarea.value.trim().length < 10);
    }
  });
}

const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', () => {
    if (emailInput.value) {
      showError('email', !isValidEmail(emailInput.value));
    }
  });
}

const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value) {
      showError('phone', !isValidPhone(phoneInput.value));
    }
  });
}

['firstname', 'lastname', 'subject'].forEach(fieldId => {
  const field = document.getElementById(fieldId);
  if (field) {
    field.addEventListener('blur', () => {
      if (field.hasAttribute('required')) {
        showError(fieldId, !field.value.trim());
      }
    });
  }
});

// Validation checkbox consentement
const consentCheckbox = document.getElementById('consent');
if (consentCheckbox) {
  consentCheckbox.addEventListener('change', () => {
    showError('consent', !consentCheckbox.checked);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    let isValid = true;

    if (!firstname) {
      showError('firstname', true);
      isValid = false;
    } else {
      showError('firstname', false);
    }

    if (!lastname) {
      showError('lastname', true);
      isValid = false;
    } else {
      showError('lastname', false);
    }

    if (!email || !isValidEmail(email)) {
      showError('email', true);
      isValid = false;
    } else {
      showError('email', false);
    }

    if (phone && !isValidPhone(phone)) {
      showError('phone', true);
      isValid = false;
    } else {
      showError('phone', false);
    }

    if (!subject) {
      showError('subject', true);
      isValid = false;
    } else {
      showError('subject', false);
    }

    if (!message || message.length < 10) {
      showError('message', true);
      isValid = false;
    } else {
      showError('message', false);
    }

    if (!consent) {
      showError('consent', true);
      isValid = false;
    } else {
      showError('consent', false);
    }

    if (isValid) {
      formSuccess.classList.remove('hidden');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      formSuccess.focus();

      setTimeout(() => {
        contactForm.reset();
        messageCount.textContent = '0 caractère';

        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 5000);
      }, 1000);

      console.log('Formulaire soumis:', { firstname, lastname, email, phone, subject, message, consent });
    } else {
      const firstError = contactForm.querySelector('[aria-invalid="true"]');
      if (firstError) {
        firstError.focus();
      }
    }
  });

  contactForm.addEventListener('reset', () => {
    ['firstname', 'lastname', 'email', 'phone', 'subject', 'message', 'consent'].forEach(fieldId => {
      showError(fieldId, false);
    });

    if (messageCount) {
      messageCount.textContent = '0 caractère';
    }

    if (formSuccess) {
      formSuccess.classList.add('hidden');
    }
  });
}
