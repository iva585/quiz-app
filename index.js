const cards = document.querySelectorAll('[data-js="card"]')

cards.forEach(card => {
  const button = card.querySelector('[data-js="toggle-answer"]')
  const hideText = card.querySelector('[data-js="hide"]')
  const showText = card.querySelector('[data-js="show"]')
  const answer = card.querySelector('[data-js="answer"]')
  const bookmark = card.querySelector('[data-js="bookmark"]')

  button.addEventListener('click', () => {
    hideText.classList.toggle('hidden-js')
    showText.classList.toggle('hidden-js')
    answer.classList.toggle('hidden-js')
  })

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--active')
  })
})
