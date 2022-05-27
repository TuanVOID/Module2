import {Phone} from "./Phone";
import {PhoneManager} from "./PhoneManager";

let xsmax = new Phone("XsMax","Dien Thoai", 10000000, 90, "Hang noi dia Nhat","20/5/2020")
let note5 = new Phone("Note5","Dien Thoai", 9000000, 5, "Hang Tau","15/2/2022")
let note9 = new Phone("Note9","Dien Thoai", 14000000, 20, "Hang chau Au","15/2/2018")
let note20 = new Phone("Note20","Dien Thoai", 20000000, 5, "Hang chau Au","4/3/2021")

let phoneManager = new PhoneManager()

phoneManager.add(note5)
phoneManager.add(note9)
phoneManager.add(xsmax)
phoneManager.add(note20)

// console.table(phoneManager.getList())

// phoneManager.deleteByName("Note9")
phoneManager.update("Note5","Note10",999999,15)
phoneManager.sell("Note9",4)

console.table(phoneManager.getList())