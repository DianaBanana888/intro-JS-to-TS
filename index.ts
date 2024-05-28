// const num = 6;
// const result = (num % 2  != 0) ? "odd" : "even";
// // display the result
// console.log(`Number is ${result}.`)

// console.log(`logVisitsTS`)
// function logVisits(data) {
//     data.visits.forEach(visit => console.log(visit.page.name, data.user.name));
//   }

  //Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "RemoteSigned"
// C:\Users\Diana\AppData\Local\Programs\Git

  // type VisitsData = {
  //   visits: Array<{
  //     page: {
  //       caption: string;
  //     };
  //   }>;
  //   user: {
  //     name: string;
  //   };
  // };

  // function logVisits(data: VisitsData) {
  //   data.visits.forEach(visit => console.log(visit.page.caption, data.user.name));
  // }

  // logVisits({
  //   visits: [{page: {caption: "Page1"} }, {page: {caption: "Page2"}}],
  //   user: {name: "BOB"}
  // })

  type VisitsData = {
    visits: Array<{
      page: {
        caption: string;
      };
    }>;
    user: {
      name: string;
    };
  };
  function logVisits(data: VisitsData) {
    data.visits.forEach(visit => console.log(visit.page.caption, data.user.name));
  }

logVisits({
  visits: [
    {page: {caption: "Line1"}},
    {page: {caption: "Line2"}} 
  ],
  user: { name: "BobbyBrown" },
});
