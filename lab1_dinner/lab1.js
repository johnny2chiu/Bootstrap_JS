$(function(){


    $("button").on("click",function(){
        // alert("HIHI")
        // $("h1").text("hello~~");
        // $("h1").text($("li:first").text());

        var number = $("li").length;
        var random = Math.floor(Math.random()*number);
        $("h1").text($("li").eq(random).text());

        $("img").attr("src",images[random]);


        // document.getElementsByTagName("img")[0].src=


    
    })
});

var images = [
    "https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F398324%2Fcbb643d4814055da.jpg&width=1080",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/123ntu56yu56ey-1609387329.jpg?crop=0.484xw:0.967xh;0.00817xw,0.0327xh&resize=640:*",
    "https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F355834%2Fb8ce15624e2ddb11.jpg&width=1080",

]
