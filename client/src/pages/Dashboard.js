import React from 'react';
import lightBulb from "../assets/images/lightBulb.jpg";

const Home = () => {
  const goToInspire = () => {
    // go to page function
    console.log('go to inspire');
  };

  const goToCountdown = () => {
    // go to page function
    console.log('go to countdown');
  };

  const goToBudget = () => {
    // go to page function
    console.log('go to budget');
  };

  const goToVender = () => {
    // go to page function
    console.log('go to vender');
  };

  const goToVenue = () => {
    // go to page function
    console.log('go to venue');
  };

  return (
    <div className="mainDash">
      <div className="flex-container">
        <div className="dashDirect-light">
          <a href="/lightBulb">
            <img src="../lightBulb.jpeg" alt="Light" />
          </a>
          <button className="light" onClick={goToInspire}>
            <img src={lightBulb}alt="Light" />
          </button>
        </div>
        <div className="dashDirect-count">
          <a href="/dDAy">
            <img src="../dDay" alt="Count" />
          </a>
          <button className="dooms" onClick={goToCountdown}>
            <img src="./images/dDay.jpg.jpg" alt="DoomsDay" />
          </button>
        </div>
        <div className="dashDirect-funds">
          <a href="/piggyBank">
            <img src="../piggyBAnk" alt="Funds" />
          </a>
          <button className="piggy" onClick={goToBudget}>
            <img src="./images/piggyBank.jpg" alt="Budget" />
          </button>
        </div>
        <div className="dashDirect-food">
          <a href="/cake">
            <img src="../cake" alt="Food" />
          </a>
          <button className="food" onClick={goToVender}>
            <img src="../images/food.jpg" alt="Food" />
          </button>
        </div>
        <div className="dashDirect-venue">
          <a href="/alter">
            <img src="../alter" alt="Venue" />
          </a>
          <button className="alter" onClick={goToVenue}>
            <img src="./images/alter.jpg" alt="Alter" />
          </button>
        </div>
        <h1>The first s-s-step is always the hardest, there's no wrong p-p-p-lace to start!</h1>
      <img src="robot.png" width="200px" alt="Robot" />
      </div>
    </div>
  );
}

export default Home;



// import React from 'react';



// const Home = () => {
//   return (
//     <div className="mainDASH">
//         <h1>The first s-s-step is always the hardest, theres no wrong p-p-p-lace to start!</h1>
//         <img src="robot.png" width="200px"></img>
// <div class="flex-container">
//         <div class="dashDirect-light">
//           <a href="/lightBulb">
//             <img src="../lightBulb.jpeg" alt="Light" />
//           </a>
//           const goToInspire = () => {
//              return(
//     <button className="light"><img src=".images/lightBulb.jpg" alt="Light" onClick={
//       //go to page function
//       this.myfunction} />
//       </button>
//   );
// };
//         </div>
//         <div class="dashDirect-count">
//           <a href="/dDAy">
//             <img src="../dDay" alt="count" />
//             </a>
//             const goToCountdown = () => {
//   return(
//     <button className="dooms"><img src="./images/dDay.jpg.jpg" alt="doomsDay" onClick={
//       //go to page function
//       this.myfunction} />
//       </button>
//   );
// };
//         </div>
//         <div class="dashDirect-funds">
          
//           <a href="/piggyBank">
//             <img src="../piggyBAnk" alt="funds" />
//             </a>
//          const goToBudget = () => {
//                 return(
//     <button className="piggy"><img src="./images/piggyBank.jpg" alt="budget" onClick={
//       //go to page function
//       this.myfunction} />
//       </button>
//   );
// };
//         </div><div class="dashDirect-food">
//           <a href="/cake">
//             <img src="../cake" alt="food" />
//             </a>
//             const goToVender = () => {
//                   return(
//     <button className="food"><img src="./images/food.jpg" alt="Food" onClick={
//       //go to page function
//       this.myfunction} />
//       </button>
//   );
// };

//         </div><div class="dashDirect-venue">
//           <a href="/alter">
//             <img src="../alter" alt="venue" />
//             </a>
//             const goToVenue = () => {
//                return(
//     <button className="alter"><img src="./images/alter.jpg" alt="Alter" onClick={
//       //go to page function
//       this.myfunction} />
//       </button>
      
//   );
// };
       

    
// export default Dashboard;
