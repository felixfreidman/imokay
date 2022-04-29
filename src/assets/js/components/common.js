const flexCards = document.querySelectorAll('.flex-card');
flexCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flex-card--active')
    })
})
const faqCards = document.querySelectorAll('.faq-parent__card ');
faqCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('faq-parent__card--active')
    })
})