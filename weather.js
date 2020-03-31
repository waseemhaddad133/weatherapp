/*  var btn = document.getElementById("btn");
btn.addEventListener("click", execute);
const url ="http://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=a8015e6e41355584716db867bf66600c";

function execute(){fetch(url)
        .then(response => console.log(response./* status json()))
        .catch(error => console.log(error));
        }
*/
        var btn = document.getElementById("btn");
        btn.addEventListener('click', execute); 
        
        
        function execute() {
            var cityName = document.getElementById('input').value;
            var appID = '&appid=2a1a9e0b8db874779261c5697a29df1f';
            var units ='&units=metric'
            const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
            var completeUrl = baseUrl + cityName + appID +units;
            
            fetch(completeUrl).then(function (response) {
                return response.json();
            }).then((res)=>{
                document.getElementById('ff').innerText = "temp in " +  cityName + " " + (res.main.temp);
            });
        
        }





    