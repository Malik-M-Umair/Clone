const accordion=document.getElementsByClassName('contentBx');
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
function emailsend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "malikMuhammadUmair6@gmail.com",
        Password : "2AF37679B5065A3B60AB083850501E01AA4D",
        To : 'malikmuhammadumair6@gmail.com',
        From : "malikMuhammadUmair6@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if(message=='ok'){
            swal("Submitted Successfully", "We will Verify!", "success", {
                button: "Ok",
              });
        }
        else{
            swal("Submitted Successfully", "We will Verify!", "success", {
                button: "Ok",
              });
        }
      }
    );
    
}
