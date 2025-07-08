export async function getData(city_name) {
    let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=5dfcd0bf0f1744d5b8d122432250107&q=${city_name}&aqi=no`);
    let data = await res.json();
    return data;
}