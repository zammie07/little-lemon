import greek from "../assets/images/greek salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemon from "../assets/images/lemon dessert.jpg";

function Highlights() {
  return (
    <div className="highlights-container">
      <div className="highlight-item">
        <h2 className="specials">This weeks specials!</h2>
        <div className="highlights-row">
          <div className="item">
            <img src={greek} alt="greek" className="greek-salad" />
          </div>
          <div className="item">
            <img src={bruchetta} alt="bruchetta" className="bruchetta" />
          </div>
          <div className="item">
            <img src={lemon} alt="lemon" className="lemon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;

// {
//   /* <img
//             src="greek salad.jpg"
//             alt="greek-salad"
//             className="greek-salad"
//           ></img>
//         </div>
//         <div className="highlight-item highlight-item-2">
//           <img src="bruchetta.svg" alt="bruchetta" className="bruchetta"></img>
//         </div>
//         <div className="highlight-item highlight-item-3">
//           <img src="lemon dessert.jpg" alt="lemon" className="lemon"></img> */
// }
