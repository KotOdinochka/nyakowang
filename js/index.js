async function fetchGithubRepos(username) {
    return await fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json());
}

// const raw = document.getElementById("baseGit")
(async () => {
    const data = await fetchGithubRepos(`KotOdinochka`).then(r => r.slice(4));
    console.log(data)
        data.map(repos => {
            const html = `
            <div class="card backgroundGray" id="baseGit">
            <span class="title"><a href="https://github.com/${repos.full_name}">${repos.full_name}</a></span>
            <span class="description">${repos.description ? repos.description : "Unspecified"}</span>

            <div class="blocks">
                <span class="lang">
                    <i class="fas fa-code icon"></i>
                    ${repos.language ? repos.language : "Unspecified"}
                </span>
                <span class="stars">
                    <i class="far fa-star icon"></i>
                    ${repos.stargazers_count}
                </span>
                <span class="forks">
                    <i class="fas fa-code-branch icon"></i>
                    ${repos.forks}
                </span>
            </div>
        `
        $("#lastGithubReposGrid").append(html)
    })
})()
