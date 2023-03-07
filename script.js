(function () {
    const showCodeButton = document.querySelector('.code-button');
    const code = document.querySelector('.code');

    console.log(showCodeButton);

    showCodeButton.addEventListener('click', () => {
        code.classList.toggle('code-active');
        if (showCodeButton.textContent === 'SHOW CODE') {
            showCodeButton.textContent = 'HIDE CODE'
        } else {
            showCodeButton.textContent = 'SHOW CODE'
        }
    })
}())