document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const tituloInput = document.querySelector(".titulo-input");
  const postInput = document.querySelector(".post-input");
  const dataInput = document.querySelector(".data-input");
  const resposta = document.querySelector(".resp");

  btn.addEventListener("click", () => {
    const titulo = tituloInput.value;
    const post = postInput.value;
    const data = dataInput.value;

    try {
      if (titulo === "" || post === "" || data === "") {
        throw new Error("Erro: Preencha todos os campos");
      }

      const item = document.createElement("li");
      const tituloItem = document.createElement("h1");
      const itempost = document.createElement("p");
      const itemData = document.createElement("p");

      tituloItem.innerText = titulo;
      itempost.innerText = post;
      itemData.innerText = `Data: ${data}`;

      item.classList.add("post");
      tituloItem.classList.add("post-titulo");
      itempost.classList.add("post-corpo");
      itemData.classList.add("post-data");

      item.appendChild(tituloItem);
      item.appendChild(itempost);
      item.appendChild(itemData);

      const editarBotao = document.createElement("button");
      editarBotao.innerText = "Editar";
      editarBotao.addEventListener("click", () => editarPost(item));

      const excluirBotao = document.createElement("button");
      excluirBotao.innerText = "Excluir";
      excluirBotao.addEventListener("click", () => excluirPost(item));

      item.appendChild(editarBotao);
      item.appendChild(excluirBotao);

      resposta.appendChild(item);

      tituloInput.value = "";
      postInput.value = "";
      dataInput.value = "";
    } catch (e) {
      alert(e.message);
    }
  });

  function editarPost(postagem) {
    try {
      const tituloItem = postagem.querySelector(".post-titulo");
      const itempost = postagem.querySelector(".post-corpo");
      const itemData = postagem.querySelector(".post-data");

      const novoTitulo = prompt("Novo título:", tituloItem.innerText);
      const novoPost = prompt("Novo post:", itempost.innerText);
      const novaData = prompt("Nova data:", itemData.innerText.replace("Data: ", ""));

      if (novoTitulo === null || novoPost === null || novaData === null) {
        return;
      }

      if (novoTitulo === "" || novoPost === "" || novaData === "") {
        throw new Error("Erro: Preencha todos os campos");
      }

      tituloItem.innerText = novoTitulo;
      itempost.innerText = novoPost;
      itemData.innerText = `Data: ${novaData}`;
    } catch (e) {
      alert(e.message);
    }
  }

  function excluirPost(postagem) {
    try {
      postagem.remove();
    } catch (e) {
      alert(e.message);
    }
  }
});
