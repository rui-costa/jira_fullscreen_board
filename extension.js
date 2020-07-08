(async function main() {
    // eslint-disable-next-line no-console
    console.time('FSAB4JIRA : Script loaded from github')

    const response = await fetch('https://raw.githubusercontent.com/rui-costa/jira_fullscreen_board/master/code.js')
    const scriptText = await response.text()
    const script = document.createElement('SCRIPT')
    script.type = 'text/javascript'
    script.text = scriptText
    document.body.appendChild(script)
    // eslint-disable-next-line no-console
    console.timeEnd('FSAB4JIRA : Script loaded from github')
}())
