function Interface() {
    return (
      <body>
        <div class="container">
         
          <div class="jumbotron">
            <h1 class="display-4">Send Message</h1>
            
            <input id = "name" class="form-control" placeholder="Name"/>
            
            <textarea id = "message" class="form-control" placeholder="Your Message Here">
            </textarea>
            
            <button id="send" class="btn btn-success">Send</button>
          </div>  
            <div id="messages">
            
            </div>
        </div>
        <script>

        </script>
      </body>
    );
  }
  
  export default Interface;