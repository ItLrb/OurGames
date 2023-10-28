const noLikeButton = document.getElementById('ifNotLike')

const likedProfiles = JSON.parse(localStorage.getItem("likedProfiles"));
const likedProfilesList = document.getElementById("likedProfilesList");

function displayLikedProfiles() {
    likedProfilesList.innerHTML = "";
    if (likedProfiles && likedProfiles.length > 0) {
        // Se o usuário deu "like" em algum perfil, exiba os perfis em uma lista
        for (var i = 0; i < likedProfiles.length; i++) {
            let profileName = likedProfiles[i];
            profileName.add
            const listItem = document.createElement("li");
            noLikeButton.style.display = 'none'

            const profileImage = document.createElement("img");
            profileImage.src = getProfileImage(profileName); // Obtém a URL da imagem do perfil
            profileImage.alt = profileName;
            profileImage.classList.add("profile-image");

            
            listItem.innerHTML = `Você curtiu o perfil de: ` +  
            `<a href="./discover.html" id="usernameLink">${profileName}</a>`

            // Adicione um botão de remoção ao lado de cada perfil
            const removeButton = document.createElement("button");
            removeButton.classList.add('remove-button')
            removeButton.textContent = "Remove";
            removeButton.dataset.profileName = profileName; // Armazena o nome do perfil como um atributo personalizado
            removeButton.addEventListener("click", function(event) {
                // Chame a função para remover o perfil da lista quando o botão for clicado
                document.location.reload()
                removeProfile(event.target.dataset.profileName)
                
            }) 
            
            listItem.appendChild(profileImage);
            listItem.appendChild(removeButton);
            likedProfilesList.appendChild(listItem);
        }
    } else if (likedProfiles && likedProfiles.length == 0) {
        const titleMain = document.querySelector('h2')
        titleMain.innerHTML = `Você ainda não tem nenhum curtidos.`
        titleMain.classList.add("nolikes")

        noLikeButton.style.display = 'flex'
    }
}
function getProfileImage(profileName) {
    // Mapeie os nomes dos perfis para as URLs das imagens de perfil correspondentes
    const profileImageUrls = {
        "Criador": "https://i.pinimg.com/564x/4e/12/6c/4e126c11e671154288dcc56ff6522331.jpg",
        "Brazilispower": "https://i0.wp.com/blog.bioparquedorio.com.br/wp-content/uploads/2020/11/Abu_filhote_macaco-prego-do-peito-amarelo-BioParquedoRio4.jpg?resize=1024%2C683&ssl=1",
        // Adicione mais perfis e URLs de imagens, se necessário
    };

    return profileImageUrls[profileName] || ''; // Retorna a URL da imagem do perfil com base no nome do perfil
}


displayLikedProfiles(); // Exibe os perfis iniciais

function removeProfile(profileName) {
    // Recupere a lista de perfis "liked" da localStorage
    const likedProfiles = JSON.parse(localStorage.getItem("likedProfiles"));

    // Encontre o índice do perfil a ser removido
    let index = likedProfiles.indexOf(profileName);

    if (index !== -1) {
        // Remova o perfil da lista
        likedProfiles.splice(index, 1);

        // Atualize a localStorage com a nova lista
        localStorage.setItem("likedProfiles", JSON.stringify(likedProfiles));

        var listItemToRemove = document.querySelector(`li:contains("${profileName}")`);
        if (listItemToRemove) {
            listItemToRemove.remove()
        }
    }
}