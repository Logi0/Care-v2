function sendUserInfo() {
  const urlObj = document.getElementById("ext-script");
  const url = urlObj.getAttribute("url");

  const name = document.getElementById("input_name").value;
  const surname = document.getElementById("input_surname").value;
  const male = document.getElementById("input_male").checked;
  const female = document.getElementById("input_female").checked;

  //check if male or female
  let sex;
  if (male) {
    sex = "Maschio";
    // female = false;
  } else {
    sex = "Femmina";
    // male = false
  }

  const body = [name, surname, sex];

  const jsonbody = JSON.stringify(body);
  console.log(jsonbody);
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: jsonbody,
  });
}

document.getElementById("submitForm").addEventListener("click", () => {
  sendUserInfo();
});

const checkMale = document.getElementById("check_male");
const checkFemale = document.getElementById("check_female");

function checkSex() {
  const male = document.getElementById("input_male");
  const female = document.getElementById("input_female");

  if (male.checked) {
    female.disabled = true;
  } else if (female.checked) {
    male.disabled = true;
  } else if (!male.checked && !female.checked) {
    console.log("No sex chosen");
    female.disabled = false;
    male.disabled = false;
  }
}

checkMale.addEventListener("click", () => {
  checkSex();
});
checkFemale.addEventListener("click", () => {
  checkSex();
});
