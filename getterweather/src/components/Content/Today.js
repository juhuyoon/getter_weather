// import React from "react";

// function Card({ icon, title, children }) {
//   return (
//     <div className="card mt-4">
//       <div className="card-header">
//         <h3>
//           <strong>
//             <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
//           </strong>
//         </h3>
//       </div>
//       <div className="card-body">{children}</div>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Today = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Today</CardTitle>
          <CardSubtitle>Today Card Subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Today;
