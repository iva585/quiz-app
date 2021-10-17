const cards = document.querySelectorAll('[data-js="card"]')

cards.forEach(card => {
  const button = card.querySelector('[data-js="toggle-answer"]')
  const hideText = card.querySelector('[data-js="hide"]')
  const showText = card.querySelector('[data-js="show"]')
  const answer = card.querySelector('[data-js="answer"]')
  const bookmark = card.querySelector('[data-js="bookmark"]')

  button.addEventListener('click', () => {
    hideText.classList.toggle('hidden')
    showText.classList.toggle('hidden')
    answer.classList.toggle('hidden')
  })

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--active')
  })
})

const pageBookmarks = getElement('bookmarks-section')
const pageHome = getElement('home-section')
const pageCreate = getElement('create-section')
const pageProfile = getElement('profile-section')

const titleHome = getElement('home-title')
const titleBookmarks = getElement('bookmarks-title')
const titleCreate = getElement('create-title')
const titleProfile = getElement('profile-title')

const iconHome = getElement('home-icon')
const iconBookmarks = getElement('bookmarks-icon')
const iconCreate = getElement('create-icon')
const iconProfile = getElement('profile-icon')

function getElement(selector) {
  return document.querySelector('[data-js="' + selector + '"]')
}

iconHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  titleHome.classList.remove('hidden')
  titleBookmarks.classList.add('hidden')
  titleCreate.classList.add('hidden')
  titleProfile.classList.add('hidden')

  iconHome.classList.add('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  titleHome.classList.add('hidden')
  titleBookmarks.classList.remove('hidden')
  titleCreate.classList.add('hidden')
  titleProfile.classList.add('hidden')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.add('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')

  titleHome.classList.add('hidden')
  titleBookmarks.classList.add('hidden')
  titleCreate.classList.remove('hidden')
  titleProfile.classList.add('hidden')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.add('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')

  titleHome.classList.add('hidden')
  titleBookmarks.classList.add('hidden')
  titleCreate.classList.add('hidden')
  titleProfile.classList.remove('hidden')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.add('navbar__icon--active')
})
