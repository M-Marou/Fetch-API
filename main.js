document.getElementById('button').addEventListener('click', getData);

function getData(){
    fetch('https://api.github.com/users?client_id=6d0631d73d6948d0584c&client_secret=7d8bc24d90d2195fa81e0b9785a718e306299f4d')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(user){
            output += `
                <ul>
                    <li>ID : ${user.id}</li>
                    <li>Name : ${user.login}</li>
                    <li>Node ID : ${user.node_id}</li>
                </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}