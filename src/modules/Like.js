import $ from "jquery"

class Like{
    constructor(){
        this.events();
    }

    events(){
        $(".like-box").on("click", this.ourClickDispatcher.bind(this));
    }


    //methods

    ourClickDispatcher(e){
        var currentLikeBox = $(e.target).closest(".like-box");

        if(currentLikeBox.data("exists") == "yes"){
            this.deleteLike(currentLikeBox);
    } else {
        this.createLike(currentLikeBox);
    }
}

    createLike(currentLikeBox) {
       $.ajax({
         beforeSend: (xhr) => {
            xhr.setRequestHeader("X-WP-Nonce", universityData.nonce);
        }
        url: universityData.root_url + "/wp-json/university/v1/manageLike",
        type: "POST",
        success: (response) => {console.log("Congrats, you created a new like!"); console.log(response);},
        error: (response) => { console.log("Sorry, you could not create a new like."); console.log(response);},
        data: {professorId: currentLikeBox.data("professor")},
       });
    }

    deleteLike(currentLikeBox){
       $.ajax({
        beforeSend: (xhr) => {
            xhr.setRequestHeader("X-WP-Nonce", universityData.nonce);
        }
       })
    }
}

export default Like;