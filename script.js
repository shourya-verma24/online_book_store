function Author(name,birthyear,nationality){
  this.name=name;
  this.birthyear=birthyear;
  this.nationality=nationality;
}
let author=new Author("J.K.Rowling",1965,"British");
let author2=new Author("J.R.R.Tolkien",1960,"American");

function Book(tital,author,genre,price){     ///yaha par author ko author2 se pass krna hai aur yahi hume function me lena hai
  this.tital = tital;
  this.author = author;
  this.genre = genre;
  this.price = price;
}
let book1 = new Book('The Hobbit',author,'Fantasy',100);
let book2 = new Book('The Lord of the Rings',author2,'Fantasy',200);

function getbook1_info(){
  console.log("Tital= "+ book1.tital);
  console.log("Name of Poet "+book1.author.name);
  console.log("Birthyear "+book1.author.birthyear);
  console.log("NAtionality "+book1.author.nationality);
  console.log(book1.genre);
  console.log("Rs "+book1.price);
}
function getbook2_info(){
  console.log("Tital= "+ book2.tital);
  console.log("Name of Poet "+book2.author.name);
  console.log("Birthyear "+book2.author.birthyear);
  console.log("NAtionality "+book2.author.nationality);
  console.log(book2.genre);
  console.log("Rs "+book2.price);
}

//getbook1_info();
getbook2_info();
