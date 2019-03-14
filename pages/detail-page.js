function doesNotPassAllValidations(name, msg) {
    if (!msg) {
      alert('Please write a comment first.')
      return true;
    }
    if (!name) {
        alert('Please fill in your name.')
        return true;
    }
    if(msg.length > 280) {
      alert('Your comment is too long.')
      return true
    }
  
    return false
  }

// Event handler
function submitComment() {

// Gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value


// check if user input passes validations
if(doesNotPassAllValidations(name, msg)){
    return null
  }


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

