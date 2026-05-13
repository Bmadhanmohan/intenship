function openMenu(){
  document.getElementById('menuCard').classList.add('show');
}

function closeMenu(){
  document.getElementById('menuCard').classList.remove('show');
}

// ===== Form Validation Functions =====

// Validate Name - at least 3 characters, no numbers
function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  return nameRegex.test(name);
}

// Validate Email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Message - at least 10 characters
function validateMessage(message) {
  return message.trim().length >= 10;
}

// Display error message
function showError(inputId, errorMessage) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(`${inputId}Error`);
  
  if (inputElement) {
    inputElement.classList.add('is-invalid');
    inputElement.classList.remove('is-valid');
  }
  
  if (errorElement) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
  }
}

// Display success state
function showSuccess(inputId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(`${inputId}Error`);
  
  if (inputElement) {
    inputElement.classList.remove('is-invalid');
    inputElement.classList.add('is-valid');
  }
  
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

// Real-time validation for Name
function validateNameInput(event) {
  const name = event.target.value.trim();
  if (name === '') {
    showError('name', 'Name is required');
  } else if (!validateName(name)) {
    showError('name', 'Name must be at least 3 characters and contain only letters');
  } else {
    showSuccess('name');
  }
}

// Real-time validation for Email
function validateEmailInput(event) {
  const email = event.target.value.trim();
  if (email === '') {
    showError('email', 'Email is required');
  } else if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
  } else {
    showSuccess('email');
  }
}

// Real-time validation for Message
function validateMessageInput(event) {
  const message = event.target.value.trim();
  if (message === '') {
    showError('message', 'Message is required');
  } else if (!validateMessage(message)) {
    showError('message', 'Message must be at least 10 characters long');
  } else {
    showSuccess('message');
  }
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  
  // Validate all fields
  if (name === '') {
    showError('name', 'Name is required');
    isValid = false;
  } else if (!validateName(name)) {
    showError('name', 'Name must be at least 3 characters and contain only letters');
    isValid = false;
  } else {
    showSuccess('name');
  }
  
  if (email === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  } else {
    showSuccess('email');
  }
  
  if (message === '') {
    showError('message', 'Message is required');
    isValid = false;
  } else if (!validateMessage(message)) {
    showError('message', 'Message must be at least 10 characters long');
    isValid = false;
  } else {
    showSuccess('message');
  }
  
  // If all validations pass, submit
  if (isValid) {
    alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    event.target.reset();
    // Clear validation states
    document.getElementById('name').classList.remove('is-valid');
    document.getElementById('email').classList.remove('is-valid');
    document.getElementById('message').classList.remove('is-valid');
  }
}

// Initialize form validation on page load
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.querySelector('#contact form');
  
  // Attach real-time validation listeners
  if (nameInput) {
    nameInput.addEventListener('blur', validateNameInput);
    nameInput.addEventListener('input', validateNameInput);
  }
  
  if (emailInput) {
    emailInput.addEventListener('blur', validateEmailInput);
    emailInput.addEventListener('input', validateEmailInput);
  }
  
  if (messageInput) {
    messageInput.addEventListener('blur', validateMessageInput);
    messageInput.addEventListener('input', validateMessageInput);
  }
  
  // Attach form submission handler
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});