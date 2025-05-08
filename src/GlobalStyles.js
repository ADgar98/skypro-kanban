import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}
#root {
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}


.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}

.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

._hover01:hover {
  background-color: #33399b;
}

._hover02:hover, .header__user:hover {
  color: #33399b;
}
._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}

._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}

.pop-user-set:target,

.pop-new-card:target,


._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
}

._green {
  background-color: #B4FDD1;
  color: #06B16E;
}

._purple {
  background-color: #E9D4FF;
  color: #9A48F1;
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

._active-category {
  opacity: 1 !important;
}

.pop-wrap {
  position: relative;
  top: 0;
  left: 0;
}










.pop-user-set__name {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
}
.pop-user-set__mail {
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
}
.pop-user-set__theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.pop-user-set__theme p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}
.pop-user-set__theme input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.pop-user-set__theme input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}
.pop-user-set__theme input:checked[type=checkbox]::before {
  left: 12px;
}
.pop-user-set button {
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
}
.pop-user-set button a {
  color: #565EEF;
}










.form-new__input, .form-new__area {
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
.form-new__input::-moz-placeholder, .form-new__area::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
.form-new__input::placeholder, .form-new__area::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}




.subttl {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}











.calendar__cell {
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
}







._other-month {
  opacity: 0;
}

._cell-day:hover {
  color: #94A6BE;
  background-color: #EAEEF6;
}

._active-day {
  background-color: #94A6BE;
  color: #FFFFFF;
}

._current {
  font-weight: 700;
}

.categories {
  margin-bottom: 20px;
}


.categories__theme {
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
}
.categories__theme p {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  cursor: pointer
}





.pop-browse__content .categories__theme {
  opacity: 1;
}
.pop-browse__content .theme-down {
  display: none;
  margin-bottom: 20px;
}
.pop-browse__content .theme-top {
  display: block;
}




.pop-browse__btn-browse, .pop-browse__btn-edit {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.pop-browse__btn-browse button, .pop-browse__btn-edit button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
.pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
  margin-right: 8px;
}









.status__theme {
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
}
.status__theme p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}

._btn-bor {
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
}
._btn-bor a {
  color: #565EEF;
}

._btn-bg {
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
}
._btn-bg a {
  color: #FFFFFF;
}

._hide {
  display: none;
}

._dark {
  display: none;
}

.header {
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
}
.header__block {
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
}
.header__logo img {
  width: 85px;
}
.header__nav {
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__btn-main-new {
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
}
.header__btn-main-new a {
  color: #FFFFFF;
}
.header__user {
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  cursor: pointer;
  user-select: none;
}
.header__user::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}
.header__pop-user-set {
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
}

.main {
  width: 100%;
  background-color: #EAEEF6;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.main__content {
  width: 100%;
  display: flex;
}
.main__column {
  width: 20%;
  margin: 0 auto;
  display: block;
}

.column__title {
  padding: 0 10px;
  margin: 15px 0;
}
.column__title p {
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.cards {
  width: 100%;
  display: block;
  position: relative;
}

.cards__card {
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
}

.card__group {
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__theme {
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
}
.card__theme p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
}
.card__btn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
}
.card__btn div {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
}
.card__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
}
.card__content {
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.card__date {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.card__date svg {
  width: 13px;
}
.card__date p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
}

@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
  .main__content {
    display: block;
  }
  .main__column {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  .cards {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
  .cards__card {
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
}
@media screen and (max-width: 660px) {
  
 
  
  
  
  .calendar__ttl, .calendar__nav, .calendar__period {
    padding: 0;
  }
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }
  

  
  .calendar__cell {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
  
  
  

}
@media screen and (max-width: 495px) {
  .container {
    width: 100%;
    padding: 0 16px;
  }
  .header__btn-main-new {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
  
  
  
  .pop-new-card__calendar {
    width: 100%;
  }
  
  
  .pop-browse__content .theme-down {
    display: block;
    margin-bottom: 20px;
  }
  .pop-browse__content .theme-top {
    display: none;
  }
  
  .pop-browse__calendar {
    width: 100%;
  }
  .pop-browse__btn-browse button, .pop-browse__btn-edit button {
    width: 100%;
    height: 40px;
  }
  .pop-browse__btn-browse .btn-group, .pop-browse__btn-edit .btn-group {
    width: 100%;
  }
  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 0px;
  }
  
  
}
@media only screen and (max-width: 375px) {
  
  
 
    
}





.loading-btn {
  opacity: 0.7;
  cursor: not-allowed;
}





`;
