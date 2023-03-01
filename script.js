document.addEventListener('click', event => {
  const isDropDownButton = event.target.matches('[data-dropdown-button]') // check if click is on a dropdown button
  if (!isDropDownButton && event.target.closest('[data-dropdown]') != null) return // if click is not on a dropdown button and is inside a dropdown, do nothing

  const isLogo = event.target.matches('[data-logo]')
  if (isLogo) {
    const logoSpinning = [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(360deg) scale(0)" },
      { transform: "rotate(0) scale(1)" },
    ];

    const logoTiming = {
      duration: 8000,
      iterations: 1,
    };

    let logo = document.querySelector('[data-logo]')
    logo.animate(logoSpinning, logoTiming)

  } else {

    let currentDropDown
    if (isDropDownButton) {
      currentDropDown = event.target.closest('[data-dropdown]') // get the dropdown
      currentDropDown.classList.toggle('active') // toggle the active class
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropDown) return
      dropdown.classList.remove('active')
    })


  }
})

