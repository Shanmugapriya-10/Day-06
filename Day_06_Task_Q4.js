//4. write a class to calculate the Uber price.

var base_fee = 10;
var city = [{name: "chennai", rate: "20"}, {name: "Madhurai", rate: "30"}]
class Person {
    constructor(distance,cityname){
         this.KM = distance
         this.cityname = cityname
    }
    finalcharge(){
          var matched_cityname = city.filter((ele) => ele.name === this.cityname) 
          var city_rate = matched_cityname.map((ele) => ele.rate)
          //The final uber charge is calculated with the number of Kilometers * per kilometer charge based on 
          //the cityname and finally its added with the base fee by Uber.
          var finalrate = (this.KM * city_rate) + base_fee
          return finalrate //output will be 250;
    }
}
var personDetails = new Person("12","chennai");
console.log("Final Uber charger per ride:", personDetails.finalcharge());