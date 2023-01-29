const submit = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const info_p = document.getElementById("info_p");
const datahide = document.querySelector('.middle_top')
const today = document.getElementById("today");
const today_date = document.getElementById("today_date");
const hambuger = document.querySelector(".hambuger");
const navbar = document.querySelector(".navbar");


const getInfo = async (e) => {
    e.preventDefault();
    let cityval = cityname.value;
    console.log(cityval);
    if (cityval === "") {
        city_name.innerText = `Plz Enter The city name`;
        datahide.classList.add("datahide")
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=e08447d5ef3a3fa4064c16ef7e9b681f`
            const data = await fetch(url)
            const objdata = await data.json();
            const arrdata = [objdata];
            city_name.innerText = `${cityval},${arrdata[0].sys.country}`
            temp.innerText = arrdata[0].main.temp;
            const status = arrdata[0].weather[0].main;
            info_p.innerText = `${status}`;
            console.log(status);
            if (status === "Clouds") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color:#f1f2f6">';
            }
            else if (status === "Clear") {
                temp_status.innerHTML = '<i class="fa-solid fa-sun"  style="color:#eccc68"></i>';
            }
            else if (status === "Rain") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color:#a4b0be" ></i>';
            }
            else{
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68">';
            }
            datahide.classList.remove("datahide")
        }
        catch {
            city_name.innerText = `Plz Enter city name properly`;
            datahide.classList.add("datahide")
        }
    }
}
const add =()=>{
    console.log("clicked");
    navbar.classList.toggle("active")
}
submit.addEventListener('click', getInfo);
hambuger.addEventListener('click',add )

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d1 = new Date();
let day = days[d1.getDay()];
today.innerHTML = day;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name1 = month[d.getMonth()];
const d2 = new Date();
const d3=d2.getDate();
today_date.innerText=`${d3}, ${name1}`