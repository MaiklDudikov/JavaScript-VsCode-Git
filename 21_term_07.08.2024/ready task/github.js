
function getUserInfo() {
    const username = document.getElementById('usernameInput').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Not Found') {
                alert('User not found');
                return;
            }
            displayUserInfo(data);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
}

function displayUserInfo(data) {
    const userInfo = document.getElementById('userInfo');

    userInfo.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <p>Name: ${data.name || 'No name provided'}</p>
        <p>Username: ${data.login}</p>
        <p>GitHub URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        <p>Blog: <a href="${data.blog}" target="_blank">${data.blog || 'No blog provided'}</a></p>
        <p>Location: ${data.location || 'No location provided'}</p>
        <p>Email: ${data.email || 'No email provided'}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
    `;
}
