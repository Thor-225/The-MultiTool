document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('usernameInput');
    const loginBtn = document.getElementById('loginBtn');
    const displayName = document.getElementById('displayName');

    // Ser om du allerede har eit brukernavn lagret
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        if (displayName) {
            displayName.textContent = `Welcome, ${storedUsername}! We look forward to your stay. News section is now available on front page.`;
            glemmeknapp(displayName, storedUsername);
        }
        // Bytt teksten i nyhetsboksene
        const news1 = document.getElementById('news1');
        const news2 = document.getElementById('news2');
        if (news1 && news2) {
            news1.textContent = 'Now that 2025 is over we can look at some data. An estimated  38.1 billion tonnes of carbon dioxide has been released into the atmosphere as of 2025. As many already know going at such a pace is not sustainable, but where will we go to fix this is the ultimate question. https://globalcarbonbudget.org/fossil-fuel-co2-emissions-hit-record-high-in-2025/ ';
            news2.textContent = 'Mechanical exoskeletons are being made to help everyday people who suffered from stroke, regain motor fuctions. This technology has been developed in Norway and asking the test subjects they are quite positive on their effectiveness. https://www.goodnewsnetwork.org/it-feels-like-me-again-the-worlds-first-entire-arm-exoskeleton-gives-stroke-patients-independence/ ';
        }
    }

    // Her er selve login funksjonen
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);
            displayName.textContent = `Hello, ${username}!`;
            glemmeknapp(displayName, username);
            usernameInput.value = '';
        } else {
            alert('Please enter a username.');
        }
    });
});

function glemmeknapp(displayName, username) {
    const glemknappen = document.createElement('button');
    glemknappen.textContent = 'Forget Me';
    glemknappen.classList.add('login-button');
    glemknappen.addEventListener('click', function() {
        localStorage.removeItem('username');
        displayName.textContent = '';
        // Also clear news if on index
        const news1 = document.getElementById('news1');
        const news2 = document.getElementById('news2');
        if (news1 && news2) {
            news1.innerHTML = 'Login needed before displaying news <a href="Sub.Index/Thirdindex.html">Account</a>';
            news2.innerHTML = 'Login needed before displaying news <a href="Sub.Index/Thirdindex.html">Account</a>';
        }
        // Remove the forget button
        glemknappen.remove();
    });
    const buttons = document.querySelector('.buttons');
    if (buttons) {
        buttons.appendChild(glemknappen);
    }
}
