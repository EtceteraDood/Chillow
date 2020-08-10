
    fetch('/api/userMessages', {
        method: 'POST',
        body: JSON.stringify(userUID),
    })

        .then(response => response.json())
        .then(data => console.log(data));


