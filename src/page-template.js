const generateTeam = teamArr => {
    return `
    ${teamArr
    .map(({role, name, id, email, github, school}) => {
        return `
        <div class="card employee-card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            <p class="id-text">ID:${id}</p>
            <p class="email-link">Email:<a href="#" class="email-link">${email}</a></p>
            <p class="github-text">Github:<a href="https://github.com/${github}" target="_blank" </a></p>
            <p class="school-text">School:${school}</p>
        </div>
        </div>
        `
    })
    .join('')}
    `
}

module.exports = templateData => {
    // destructure page data by section
    const { mName, mId, mEmail, office, employee } = templateData;

    console.log(templateData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="/src/style.css">
    </head>
    <body class="container">
        <div class="row">
            <div class= "col-12 header">
                <p>
                    My Team 
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card manager-card">
                    <div class="card-body">
                        <h5 class="card-title">${mName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                        <p class="id-text">ID:${mId}</p>
                        <p class="email-link">Email:<a href="#" class="email-link">${mEmail}</a></p>
                        <p class="office-text">Office Number:${office}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            ${generateTeam(employee)}
        </div>
    </body>
    </html>
    `;
  };