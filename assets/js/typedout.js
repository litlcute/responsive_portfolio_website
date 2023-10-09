const text = "I'm Yue Niu";
let index = 0;
let isDeleting = false;

function typeEffect() {
    let output = document.getElementById("typed-output");

    let typingSpeed = 80; // 这里调整打字速度
    let deletingSpeed = 50; // 这里调整删除速度
    let speed = isDeleting ? deletingSpeed : typingSpeed; 

    if (!isDeleting && index < text.length) {
        output.textContent += text.charAt(index);
        index++;
    } else if (isDeleting && index > 0) {
        output.textContent = text.substring(0, index);
        index--;
    } 

    if (index === text.length) {
        isDeleting = true;
        speed = 2000; // 在开始删除之前的停顿
    } else if (index === 0 && isDeleting) {
        isDeleting = false;
        speed = 1000; // 在开始打字之前的停顿
        output.textContent = "";  // 确保在开始新的打字循环之前清空文本
    }

    setTimeout(typeEffect, speed);
}

window.onload = typeEffect;




