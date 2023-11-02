let urlA = "https://6542c0fc01b5e279de1f8707.mockapi.io/users";

const btnBuscar = document.getElementById('btnGet1');
const txtBuscar = document.getElementById('inputGet1Id');

const btnAgregar = document.getElementById('btnPost');

const btnModificar = document.getElementById('btnPut');
const txtModificar = document.getElementById('inputPutId');

const btnDelete = document.getElementById('btnDelete');
const txtDelete = document.getElementById('inputDelete');

let fetchJSONData = function (url, type) {
    let result = {};
    return fetch(url, type)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

function listAllUsers() {
    let type = { method: "GET", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(urlA, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

function listUsersID(id) {
    let type = { method: "GET", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(urlA + '/' + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

btnBuscar.addEventListener('click', () => {
    listUsersID(txtBuscar.value);
});

function listUsersAdd(name) {
    let type = { method: "POST", headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify(name) };
    fetchJSONData(urlA, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

btnAgregar.addEventListener('click', () => {
    const txtName = document.getElementById('inputPostNombre');
    const txtLastName = document.getElementById('inputPostApellido');
    const NameLastName = {
        name: txtName.value,
        lastname: txtLastName.value,
    }

    listUsersAdd(NameLastName);
});

function listUsersUpdate(id, infoAdd) {
    let type = { method: "PUT", headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify(infoAdd) };
    fetchJSONData(urlA + '/' + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

btnModificar.addEventListener('click', () => {
    const newName  = document.getElementById('inputPutNombre');
    const newLastName = document.getElementById('inputPutApellido');
    const newA = {
        name: newName.value,
        lastname: newLastName.value,
    }
    const infoAdd = newA;
    const userId = txtModificar.value;
    console.log(userId)
    listUsersUpdate(userId, infoAdd);
})

function listUsersDelete(id) {
    let type = { method: "DELETE", headers: { "Content-type": "application/json; charset=UTF-8" }};
    fetchJSONData(urlA + '/' + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

btnDelete.addEventListener('click', () => {
    listUsersDelete(txtDelete.value);
})

document.addEventListener('DOMContentLoaded', () => {
    
})