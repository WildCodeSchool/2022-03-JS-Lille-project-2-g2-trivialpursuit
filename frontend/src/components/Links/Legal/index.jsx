import { Link } from "react-router-dom";
import SLegal from "./style";

function Legal() {
  return (
    <SLegal>
      <Link to="/legal">Terms & Conditions</Link>;
    </SLegal>
  );
}

export default Legal;
