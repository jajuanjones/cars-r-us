import { getTechnology } from "./database.js"

const techs = getTechnology()

export const Technologies = () => {
    let html = `<h2>Technologies</h2>`
    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
}