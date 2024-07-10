function toggleCard(event) {
    event.stopPropagation(); 
    this.classList.toggle('opened'); 
    console.log('Card toggled:', this.classList.contains('opened') ? 'Opened' : 'Closed');
}

function closeCardIfOpen(event) {
    const cards = document.querySelectorAll('.card.opened');
    cards.forEach(card => {
        card.classList.remove('opened');
        console.log('Card closed from outside');
    });
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', toggleCard);
});

document.addEventListener('click', closeCardIfOpen);
