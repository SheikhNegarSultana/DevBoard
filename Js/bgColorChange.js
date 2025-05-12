function bgColor() {
    const themeBtn = document.getElementById('themeBtn');
    const colors = ['#077CCC', '#09A1E5', '#49B296', '#622876', '#89C247', '#962B7C', '#CB2E81', '#FF3187', '#FF5178', '#FF9259', '#FFB24A', '#FFD23B'];
    let index = 0;

    themeBtn.addEventListener('click', () => {
        const bg = document.getElementById('bg');
        bg.style.background = colors[index];
        index = (index + 1) % colors.length;
    });
}
bgColor();