document.getElementById('sendBtn').addEventListener('click',()=>{
    checkName();
    checkPwd();
    checkDate2();
    if(correctName && correctPwd && correctDate2){
        Swal.fire(
            '讚讚讚!',
            '成功! ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡',
            'success'
          )
        document.querySelector(".swal2-container.swal2-shown").style.zIndex = 9999;
    }else{
        correctName = false;
        correctPwd = false;
        correctDate2 = false;
        Swal.fire({
            type: 'error',
            title: '錯了喔',
            text: '以為我沒發現嗎?(^u^)'
        })
        document.querySelector(".swal2-container.swal2-shown").style.zIndex = 9999;
    }
})
document.getElementById('reset').addEventListener('click',()=>{
    checkName();
    checkPwd();
    checkDate2();
    document.getElementById("nameFeedback").innerHTML = "";
    document.getElementById("pwdFeedback").innerHTML = "";
    document.getElementById("dateFeedback").innerHTML = "";
})
let correctName = false;
let correctPwd = false;
let correctDate2 = false;
function checkName() {
    correctName = false;
    let theName = document.getElementById("name").value.trim();
    console.log(theName);
    //不可空白
    //至少兩個字以上
    //中文
    let flag1 = false;
    let flag2 = false;
    if (theName === "" || theName.length < 2) {
        console.log(theName.length);
        document.getElementById("nameFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>不可為空白，至少兩字以上";
        flag1 = false;
    } else {
        flag1 = true;
        let reg = /^[\u4e00-\u9fff]*$/;
        if(reg.test(theName)){
            flag2 = true;
        }else{
            flag2 = false;
            document.getElementById("nameFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>請輸入中文";
        }
    }
    if (flag1 && flag2) {
        document.getElementById("nameFeedback").innerHTML = "<img src='images/correct.gif' style='width: 20px; margin:0px 5px -3px 0;'>正確";
        correctName = true;
    }
}

///////////////////////https://itw01.com/VBM96EN.html
function checkPwd() {
    correctPwd = false;
    let thePwd = document.getElementById("pwd").value.trim();
    if (thePwd === "") {
        document.getElementById("pwdFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>不可為空白";
    }
    //至少6字
    else if (thePwd.length >= 6) {
        regSpe = /^.*(?=.*[!@#$%^&*.]).*$/;
        var flag1 = false;
        var flag2 = false;
        document.getElementById("pwdFeedback").innerHTML = "";
        //數字英文
        for (let i = 0; i < thePwd.length; i++) {
            let ch = thePwd.charAt(i).toUpperCase();
            if (ch >= "A" && ch <= "Z") {
                flag1 = true;
            }
            else if (ch >= "0" && ch <= "9") {
                flag2 = true;
            }
            if (flag1 && flag2) {
                break;
            }
        }
        //提示
        if (flag1 && flag2 && regSpe.test(thePwd)) {
            document.getElementById("pwdFeedback").innerHTML = "<img src='images/correct.gif' style='width: 20px; 18px; margin:0px 5px -3px 0;'>正確";
            correctPwd = true;
        }
        else if (!flag1) {
            document.getElementById("pwdFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>請輸入英文";
        } else if (!flag2) {
            document.getElementById("pwdFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>請輸入數字";
        } else if (!regSpe.test(thePwd)) {
            document.getElementById("pwdFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>必須包含特殊字元";
        }
    }
    else {
        document.getElementById("pwdFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>至少6個字以上";
    }

    //if (!regSpe.test(thePwd) || thePwd === "" || thePwd.length < 6 ) {
    //    console.log(thePwd.length);
    //    document.getElementById("pwdFeedback").innerHTML = "不可為空白，至少6個字以上,必須包含英文字母、數字、特殊字元";
    //} else {
    //    document.getElementById("pwdFeedback").innerHTML = "";
    //}
}

// function checkDate() {
//     let theDate = document.getElementById("date").value;
//     console.log(theDate);
//     if (theDate) {
//         document.getElementById("dateFeedback").innerHTML = "<img src='images/correct.gif' style='width: 20px; 18px; margin:0px 5px -3px 0;'>";
//     } else {
//         document.getElementById("dateFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>此日期不存在^q^";
//     }
// }

function checkDate2() {
    correctDate2 = false;
    let theIpDate = document.getElementById("ipdate").value;
    let arr = theIpDate.split("/");
    console.log(arr);
    // console.log(arr.join(","));
    let myInputDay = arr[2];
    console.log("使用者輸入: " + myInputDay);
    //陣列要有年月日、不得為空值(""*1=0)
    if(arr.length == 3 && arr[0]*1 > 0 && arr[1]*1 > 0 && arr[2]*1 > 0){
        //月份為索引值: 一月為0、二月為1、...所以要將使用者輸入的-1
        let dat = new Date(arr[0], arr[1]-1, arr[2]);
        //將月份設為下個月
        dat.setMonth(dat.getMonth()+1);
        //將日期設為下個月的 dat.getDate()-1 = 0，下個月的第0天就是這個月的最後一天
        dat.setDate(0);
        //將日期換為日期字串(yyyy/MM/dd 格式) 
        let lastdate = dat.toLocaleString();
        console.log(dat);
        console.log(lastdate);
        //因為轉成字串了就可使用 split 方法，取得這個月的最後一天
        let lastday = lastdate.split('/')[2].split(' ')[0];
        //日
        console.log("這個月有幾天: " + lastday);
        //字串要轉數字比對大小才沒問題(雷..)
        if (myInputDay*1 > lastday*1) {
            document.getElementById("dateFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>此日期不存在^q^";
        }
        else if(myInputDay*1 <= lastday*1 && arr.length==3 && arr[1] !="" && arr[2] !=""){
            document.getElementById("dateFeedback").innerHTML = "<img src='images/correct.gif' style='width: 20px; 18px; margin:0px 5px -3px 0;'>";
            correctDate2 = true;
        }
    }
    //驗證只能輸入數字.字數
    let reg = /^[0-9]{4},[0-9]{1,2},[0-9]{1,2}$/;
    if(!reg.test(arr.join(",")) || arr.length !=3 || arr[0]*1 <= 0 || arr[1]*1 <= 0 || arr[2]*1 <= 0 || arr[1] > 12){
        document.getElementById("dateFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>請輸入完整日期";
    }
    if(theIpDate ===""){
        document.getElementById("dateFeedback").innerHTML = "<img src='images/error.png' style='width: 18px; margin: 0 5px -1px 0;'>空白ㄉ查不到呐~";
    }
}


