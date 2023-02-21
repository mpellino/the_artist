document.addEventListener('click', event => {
  const isDropDownButton = event.target.matches('[data-dropdown-button]') // check if click is on a dropdown button
  if (!isDropDownButton && event.target.closest('[data-dropdown]') != null) return // if click is not on a dropdown button and is inside a dropdown, do nothing

 let currentDropDown
  if (isDropDownButton) {
    currentDropDown = event.target.closest('[data-dropdown]') // get the dropdown
    currentDropDown.classList.toggle('active') // toggle the active class
  }

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropDown) return
    dropdown.classList.remove('active')
  })
})