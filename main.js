var canvas=new fabric.Canvas('myCanvas')
var super_hero_width=30;
var super_hero_height=30;
var player_x=10;
var player_y=10;
var super_hero_image="";



    
function player_update(){
    fabric.Image.fromURL("hulk.jpg",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
    }
    
    function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    super_hero_image=Img;
    super_hero_image.scaleToWidth(super_hero_width);
    super_hero_image.scaleToHeight(super_hero_height);
    super_hero_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(super_hero_image);
    });
    }

    window.addEventListener("keydown",my_keydown);
 function my_keydown(e){
keyPressed=e.keyCode;

console.log(keyPressed);


if(e.shiftKey == true && keyPressed=='80')
{console.log("shift & p are pressed together");
super_hero_height = super_hero_height + 10;
super_hero_width = super_hero_width + 10;
document.getElementById("current_width").innerHTML=super_hero_width;
document.getElementById("current_height").innerHTML=super_hero_height;
}

if(e.shiftKey == true && keyPressed == '77')
{console.log("shift & m are pressed together");
super_hero_width=super_hero_width - 10;
hero_super_height=super_hero_height - 10;
document.getElementById("current_width").innerHTML=super_hero_width;
document.getElementById("current_height").innerHTML=super_hero_height;
}

if(keyPressed == '37')
{console.log("left");
left();
}

if(keyPressed == '38')
{console.log("up");
up();
}

if(keyPressed == '39')
{console.log("right");
right();
}

if(keyPressed == '40')
{console.log("down");
down();
}

if(keyPressed == '87')
{console.log("S");
new_image('SPIDERMAN.jpg');
}

if(keyPressed == '71')
{console.log("h");
new_image('hulk-legs-.jpg');
}

if(keyPressed == '76')
{console.log("B");
new_image('Batman Head.png');
}

if(keyPressed == '76')
{console.log("c");
new_image('cyborg.jpg');
}

if(keyPressed == '76')
{console.log("m");
new_image('marvel_legends.jpg');
}
 }