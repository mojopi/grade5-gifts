var bigArray = [


    {
        name: "ada",
        presentPictureUrl: "ada/ada.png",
        audioUrl: "ada/ada.m4a"
    },


    {
        name: "alexa",
        presentPictureUrl: "alexa/alexa.jpg",
        audioUrl: "ada/ada.m4a"
    },



    {
        name: "alexaG",
        presentPictureUrl: "alexaG/alexaG.png",
        audioUrl: "alexaG/alexaG.m4a"
    },

    {
        name: "amaya",
        presentPictureUrl: "amaya/amaya.png",
        audioUrl: "amaya/amaya.m4a"
    },

    {
        name: "aria",
        presentPictureUrl: "aria/aria.jpg",
        audioUrl: "aria/aria.m4a"

    },



    {
        name: "arianne",
        presentPictureUrl: "arianne/arianne.png",
        audioUrl: "arianne/arianne.m4a"
    },




    {
        name: "asher",
        presentPictureUrl: "asher/asher.jpg",
        audioUrl: "asher/asher.m4a"
    },

    {
        name: "ayah",
        presentPictureUrl: "ayah/ayah.png",
        audioUrl: "ayah/ayah.m4a"
    },

    {
        name: "beatrice",
        presentPictureUrl: "beatrice/beatrice.jpg",
        audioUrl: "beatrice/beatrice.m4a"
    },

    {
        name: "ben",
        presentPictureUrl: "ben/ben.png",
        audioUrl: "ben/ben.m4a"
    },

    {
        name: "clara",
        presentPictureUrl: "clara/clara.png",
        audioUrl: "clara/clara.m4a"
    },

     {
        name: "charlotte",
        presentPictureUrl: "charlotte/charlotte.png",
        // audioUrl: "reese/reese.m4a"
    },

    {
        name: "cooper",
        presentPictureUrl: "cooper/cooper.png",
        audioUrl: "cooper/cooper.m4a"
    },

    {
        name: "danny",
        presentPictureUrl: "danny/danny.png",
        audioUrl: "danny/danny.m4a"
    },

    {
        name: "dean",
        presentPictureUrl: "dean/dean.jpg",
        audioUrl: "dean/dean.m4a"
    },

    {
        name: "dylan",
        presentPictureUrl: "dylan/dylan.png",
        audioUrl: "dylan/dylan.m4a"
    },

    {
        name: "emilia",
        presentPictureUrl: "emilia/emilia.png",
        audioUrl: "emilia/emilia.m4a"
    },



    {
        name: "henry",
        presentPictureUrl: "henry/henry.png",
        audioUrl: "henry/henry.m4a"
    },

    {
        name: "james",
        presentPictureUrl: "james/james.png",
        audioUrl: "james/james.m4a"
    },


    {
        name: "kai",
        presentPictureUrl: "kai/kai.png",
        audioUrl: "kai/kai.m4a"

    },


    {
        name: "kate",
        presentPictureUrl: "kate/kate.png"
    },



    {
        name: "laila",
        presentPictureUrl: "laila/laila.png",
        audioUrl: "laila/laila.m4a"
    },

    {
        name: "leon",
        presentPictureUrl: "leon/leon.png",
        audioUrl: "leon/leon.m4a"
    },


    {
        name: "lily",
        presentPictureUrl: "lily/lily0.png"
        
    },

     {
        name: "lorenzo",
        presentPictureUrl: "lorenzo/lorenzo.png",
        // audioUrl: "lorenzo/lorenzo.m4a"
    },



    {
        name: "maiya",
        presentPictureUrl: "maiya/maiya.png",
        audioUrl: "maiya/maiya.m4a"

    },

       {
        name: "marcellus",
        presentPictureUrl: "marcellus/marcellus.png",
        // audioUrl: "reese/reese.m4a"
    },

    {
        name: "maxwell",
        presentPictureUrl: "maxwell/maxwell.png",
        audioUrl: "maxwell/maxwell.m4a"
    },





    {
        name: "nate",
        presentPictureUrl: "nate/nate.jpg",
        audioUrl: "nate/nate.m4a"
    },

    {
        name: "noa",
        presentPictureUrl: "noa/noa.jpg",
        audioUrl: "noa/noa.m4a"
    },

    {
        name: "rafeala",
        presentPictureUrl: "rafeala/rafeala.png",
        // audioUrl: "reese/reese.m4a"
    },


    {
        name: "reese",
        presentPictureUrl: "reese/reese.png",
        audioUrl: "reese/reese.m4a"
    },

    {
        name: "saira",
        presentPictureUrl: "saira/saira.png",
        audioUrl: "saira/saira.m4a"
    },

    {
        name: "sanaa",
        presentPictureUrl: "sanaa/sanaa.jpg",
        audioUrl: "sanaa/sanaa.m4a"
    },



    {
        name: "shelby",
        presentPictureUrl: "shelby/shelby.png",
        audioUrl: "shelby/shelby.m4a"
    },



    {
        name: "shiv",
        presentPictureUrl: "shiv/shiv.png",
        audioUrl: "shiv/shiv.m4a"
    },

    {
        name: "stephanie",
        presentPictureUrl: "stephanie/stephanie.jpg",
        audioUrl: "stephanie/stephanie.m4a"
    },

       {
        name: "steph",
        presentPictureUrl: "steph/steph.png",
        // audioUrl: "reese/reese.m4a"
    },


    {
        name: "taylor",
        presentPictureUrl: "taylor/taylor.jpg",
        audioUrl: "taylor/taylor.m4a"

    }
















];

var section3 = document.getElementById('section3');

function makeSquare(x) {
    var link = document.createElement('a');
    link.href = "./names/" + bigArray[x].name + "/" + bigArray[x].name + ".html";
    section3.appendChild(link);


    var square = document.createElement('div');
    link.appendChild(square);
    square.classList.add('square');
    square.id = "square" + x;
    square.style.marginBottom = "100px";




    square.style.backgroundImage = "url(./names/" + bigArray[x].presentPictureUrl + ")";




    var counter = 0;


    var title = document.createElement('div');
    square.appendChild(title);
    title.classList.add('title');
    title.innerText = bigArray[x].name;

    var audio = document.createElement('audio');
    audio.src = "./species/" + bigArray[x].audioUrl;
    title.appendChild(audio);
    title.addEventListener('click', function() {
        console.log("ah!");
        counter = counter + 1;
        if (counter % 2 == 1) { audio.play(); } else if (counter % 2 == 0) { audio.pause(); }

        ;

    });



    //     var count=0;

    //     square.addEventListener('click', function() {
    //         count = count+1;
    //     if (count % 2 == 1) {square.style.backgroundImage = "url(./species/" + bigArray[x].absentPictureUrl + ")";} 
    //     else if (count % 2 == 0) {
    //          square.style.trasition="2s";
    //          square.style.backgroundImage = "url(./species/" + bigArray[x].presentPictureUrl + ")";

    // }});

};


for (var i = 0; i < 100; i++) { makeSquare(i); }