const weather = $('#result');
const getWeather = (value, coords) => fetch(`http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=${value}, ${coords}`)
        .then(response => {
            return response.json();
        }).then(data => {
                let element1 = document.createElement('div');
                let element2 = document.createElement('div');
                let element3 = document.createElement('div');
                let element4 = document.createElement('div');
                    weather.append(element1);
                    weather.append(element2);
                    weather.append(element3);
                    weather.append(element4);
                    element1.append(data.location.localtime);
                    element2.append(data.location.country);
                    element3.append(data.location.name);
                    element4.append(data.current.feelslike_c);
                element1.id = "elem";
                element2.id = "elem";
                element3.id = "elem";
                element4.id = "elem"; 
        }).catch(()=> {
            console.log("Booo");
        })
export default getWeather;