const flexCards = document.querySelectorAll('.flex-card');
flexCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flex-card--active')
    })
})