const buttons = document.querySelectorAll('.tab-container .buttons button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => showTab(i) );
}

function showTab(tabNumber) {
    const tabs = document.querySelectorAll('.tab-container .tabs div');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle('active', tabNumber === i);
        buttons[i].classList.toggle('active', tabNumber === i);
    }
}
