// script.js
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateIcon();
  updateBubbleColors();
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', theme);
  updateIcon();
  updateBubbleColors();
});

function updateIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

function updateBubbleColors() {
  const bubbles = document.querySelectorAll('.bg-bubbles li');
  const bubbleColor = body.classList.contains('dark-mode') ? 
    'rgba(74, 137, 220, 0.1)' : 'rgba(110, 142, 251, 0.15)';
  
  bubbles.forEach(bubble => {
    bubble.style.backgroundColor = bubbleColor;
  });
}

// Content Switching
document.addEventListener('DOMContentLoaded', function() {
    const footerItems = document.querySelectorAll('.footer-item');
    
    footerItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!this.classList.contains('active') && this.dataset.target) {
                // Remove active class from all footer items
                footerItems.forEach(footerItem => {
                    footerItem.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the target content section with animation
                const target = this.dataset.target;
                const targetSection = document.querySelector(`.${target}`);
                targetSection.classList.add('active');
                
                // Add a temporary animation class
                targetSection.classList.add('animate-in');
                setTimeout(() => {
                    targetSection.classList.remove('animate-in');
                }, 500);
            }
        });
    });
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);