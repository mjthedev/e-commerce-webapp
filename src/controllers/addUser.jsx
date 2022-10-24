




function AddAccount() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9000/addaccount');
    xhr.send();
}

module.exports = AddAccount;