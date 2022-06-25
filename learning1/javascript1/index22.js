// console.log("one more");

// const proto={
//     slogan: function(){
//         return `This is company is the best`;
//     },
//     changeName: function(newName){
//         this.name=newName;
//     }
// }
// const harsh=Object.create(proto);
// harsh.name="harsh";
// harsh.role="coder";
// harsh.changeName("harsh2");
// console.log(harsh);


// const harsh=Object.create(proto,{
//     name:{value: "harsh"},
//     role: {value: "Programmer"}
// })
// console.log(harsh);
// const harsh=Object.create(proto,{
//     name: {value: "harsh" ,writable: true},
//     role: {value: "coder"}
// })
// harsh.changeName("harsh2");
// console.log(harsh);