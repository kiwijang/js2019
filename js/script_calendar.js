document.addEventListener('DOMContentLoaded',()=>{
  let selectYear = document.querySelector('#year').value;
  let selectMonth = document.querySelector('#month').value;
  setDateSelect(selectYear,selectMonth);
  setCalendar();
  document.querySelectorAll('.select_wrap > select').forEach(function(el){
    el.addEventListener('change',function(){
      setCalendar();
    })
  })
  document.getElementById('month').addEventListener('change',function(){
    selectYear = document.querySelector('#year').value;
    selectMonth = document.querySelector('#month').value;
    let selectDate = document.querySelector('#date').value;
    setDateSelectFromMY(selectYear,selectMonth,selectDate);
  })

  document.getElementById('year').addEventListener('change',function(){
    selectYear = document.querySelector('#year').value;
    selectMonth = document.querySelector('#month').value;
    let selectDate = document.querySelector('#date').value;
    setDateSelectFromMY(selectYear,selectMonth,selectDate);
  })
});
//年
(function(){
  let html = '';
  let nowYear = new Date().getFullYear();
  for(let i = nowYear - 50; i<= nowYear+50; i++){
    html += `<option ${i===nowYear? 'selected':''}>${i}</option>`;
  }
  document.querySelector("#year").innerHTML = html;
})();
//月
(function(){
  let html = '';
  let nowMonth = new Date().getMonth()+1;
  for(let i = 1; i <= 12; i++){
    html += `<option ${i===nowMonth? 'selected':''}>${i}</option>`;
  }
  document.querySelector("#month").innerHTML = html;
})();
//日
function setDateSelect(year,month){
  let html = '';
  let nowDate = new Date().getDate();
  let selectDate_last = new Date(year,month,0).getDate();
  console.log(selectDate_last);
  console.log(nowDate);
  for(let i = 1; i <= selectDate_last; i++){
    html += `<option ${i===nowDate? 'selected':''}>${i}</option>`;
  }
  document.querySelector("#date").innerHTML = html;
}

//日根據年月更新
function setDateSelectFromMY(year,month,selectdate){
  let html = '';
  let selectDate_last = new Date(year,month,0).getDate();
  for(let i = 1; i <= selectDate_last; i++){
    html += `<option ${i==selectdate? 'selected':''}>${i}</option>`;
  }
  document.querySelector("#date").innerHTML = html;
}

function setCalendar(){
  let selectYear = document.querySelector('#year').value;
  let selectMonth = document.querySelector('#month').value;
  let selectDate = document.querySelector('#date').value;
  buildCalendar(selectYear, selectMonth, selectDate);
  document.getElementById('year_h5').innerText = selectYear+ "年";
  document.getElementById('month_h5').innerText = selectMonth+ "月";
  document.getElementById('date_h5').innerText = selectDate+ "日";
  console.log(selectDate);
}

function buildCalendar(year,month,date){
  
  let html = '';
  month = month -1;
  let nowdate = new Date().getDate();
  let nowMonth = new Date().getMonth();
  let nowYear = new Date().getFullYear();
  let first = new Date(year, month, 1).getDay();
  let last = new Date(year, month+1, 0).getDate();
  let index = 1;
  for(let rows = 0; rows < 6; rows++){
    if(index > last) break;
    html += '<tr>';
    for(let cells = 0; cells < 7; cells++){
      if(index > last) break;
      if(cells+(rows*7)>=first && index === nowdate && month === nowMonth && year == nowYear){
        html += `<td class='nowDate'>`;
      }else if(cells+(rows*7)>=first && index == date){
        html += `<td class='selectDate'>`;
      }else{
        html += `<td>`;
      }
      if(cells + (rows * 7) >= first){
        html += index;
        index++;
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  document.querySelector('tbody').innerHTML = html;
}


