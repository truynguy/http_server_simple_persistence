For this assignment, write an http server that will act as a simple data store. It should respond to GET/POST/PUT/PATCH/DELETE requests for a single resource of your choosing, feel free to use express. The data coming in from a post request should be saved to a json file in a data folder in your repository, do not commit your data folder to git. For example if a request is sent to /notes with a body of {noteBody: 'hello world'} the json data in the body should be stored in it's own json file.