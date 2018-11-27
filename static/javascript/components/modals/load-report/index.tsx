import React from "react";
import cn from "classnames";
import { connect } from "react-redux";

const LoadReportModal = props => {
  if (props.modalDialog !== "LOAD_REPORT") {
    return null;
  }

  return (
    <React.Fragment>
      <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Load Report</h5>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Load & Parse
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(LoadReportModal));
