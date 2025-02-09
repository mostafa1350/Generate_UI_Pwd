// ================= FOR UID ================
const uidInput = document.querySelector(".userNameSection input"),
      suggestUID = document.querySelector(".suggestUID input"),
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
const charsMainForMakeUid = "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const charsSymbolinFirstUid = "$_@#&";


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
    console.log("chars Length =>" + charsMainForMakeUid.length);
   let newUidContent = uidInput.value ;
   let newLenghtUid = parseInt(newUidContent.length);
   //Select One of Symbol in the first User
   let randSymbolUid = Math.floor(Math.random() * charsSymbolinFirstUid.length);


   console.log("inputt Length => "+ newUidContent.length);

    if (newLenghtUid == 0) {
        window.alert("Plz write a User Name ...");
        suggestUID.value = "";
    } else {
        for (let index = 0; index < rangUidInput.value; index++) {
            let randNoUid = Math.floor(Math.random() * charsMainForMakeUid.length);
            newUidContent += charsMainForMakeUid[randNoUid];
        }
        console.log(newUidContent);
        suggestUID.value = charsSymbolinFirstUid[randSymbolUid] + newUidContent;
    }
}
// =============== btn Event UID(CLICK) =============

btnGenerateUserName.addEventListener("click",makeUid);
// =============== COPY UID =============

copyIconUID.addEventListener("click",()=>{
    navigator.clipboard.writeText(suggestUID.value);
    window.confirm("Suggested UserName is :\n\n" + suggestUID.value + "\n\n That's Copied on clipboard...");
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

