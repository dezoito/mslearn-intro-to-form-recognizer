import { ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DocumentSelector from "../components/DocumentSelector";

const ResultsPage = () => {
  return (
    <div className="container">
      <div className="mt-5 pb-5">
        <img
          style={{ height: "30px" }}
          className="img-fluid"
          alt="Microsoft"
          src="/site-logo.png"
        />
      </div>

      {/* document selector */}
      <div className="mt-4">
        <DocumentSelector menuStyle="links" />
      </div>

      {/* separator */}
      <div className="mt-4">
        <hr className="hr2" />
      </div>

      {/* title */}
      <div className="mt-4">
        <p className="h1">File Successfully read!</p>
      </div>

      <div className="mt-3">
        <div className="elevated">
          <div className="row justify-content-start row-eq-height">
            <div className="col-md-3 left-elevated-column">IMAGE</div>
            <div className="col-md-9 right-elevated-column">RESULTS</div>
          </div>
        </div>
      </div>

      {/* submit */}
      <div className="mt-5">
        <div className="row justify-content-around">
          <div className="col mr-3">
            <Link to="/fileselector">
              <button type="button" className="btn btn-primary">
                &nbsp; Back &nbsp;
                <ArrowLeftIcon size={16} />
              </button>
            </Link>
          </div>

{/*           <div className="col mr-3">
            <button type="button" className="btn btn-primary">
              &nbsp; Complete &nbsp;
              <ArrowRightIcon size={16} />
            </button>
          </div> */}
        </div>
      </div>

      {/* space at the bottom for mobile */}
      <div className="mt-5">
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default ResultsPage;
