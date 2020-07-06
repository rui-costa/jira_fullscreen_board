const version  = '0.20.0706'

const buttonFS = function () {

    this.element = document.createElement('BUTTON')
    this.element.setAttribute('id', 'button_fs')
    this.element.setAttribute('class', 'aui-button aui-button-primary')
    this.element.style.float = 'left'
    this.element.style.margin = '4px 8px 0px 0px'
    this.element.innerHTML = '<span class="material-icons">settings_overscan</span>'
    this.element.addEventListener('click', toogle)

    this.getElement = function () {
        return this.element
    }

    this.clicked = false

    this.toogle = function () {
        if (this.clicked) {
            '<span class="material-icons">settings_overscan</span>'
            this.clicked = false
        } else {
            '<span class="material-icons">cancel_presentation</span>'
            this.clicked = true
        }

    }
}

const link = document.createElement('link')

let button = new buttonFS()
let hBoard = ''

function init() {
    fullscreen = false

    let main = document.querySelector('#ghx-quick-filters')

    if (main === null || main == undefined) {
        // try again in 500ms
        let ms = 1000
        setTimeout(init, ms)
    } else {

        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.media = 'screen,print'
        document.getElementsByTagName('head')[0].appendChild(link)

        console.log(`FSAB4JIRA : Full-Screen agile board mode for Jira`)
        console.log(`FSAB4JIRA : Loading version ${version}`)

        //Observe for modifications of content when navigating pages
        const observer = new MutationObserver(function () {

            if (document.querySelector('#button_fs') === null || document.querySelector('#button_fs') === undefined) {
                main.insertBefore(button.getElement(), main.childNodes[0])
            }
        })
        observer.observe(main, { subtree: true, childList: true })

        // initiliaze
        hBoard = document.getElementById('ghx-work').style.height

    }
}

function toogle() {

    if (button.clicked) {
        document.getElementById('ghx-header').style.display = ''
        document.getElementById('navigation-app').style.display = ''
        document.getElementById('content').style.margin = ''
        document.getElementById('content').style.borderTop = ''
        document.getElementById('ghx-quick-filters').style.marginBottom = ''
        document.getElementById('ghx-work').style.height = hBoard
        fullscreen = false
    } else {
        document.getElementById('ghx-header').style.display = 'none'
        document.getElementById('navigation-app').style.display = 'none'
        document.getElementById('content').style.margin = '2px'
        document.getElementById('content').style.borderTop = '2px'
        document.getElementById('ghx-quick-filters').style.marginBottom = '0px'
        document.getElementById('ghx-work').style.height = window.innerHeight + 'px'
        fullscreen = true
    }

    button.toogle()
}

init()
