const tabs = document.querySelectorAll('[data-tab-taget')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabConent => {
            tabContents.classList.remove('active') 
        })
        target.classList.add('active')
    })
})