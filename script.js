let cont = document.querySelector('.container')
let form = document.forms.creater
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let inp2 = modal.querySelector('input')
let cancel2 = modal.querySelector('.cancel')
let edit2 = modal.querySelector('.edit')

let todos = [
    {
        id: 1,
        completed: true,
        time: "11:22",
        task: 'Полететь в Дубай'
    },
    {
        id: 2,
        completed: false,
        time: "11:46",
        task: 'Полететь на работу'
    }
]


form.onsubmit = (e) => {
    e.preventDefault()

    let time = new Date().getHours() + ":" + new Date().getMinutes()
    let todo = {
        id: Math.random(),
        completed: false,
        time: time
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo);
    reload(todos, cont)
}


function reload(arr, place) {
    place.innerHTML = ""
    for (let item of arr) {
        let todoBox = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let h2 = document.createElement('h2')
        let spanTime = document.createElement('span')
        let cancelBtn = document.createElement('button')
        let cancelImg = document.createElement('img')
        let edit = document.createElement('button')


        todoBox.classList.add('box')
        left.classList.add('left')
        cancelImg.classList.add('cancelImg')
        right.classList.add('right')
        edit.classList.add('edit2')

        h2.innerHTML = item.task
        spanTime.innerHTML = item.time
        edit.innerHTML = "Edit"

        todoBox.append(left, right, edit)
            left.append(h2, spanTime)
        right.append(cancelBtn)
        cancelBtn.append(cancelImg)
        place.append(todoBox)

        h2.onclick = () => {
            h2.classList.toggle('active2')
            if (h2.classList.contains('active2')) {
                todos.completed = true
            } else {
                todos.completed = false
            }
            console.log(todos.completed);
        }

        cancelBtn.onclick = () => {
            todos = todos.filter(el => item.id !== el.id)
            reload(todos, cont)
        }
        edit.onclick = () => {
            modal.style.display = "block"
            modal_bg.style.display = "block"
            reload(todos, cont)
        }

        cancel2.onclick = () => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
            reload(todos, cont)
            inp2.value = ""
        }
        edit2.onclick = () => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
            item.task = inp2.value
            h4.innerHTML = item.task
            reload(todos, cont)
            inp2.value = ""
        }
    }

}

reload(todos, cont)