function Interface() {
    return (
      <body>
        <div class="center">
        <br />
          <div class="jumbotron">
            <h1 class="display-4">Enviar Mensagem</h1>
            <br />
            <input id = "name" class="form-control" placeholder="Nome"/>
            <br />
            <textarea id = "message" class="form-control" placeholder="Sua Mensagem">
            </textarea>
            <br />
            <button id="send" class="btn btn-success">Enviar</button>
          </div>  
            <div id="messages">
            <br />
            </div>
        </div>
        <script>

        </script>
      </body>
    );
  }
  
  export default Interface;