const linksSocialMedia = {
  github: 'JSaporski',
  instagram: 'jg.saporski',
  facebook: 'jg.saporski'
}

function changeSocialMediaLinks() {
  for (let li of listLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })

  // alert(url)
}

getGitHubProfileInfos()
