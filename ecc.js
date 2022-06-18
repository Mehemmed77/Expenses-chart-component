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
    ideal_height = (day.amount/16+0.5)*2.1

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
        style="height:${ideal_height}rem;"
        onmouseover="showPrice('${day.day}')" onmouseleave="hidePrice('${day.day}')" ></div>

        <p class="very-light-text">${day.day}</p>
    </div>
    `)
    day['ideal_height'] = ideal_height*16
}


percentage_bars = document.getElementsByClassName('percentage-bars')

const showPrice = (param) => {
    for(i of week_days){
        if(i.day==param){
            price_height = i.ideal_height+28
        }
    }

    document.getElementById(`${param}-price`).style = `bottom:${price_height}px;display:block;`
}

const hidePrice = (param) => {
    document.getElementById(`${param}-price`).style = 'display:none;'
}