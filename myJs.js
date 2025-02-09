// ================= FOR UID ================
const uidInput = document.querySelector(".userNameSection input"),
      copyIconUID = document.querySelector(".userNameSection .uidCopyIcon"),
      rangUidInput = document.querySelector(".rangeUidSlider input"),
      uidSliderNo = document.querySelector(".rangeUidSlider .rangeNoUsername"),
      btnGenerateUserName = document.querySelector(".btnGenerateUserName");
// ================= FOR PWD ================
const pwdInput = document.querySelector(".pwdSection input"),
      copyIconPwd = document.querySelector(".pwdSection .pwdCopyIcon"),
      rangPwdInput = document.querySelector(".rangePwdSlider input"),
      pwdSliderNo = document.querySelector(".rangePwdSlider .rangeNoPassword"),
      btnGeneratePwd = document.querySelector(".btnGeneratePass");
// ================== CHARS =================
const charsForMakePwd = "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()-+{}:;.<>~[]";
const charsForMakeUid = "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz@";


// ============== SLIDER VALUE ================
rangUidInput.addEventListener("input",()=>{
    uidSliderNo.innerHTML = rangUidInput.value;
});
rangPwdInput.addEventListener("input",()=>{
    pwdSliderNo.innerHTML = rangPwdInput.value;
});
// ================= FUNCTIONs & ... ================
// make UID function to produce random password
const makeUid = ()=>{
    console.log("chars Length =>" + charsForMakeUid.length);
   let newUidContent = uidInput.value ;
   let newLenghtUid = parseInt(uidInput.length);
   console.log("inputt Length => "+ newUidContent.length);

//    if(newLenghtUid===0){
//     for (let index = 0; index < rangUidInput.value; index++) {
//         let randNoUid = Math.floor(Math.random()*charsForMakeUid.length);
//         newUidContent +=charsForMakeUid[randNoUid];        
//        }
//        console.log(newUidContent);
//        uidInput.value = newUidContent;
//    }
//    else if(newLenghtUid>uidInput.length){

//    }
}
// =============== btn Event UID(CLICK) =============

btnGenerateUserName.addEventListener("click",makeUid);
// =============== COPY UID =============

copyIconUID.addEventListener("click",()=>{
    navigator.clipboard.writeText(uidInput.value);
    window.alert("UID Copied ...");
});
// =================== PWD SECTION ====================

// makePass function to produce random password
const makePass = ()=>{
    console.log("chars Length =>" + charsForMakePwd.length);
   let newPwd = "" ;
   for (let index = 0; index < rangPwdInput.value; index++) {
    let randNo = Math.floor(Math.random()*charsForMakePwd.length);
    newPwd +=charsForMakePwd[randNo];        
   }
   console.log(newPwd);
   pwdInput.value = newPwd;
}

// ============ btn Event PWD (CLICK) ================

btnGeneratePwd.addEventListener("click",makePass);

// =============== COPY PASS =============
copyIconPwd.addEventListener("click",()=>{
    navigator.clipboard.writeText(pwdInput.value);
    window.alert("PWD Copied ...");
});

