// Get references to the icon elements
const homeIcon = document.getElementById('homeIcon');
const estateIcon = document.getElementById('estateIcon');
const bulletinIcon = document.getElementById('bulletinIcon');
const profileIcon = document.getElementById('profileIcon');
const settingIcon = document.getElementById('settingIcon');

// Add click event listeners
homeIcon.addEventListener('click', () => {
    // Navigate to the home page
    window.location.href = '/home';
});

estateIcon.addEventListener('click', () => {
    // Navigate to the estate page
    window.location.href = '/real';
});

bulletinIcon.addEventListener('click', () => {
    // Navigate to the bulletin page
    window.location.href = '/board';
});

profileIcon.addEventListener('click', () => {
    // Navigate to the profile page
    window.location.href = '/profile_page';
});

settingIcon.addEventListener('click', () => {
    // Navigate to the setting page
    window.location.href = '/set';
});