const contactAdd = document.querySelector('#contactAdd');
const add = document.querySelector('#icon');
const contacts = document.querySelector('#contacts')
const btnClose = document.querySelector('#iconClose')
const formAdd = document.querySelector('#formAdd');
const search = document.querySelector('#search');
const searchBar = document.querySelector('#searchBar');
const searchClose = document.querySelector('#searchclose');
const formSearch = document.querySelector('#formSearch input');


/////////////////////ADD///////////////////////////////////////////////////////
add.addEventListener('click', e => {
    e.target.parentElement.classList.add('d-none');
    contacts.classList.add('d-none');
    contactAdd.classList.remove('d-none');
    contactAdd.classList.add('d-block');
})

const htmlAdder = (html) => {
    contacts.innerHTML += html;
}

const createHtml = (name, phone, email) => {
    const html = `
    <li class=" border-bottom mb-3">
                        <div class=" w-100">
                            <label for="name">Name:</label>
                            <p class=" data d-inline-block w-75">${name}</p>
                        </div>
                        <div class=" w-100 position-relative">
                            <label for="phone">Phone:</label>
                            <p class=" data d-inline-block w-75">${phone}</p>
                            <i class="contactdelete fa-solid fa-trash"></i>
                        </div>
                        <div class=" w-100">
                            <label for="email">Email:</label>
                            <p class=" data d-inline-block w-75">${email}</p>
                        </div>
                    </li>`;
    return html;
}

contactAdd.addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const html = createHtml(name, phone, email);
    htmlAdder(html);
    formAdd.reset();

})
///////////////////////////////////////////////////////////////////////////////
/////////////////////////SEARCH////////////////////////////////////////////////
btnClose.addEventListener('click', () => {
    contactAdd.classList.remove('d-block');
    contactAdd.classList.add('d-none');
    add.parentElement.classList.remove('d-none');
    add.parentElement.classList.add('d-block');
    contacts.classList.remove('d-none');
    contacts.classList.add('d-block');
    formAdd.reset();
})

search.addEventListener('click', e => {
    e.target.parentElement.classList.add('d-none');
    searchBar.classList.remove('d-none');
    searchBar.classList.add('d-block');
    // contacts.classList.add('d-none');

})


searchClose.addEventListener('click', () => {
    searchBar.classList.remove('d-block');
    searchBar.classList.add('d-none');
    contacts.classList.remove('d-none');
    contacts.classList.add('d-block');
    Array.from(contacts.children).forEach(e => {
        e.classList.remove('d-none');
        e.classList.add('d-block');
    })
    search.parentElement.classList.remove('d-none');
    search.parentElement.classList.add('d-block');
})

const searchWord = words => {
    let arry = Array.from(contacts.children);
    arry.filter(e => !e.textContent.toLowerCase().includes(words))
        .forEach(e => {
            e.classList.add('d-none');
        });
    arry.filter(e => e.textContent.toLowerCase().includes(words))
        .forEach(e => {
            contacts.classList.remove('d-none');
            e.classList.add('d-block');
            e.classList.remove('d-none');
        });

};

formSearch.addEventListener('keyup', e => {
    e.preventDefault();
    const words = e.target.value.trim().toLowerCase();
    searchWord(words);
})
///////////////////////////////////////////////////////////////////////////////
/////////////////////DELETE////////////////////////////////////////////////////
contacts.addEventListener('click',e=>{
    if(e.target.classList.contains('contactdelete')){
        e.target.parentElement.parentElement.remove();
    }
})
///////////////////////////////////////////////////////////////////////////////


