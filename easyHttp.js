//Constructor
function easyHttp (){
    this.http = new XMLHttpRequest();
}

//GET Method
easyHttp.prototype.get = function(url,callback){
    //Open
    this.http.open('GET', url, true);

    //onload
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
             callback(null ,self.http.responseText);
        }else{
            callback('Error:'+ self.http.status);
        }
    }
    //Send
    this.http.send();
}

//POST method
easyHttp.prototype.post = function(url, post, callback) {
    //open
    this.http.open('POST', url, true);

    //Set Headers
    this.http.setRequestHeader('Content-type', 'application/json');

    //onload
    let self = this;
    this.http.onload = function() {
          callback(null, this.responseText);

    }

    //Send POST
    this.http.send(JSON.stringify(post));
}

//PUT method
easyHttp.prototype.put = function (url,post,callback) {
  this.http.open('PUT',url,true);
  //Set Headers
  this.http.setRequestHeader('Content-type', 'application/json');

  //onload
  let self = this;
  this.http.onload = function() {
        callback(null, this.responseText);
  }

  this.http.send(JSON.stringify(post));

}

//DELETE Method
easyHttp.prototype.delete = function (url,callback) {
  this.http.open('DELETE',url,true);


  //onload

  let self = this;
  this.http.onload = function(){
      if(self.http.status === 200){
           callback(null, 'Post Deleted Succesfully!');
      }else{
          callback('Error:'+ self.http.status);
      }
  }

  this.http.send();

}
