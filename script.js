window.addEventListener('DOMContentLoaded', (e) => {
    allMenus = document.querySelectorAll(".menu-item")
    allMenus.forEach(item => {
        item.addEventListener('mouseenter',(e) => {
            item.classList.add('menu-item_highlight')
        })
        item.addEventListener('focus',(e) => {
            item.classList.add('menu-item_highlight')
        })
        item.addEventListener('mouseleave',(e) => {
            item.classList.remove('menu-item_highlight')
        })
        item.addEventListener('blur',(e) => {
            item.classList.remove('menu-item_highlight')
        })
    });

    allItems = document.querySelectorAll(".work-item")
    allItems.forEach(item => {
        item.addEventListener('mouseenter',(e) => {
            item.classList.add('work-item_highlight')
        })
        item.addEventListener('focus',(e) => {
            item.classList.add('work-item_highlight')
        })
        item.addEventListener('mouseleave',(e) => {
            item.classList.remove('work-item_highlight')
        })
        item.addEventListener('blur',(e) => {
            item.classList.remove('work-item_highlight')
        })
    });

    allBoxes = document.querySelectorAll(".work-sample-box")
    allBoxes.forEach(box => {
        box.addEventListener('mouseenter',(e) => {
            box.classList.add('work-sample-box_highlight')
        })
        box.addEventListener('focus',(e) => {
            box.classList.add('work-sample-box_highlight')
        })
        box.addEventListener('mouseleave',(e) => {
            box.classList.remove('work-sample-box_highlight')
        })
        box.addEventListener('blur',(e) => {
            box.classList.remove('work-sample-box_highlight')
        })
    });
})