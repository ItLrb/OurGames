const noFollowsButton = document.getElementById('ifNotFollow')

const followedProfiles = JSON.parse(localStorage.getItem("followedProfiles"));
const followedProfilesList = document.getElementById("followedProfilesList");

function displayFollowedProfiles() {
    followedProfilesList.innerHTML = "";
    if (followedProfiles && followedProfiles.length > 0) {
        // Se o usuário deu "like" em algum perfil, exiba os perfis em uma lista
        for (var i = 0; i < followedProfiles.length; i++) {
            let profileName = followedProfiles[i];
            profileName.add
            const listItem = document.createElement("li");
            noFollowsButton.style.display = 'none'

            const profileImage = document.createElement("img");
            profileImage.src = getProfileImage(profileName); // Obtém a URL da imagem do perfil
            profileImage.alt = profileName;
            profileImage.classList.add("profile-image");

            
            listItem.innerHTML = `Você seguiu o perfil de: ` +  
            `<a href="./discover.html" id="usernameLink" target="_blank">${profileName}</a>`

            // Adicione um botão de remoção ao lado de cada perfil
            const removeButton = document.createElement("button");
            removeButton.classList.add('remove-button')
            removeButton.textContent = "Unfollow";
            removeButton.dataset.profileName = profileName; // Armazena o nome do perfil como um atributo personalizado
            removeButton.addEventListener("click", function(event) {
                // Chame a função para remover o perfil da lista quando o botão for clicado
                document.location.reload()
                removeProfile(event.target.dataset.profileName)
                
            }) 
            
            listItem.appendChild(profileImage);
            listItem.appendChild(removeButton);
            followedProfilesList.appendChild(listItem);
        }
    } else if (followedProfiles && followedProfiles.length == 0) {
        const titleMain = document.querySelector('h2')
        titleMain.innerHTML = `Você ainda não seguiu nenhum perfil.`
        titleMain.classList.add("nofollows")

        noFollowsButton.style.display = 'flex'
    }
}
function getProfileImage(profileName) {
    // Mapeie os nomes dos perfis para as URLs das imagens de perfil correspondentes
    const profileImageUrls = {
        "Criador": "https://i.pinimg.com/564x/4e/12/6c/4e126c11e671154288dcc56ff6522331.jpg",
        "Brazilispower": "https://cdn.discordapp.com/avatars/862423940080336987/c12075e43c3b0db05feb54bae7a60816.png?size=2048",
        // Adicione mais perfis e URLs de imagens, se necessário
    };

    return profileImageUrls[profileName] || ''; // Retorna a URL da imagem do perfil com base no nome do perfil
}


displayFollowedProfiles(); // Exibe os perfis iniciais

function removeProfile(profileName) {
    // Recupere a lista de perfis "liked" da localStorage
    const followedProfiles = JSON.parse(localStorage.getItem("followedProfiles"));

    // Encontre o índice do perfil a ser removido
    let index = followedProfiles.indexOf(profileName);

    if (index !== -1) {
        // Remova o perfil da lista
        followedProfiles.splice(index, 1);

        // Atualize a localStorage com a nova lista
        localStorage.setItem("followedProfiles", JSON.stringify(followedProfiles));

        var listItemToRemove = document.querySelector(`li:contains("${profileName}")`);
        if (listItemToRemove) {
            listItemToRemove.remove()
        }
    }
}