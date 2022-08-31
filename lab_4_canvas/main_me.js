let mapArray, ctx, currentImgMain, imgMountain, imgMain, imgEnemy;
const gridLength = 200;

// HTML5 Canvas Image Loader--自訂義loadImages function--start
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
// HTML5 Canvas Image Loader--自訂義loadImages function--end

$(function () {
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    }
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    }

    var sources = {
        Mountain: "images/material.png",
        Enemy: "images/Enemy.png"
    };

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    loadImages(sources, function (images) {
        // context.drawImage(images.Mountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
        // context.drawImage(images.Enemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
        // })

        for (var x in mapArray) {
            for (var y in mapArray[x]) {
                if (mapArray[x][y] == 1) {
                    context.drawImage(images.Mountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                } else if (mapArray[x][y] == 3) {
                    context.drawImage(images.Enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                }
            }
        }
    })

});

$(document).on("keydown", function (event) {
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        "x": null,
        "y": null
    };
    targetBlock = {
        "x": null,
        "y": null
    }

    // event.preventDefault();

    switch (event.code) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y- gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x /gridLength;
    }else{
        targetBlock.x=-10;
        targetBlock.y=-10;
    }
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength,gridLength);

    


})