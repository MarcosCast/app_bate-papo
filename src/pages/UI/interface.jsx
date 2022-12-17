function Interface() {
    return (
      <body>
        <div class="container">
        <br />
          <div class="jumbotron">
            <h1 class="display-4">Send Message</h1>
            <br />
            <input id = "name" class="form-control" placeholder="Name"/>
            <br />
            <textarea id = "message" class="form-control" placeholder="Your Message Here">
            </textarea>
            <br />
            <button id="send" class="btn btn-success">Send</button>
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