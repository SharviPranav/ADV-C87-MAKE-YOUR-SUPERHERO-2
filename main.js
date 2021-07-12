var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var block_img_object="";
var player_object="";
function player_update (){
    fabric.Image.fromURL("spiderman_body.png",function(Img){
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
function new_img_of_block(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",my_key_down);
//new_img_of_block("yellow_wall.png");
function my_key_down(e){
    key_pressed=e.keyCode;
    console.log (key_pressed);
    if(e.shiftKey==true && key_pressed=='80' ){
        console.log ("p and shift presssed together");
        block_img_width= block_img_width+10;
        block_img_height= block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width
        document.getElementById("current_height").innerHTML=block_img_height;
        
    }
    if(e.shiftKey==true && key_pressed=='77'){
        console.log("m and shift presssed together");
        block_img_width= block_img_width-10;
        block_img_height= block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(key_pressed=='38'){
        up();
        console.log ("up");
    }
        
    if(key_pressed=='40'){
        down();
        console.log ("down");
    }

    if(key_pressed=='37'){
        left();
        console.log ("left");
    }
    
    if(key_pressed=='39'){
        right();
        console.log ("right");
    }
    
    if(key_pressed=='73'){
        new_img_of_block("ironman_body.png");
        console.log ("i");
    }
    
    if(key_pressed=='83'){
        new_img_of_block("ironman_face.png");
        console.log ("g");
    }
    
    if(key_pressed=='76'){
        new_img_of_block("ironman_left_hand.png");
        console.log ("l");
    }
    
    if(key_pressed=='84'){
        new_img_of_block("ironman_legs.png");
        console.log ("t");
    }
    
    if(key_pressed=='82'){
        new_img_of_block("ironman_right_hand.png");
        console.log ("r");
    }
    
    if(key_pressed=='89'){
        new_img_of_block("hulk_face.png");
        console.log ("y");
    }
    
    if(key_pressed=='68'){
        new_img_of_block("hulk_left_hand.png");
        console.log ("d");
    }
    
    if(key_pressed=='67'){
        new_img_of_block("hulk_legs.png");
        console.log ("c");
    }
    
    if(key_pressed=='85'){
        new_img_of_block("hulk_right_hand.png");
        console.log ("u");
    }
    if(key_pressed=='90'){
        new_img_of_block("hulkd_body.png");
        console.log ("z");
    }

}
function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log ("block img width=" +block_img_width);
        console.log ("x:" +player_x + "y:" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<850){
        player_x=player_x+block_img_width;
        console.log ("block img width=" +block_img_width);
        console.log ("x:" +player_x + "y:" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log ("block img height=" +block_img_height);
        console.log ("x:" +player_x + "y:" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){
    if(player_y<460){
        player_y=player_y+block_img_height;
        console.log ("block img height=" +block_img_height);
        console.log ("x:" +player_x + "y:" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}