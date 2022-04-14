import Team from "../../Links/Team";
import Legal from "../../Links/Legal";
import SFooter from "./style";

function Footer() {
  return (
    <SFooter>
      <div className="footer">
        <Legal />
        <Team />
      </div>
    </SFooter>
  );
}

export default Footer;
