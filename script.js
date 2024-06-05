const input = document.querySelector('#taskInput')
const button = document.querySelector('button')
const listContainer = document.querySelector('#list-container')
// const listItem = document.querySelector('li');

function deleteTask(event) {
    console.log(event.target.parentElement.parentElement)
    event.target.parentElement.parentElement.remove()
}


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value !== '') {
        const newLI = document.createElement("li");
        const spanEdit = document.createElement('span');
        const spanDelete = document.createElement('span');
        const spanText = document.createElement('span');

        spanText.innerText = input.value;
        spanText.classList.add('text');

        spanEdit.innerHTML = '&#9998;'
        spanEdit.classList.add('edit')
        spanEdit.classList.add('span')

        spanDelete.innerHTML = '&#10539;'
        spanDelete.classList.add('delete')
        spanDelete.classList.add('span')

        listContainer.appendChild(newLI)
        newLI.appendChild(spanText)
        newLI.appendChild(spanEdit)
        newLI.appendChild(spanDelete)

        input.value = ""
    }
})

button.addEventListener('click', function () {
    if (input.value !== '') {
        const div = document.createElement('div');
        const newLI = document.createElement("li");
        const span = document.createElement('span');

        newLI.innerText = input.value;
        span.innerHTML = '\u00d7'

        listContainer.appendChild(newLI)
        newLI.appendChild(span)

        input.value = ""
    }
})

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN" && !e.target.classList.contains('text')) {
        const button = e.target;
        const li = e.target.parentNode
        // const ul = li.parentNode.parentNode;

        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
        else if (e.target.classList.contains('edit')) {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.innerText;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.innerHTML = '&#10003;'
            button.classList.add('tick')
            button.classList.remove('edit')
        }
        else if (e.target.classList.contains('tick')) {
            const input = li.firstElementChild;
            const span = document.createElement('span')
            span.innerText = input.value
            li.insertBefore(span, input);
            li.removeChild(input);
            button.innerHTML = '&#9998;'
            button.classList.add('edit')
            button.classList.remove('tick')
        }

    }
    else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }

    else if (e.target.classList.contains('text')) {
        e.target.parentElement.classList.toggle('checked');
    }
})
