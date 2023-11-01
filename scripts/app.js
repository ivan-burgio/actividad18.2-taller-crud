let urlA = "https://6542c0fc01b5e279de1f8707.mockapi.io/users";

const btnBuscar = document.getElementById('btnGet1');
const txtBuscar = document.getElementById('inputGet1Id');

const btnAgregar = document.getElementById('btnPost');
const txtName = document.getElementById('inputPostNombre');
const txtLastName = document.getElementById('inputPostApellido');
const NameLastName = {
    name: txtName.value,
    lastName: txtLastName
}

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

function listUsersAdd() {
    let type = { method: "POST", headers: { "Content-type": "application/json; charset=UTF-8" } };
    fetchJSONData(urlA + '/' + id, type).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let users = resultObj.data
            console.log(users);
        }
    });
}

btnAgregar.addEventListener('click', () => {
    listUsersAdd(NameLastName);
});