let day;
let ideal_height;
let class_name;
let percentage_bars;
let i;
let price_height;

const week_days = [
    {
      "day": "mon",
      "amount": 17.45,
    },
    {
      "day": "tue",
      "amount": 34.91,
    },
    {
      "day": "wed",
      "amount": 52.28,
    },
    {
      "day": "thu",
      "amount": 31.07,
    },
    {
      "day": "fri",
      "amount": 23.39,
    },
    {
      "day": "sat",
      "amount": 43.28,
    },
    {
      "day": "sun",
      "amount": 25.48,
    }
  ]


const bars_container = document.getElementsByClassName('bars-container')[0]

for(day of week_days){
    ideal_height = (day.amount+0.5)*2.4

    if(day.day=='wed'){
        class_name = 'today'
    }
    else{
        class_name = 'other-day'
    }

    bars_container.insertAdjacentHTML('beforeend',`
    <div class="bars">
        <div class="show-price" id="${day.day}-price"
        style="">
            $${day.amount}
        </div>
        <div class="percentage-bars ${day.day} ${class_name}" 
        style="height:${ideal_height}px;"
        onmouseover="showPrice('${day.day}')" onmouseleave="hidePrice('${day.day}')" ></div>

        <p class="very-light-text">${day.day}</p>
    </div>
    `)
}


percentage_bars = document.getElementsByClassName('percentage-bars')

const showPrice = (param) => {
    document.getElementById(`${param}-price`).style = 'opacity:1;'
}

const hidePrice = (param) => {
    document.getElementById(`${param}-price`).style = 'opacity:0;'
}