canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_Y=10;
car1_X=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_Y=10;
car2_X=10;

background_image="Car racing pic.jpg";
function add()
{
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src= car2_image;
}
function uploadBackground()
{
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1()
{
     ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}
function uploadCar2()
{
     ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}
canvas.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    key_pressed=e.keycode;
    if (key_pressed == 38) 
    {
        Up();
    }
    if (key_pressed == 40) 
    {
        Down();
    }
    if (key_pressed == 37) 
    {
        Left();
    }
    if (key_pressed == 39) 
    {
        Right();
    }
}