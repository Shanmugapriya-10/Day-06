//3. Write a “person” class to hold all the details.

class Person {
    constructor(name,age,height,weight,phno,emailid,address,institute,course,mark){
         this.name = name
         this.age = age
         this.height = height
         this.weight = weight
         this.ph_no = phno
         this.email_id = emailid
         this.address = address
         this.institute = institute
         this.course = course
         this.mark = mark

    }
}

var personDetails = new Person("Shan",25,"6.0",50,8682050869,"shan.r@gmail.com","Tambaram","GUVI","FSD","90");
console.log("Person Details:", personDetails);