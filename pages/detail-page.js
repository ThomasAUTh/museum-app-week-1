// Event handler
function submitComment() {
// Gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
// Elements needed
    const comment = document.createElement('section')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
// Adjusting elements
    h4.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h4)
    comment.appendChild(p)
// Display the elements on the page
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
// Reset form values
    inputField.value = null
    textArea.value = null
}