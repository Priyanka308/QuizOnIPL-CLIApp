var rs=require("readline-sync");
var score=0;
var username=rs.question("What is your name??  ");
console.log("Welcome " +username+ " Let's test your knowlegde and love for the game IPL... ")
function play(question,answer){
  var username=rs.question(question);
  if(username=== answer){
    score=score+1;
    console.log("Right!!")
  }
  else{
    console.log(" Oops Wrong!!")
  }

}
var questionss=[{
question:`
Which cricketer has scored the fastest hundred in the IPL?
a: Virat Kohli
b: David Warner
c: AB de Villiers
d: Chris Gayle\n`,
answer:"d"
},
{
  question:`
Which cricketer has won the most number of IPL titles?
a: Gautam Gambhir
b: Virat Kohli
c: Dwayne Bravo
d: Rohit Sharma\n`,
answer:"d"
},
{
  question:`
Who has taken most catches in the IPL history so far?
a: Suresh Raina
b: AB de Villiers
c: Rohit Sharma
d: Dwayne Bravo\n`,
answer:"a"
},
{question:`
Which team has never won the IPL tournament?
a: Deccan Chargers
b: Sunrisers Hyderabad
c: Rajasthan Royals
d: Royal Challengers Bangalore\n`,
answer:"d"
},
{question:`
Who captained the Kolkata Knight Riders to the IPL title in 2012?
a: Brendon McCullum
b: Sourav Ganguly
c: Dinesh Karthik
d: Gautam Gambhir\n`,
answer:"d" 
}]
for(var i=0;i<questionss.length;i++){
  current=questionss[i];
  play(current.question,current.answer)
}
console.log("Yeah!!! your score is "+score)
if(score>2){
  console.log("Yeah!! You qualified for next level");
  console.log("Let's start");
  var problems=[{
    question:`
    Who has hit the only 100 so far in IPL 2021?
    a: Nitish Rana
    b: Sanju Samson
    c: Virat Kohli
    d: K L Rahul\n`,
    answer:"b"

  },
  {
    question:`
    Who has made the highest score in IPL history?
    a: Chris Gayle
    b: Dhoni
    c: David Warner
    d: Gautam Gambhir\n`,
    answer:"a"

  },
  { question:
  `Which Indian captain first won the IPL?
   a: M S Dhoni
   b: Rohit Sharma
   c: Virat Kohli
   d: Gautham Gambhir\n`,
   answer:"a"
  }
  ]
  for(var i=0;i<problems.length;i++){
  current=problems[i];
  play(current.question,current.answer)
  
}
  console.log("Yeah!!! your total score is "+score)
  console.log("Hope you enjoyed it.")
  console.log("-------------------------")
}
else{
  console.log("Hope you enjoyed it.")
  console.log("-------------------------")

}
