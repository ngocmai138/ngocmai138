"use strict";

const personalInforDetails = document.querySelector(".personal-info-details");
const emailRequest = document.querySelector(".email-request");
const emailGuest = document.querySelector(".email-guest");
const emailSubmit = document.querySelector(".email-submit");
const requestText = document.querySelector(".request-text");
const jobDetails = document.querySelectorAll(".job-info-details");
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");

const showPersonalInfor = function () {
  personalInforDetails.classList.remove("hidden");
  emailRequest.classList.add("hidden");
};

const showRequest = function () {
  personalInforDetails.classList.add("hidden");
  emailRequest.classList.remove("hidden");
};

// required inputing email to show personal information
showRequest();
emailSubmit.addEventListener("click", function () {
  if (emailGuest) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkEmail = regex.test(emailGuest.value);
    if (checkEmail) {
      showPersonalInfor();
    } else {
      requestText.textContent = "Sai định dạng email. Xin mời nhập lại";
    }
  } else {
    requestText.textContent = "Hãy nhập email để xác thực.....";
  }
});

// Hide job details
for (let i = 0; i < jobDetails.length; i++) {
  jobDetails[i].classList.add("hidden");
}

for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].classList.add("hidden");
}

// Show / hide job details
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    if (viewLess[i].textContent == "VIEW MORE") {
      jobDetails[i].classList.remove("hidden");
      viewLess[i].textContent = "VIEW LESS";
    } else {
      jobDetails[i].classList.add("hidden");
      viewLess[i].textContent = "VIEW MORE";
    }
  });
}
