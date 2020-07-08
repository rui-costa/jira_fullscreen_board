const version = '0.20.0708'
const link = document.createElement('link')

let hBoard = ''

const ButtonFS = function ButtonFS() {
    this.element = document.createElement('BUTTON')
    this.element.setAttribute('id', 'button_fs')
    this.element.setAttribute('class', 'aui-button aui-button-primary')
    this.element.style.float = 'left'
    this.element.style.margin = '4px 8px 0px 0px'
    this.element.innerHTML = '<span class="material-icons">settings_overscan</span>'
    this.element.addEventListener('click', () => {
        if (this.clicked) {
            document.getElementById('ghx-header').style.display = ''
            document.getElementById('navigation-app').style.display = ''
            document.getElementById('content').style.margin = ''
            document.getElementById('content').style.borderTop = ''
            document.getElementById('ghx-quick-filters').style.marginBottom = ''
            document.getElementById('ghx-work').style.height = hBoard
        } else {
            document.getElementById('ghx-header').style.display = 'none'
            document.getElementById('navigation-app').style.display = 'none'
            document.getElementById('content').style.margin = '2px'
            document.getElementById('content').style.borderTop = '2px'
            document.getElementById('ghx-quick-filters').style.marginBottom = '0px'
            document.getElementById('ghx-work').style.height = `${window.innerHeight}px`
        }

        this.click()
    })

    this.getElement = function getElement() {
        return this.element
    }

    this.clicked = false

    this.click = function click() {
        if (this.clicked) {
            this.clicked = false
            this.element.innerHTML = '<span class="material-icons">settings_overscan</span>'
        } else {
            this.clicked = true
            this.element.innerHTML = '<span class="material-icons">cancel_presentation</span>'
        }
    }
}

const button = new ButtonFS()

function init() {
    const main = document.querySelector('#ghx-quick-filters')

    if (main === null || main === undefined) {
        // try again in 500ms
        const ms = 1000
        setTimeout(init, ms)
    } else {
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.media = 'screen,print'
        document.getElementsByTagName('head')[0].appendChild(link)

        // eslint-disable-next-line no-console
        console.log('FSAB4JIRA : Full-Screen agile board mode for Jira')
        // eslint-disable-next-line no-console
        console.log(`FSAB4JIRA : Loading version ${version}`)

        // NOTE: Observe for modifications of content when navigating pages
        const observer = new MutationObserver(() => {
            if (document.querySelector('#button_fs') === null || document.querySelector('#button_fs') === undefined) {
                main.insertBefore(button.getElement(), main.childNodes[0])
            }
        })
        observer.observe(main, { subtree: true, childList: true })

        // initiliaze
        hBoard = document.getElementById('ghx-work').style.height
    }
}

init()
