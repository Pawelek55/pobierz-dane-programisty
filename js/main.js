//Efekt obu bloków kodu jest identyczny!


/*$(document).ready(function(){
    
    $("button").click(function(){
//        console.log('Pablito');
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
            console.log(data);
            $('#dane-programisty').append(data.imie + ' ' + data.nazwisko + ' ' + data.zawod + ' ' + data.firma);     
        })
    })
});*/



$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
            $.each(data, function(i, content){
                $("#dane-programisty").append(content + " ");
            });
        });
    });
});



