// Initialize the page on load
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    displayContent();
});

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    // Store data in localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
    
    // Clear form and display content
    this.reset();
    displayContent();
});

// Load user data from localStorage
function loadUserData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    
    if (name && age) {
        document.getElementById('name').value = name;
        document.getElementById('age').value = age;
    }
}

// Display personalized content
function displayContent() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    
    if (!name || !age) {
        document.getElementById('content').innerHTML = '';
        return;
    }
    
    // Personalized greeting with template literal
    const greeting = `Welcome, ${name}! 👋`;
    
    // Calculate age in months
    const ageInMonths = calculateAgeInMonths(age);
    
    // Check if user is 18+
    const ageContent = age >= 18 
        ? '✅ You can access all content' 
        : '⚠️ Some content is restricted for users under 18';
    
    // Display motivational quotes using loop
    let quotesHTML = '';
    const quote = '🌟 Success is the sum of small efforts repeated day in and day out.';
    for (let i = 0; i < 5; i++) {
        quotesHTML += `<p>${quote}</p>`;
    }
    
    // Combine all content
    const html = `
        <h2 class="greeting">${greeting}</h2>
        <p class="age-info">You are <strong>${age}</strong> years old (${ageInMonths} months)</p>
        <p class="age-restriction">${ageContent}</p>
        <div class="quotes-section">
            <h3>Daily Motivation</h3>
            ${quotesHTML}
        </div>
    `;
    
    document.getElementById('content').innerHTML = html;
}

// Calculate age in months
function calculateAgeInMonths(age) {
    return age * 12;
}