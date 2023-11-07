document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        const offset = -currentSlide * (100 / totalSlides); // 각 슬라이드의 너비 비율에 따라 offset 계산
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    // 5초마다 nextSlide 함수를 호출하여 슬라이드를 전환
    setInterval(nextSlide, 5000);
});
