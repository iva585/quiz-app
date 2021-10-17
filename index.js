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
  pageHome.classList.remove('hidden-js')
  pageBookmarks.classList.add('hidden-js')
  pageCreate.classList.add('hidden-js')
  pageProfile.classList.add('hidden-js')

  titleHome.classList.remove('hidden-js')
  titleBookmarks.classList.add('hidden-js')
  titleCreate.classList.add('hidden-js')
  titleProfile.classList.add('hidden-js')

  iconHome.classList.add('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden-js')
  pageBookmarks.classList.remove('hidden-js')
  pageCreate.classList.add('hidden-js')
  pageProfile.classList.add('hidden-js')

  titleHome.classList.add('hidden-js')
  titleBookmarks.classList.remove('hidden-js')
  titleCreate.classList.add('hidden-js')
  titleProfile.classList.add('hidden-js')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.add('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden-js')
  pageBookmarks.classList.add('hidden-js')
  pageCreate.classList.remove('hidden-js')
  pageProfile.classList.add('hidden-js')

  titleHome.classList.add('hidden-js')
  titleBookmarks.classList.add('hidden-js')
  titleCreate.classList.remove('hidden-js')
  titleProfile.classList.add('hidden-js')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.add('navbar__icon--active')
  iconProfile.classList.remove('navbar__icon--active')
})

iconProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden-js')
  pageBookmarks.classList.add('hidden-js')
  pageCreate.classList.add('hidden-js')
  pageProfile.classList.remove('hidden-js')

  titleHome.classList.add('hidden-js')
  titleBookmarks.classList.add('hidden-js')
  titleCreate.classList.add('hidden-js')
  titleProfile.classList.remove('hidden-js')

  iconHome.classList.remove('navbar__icon--active')
  iconBookmarks.classList.remove('navbar__icon--active')
  iconCreate.classList.remove('navbar__icon--active')
  iconProfile.classList.add('navbar__icon--active')
})
