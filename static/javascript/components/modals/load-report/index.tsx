import React from "react";
import { connect } from "react-redux";
import parse from "../../../parser";
import { closeModal } from "../../../actions/navigation-actions";
import { reportLoaded } from "../../../actions/report-actions";

class LoadReportModal extends React.PureComponent {
  state = {
    reportData: undefined
  };

  constructor(props) {
    super(props);
    this.onFileSelect = this.onFileSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFileSelect(e) {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({ reportData: event.target.result });
    };
    reader.readAsText(e.target.files[0]);
  }

  onSubmit() {
    if (!this.state.reportData) {
      return;
    }

    // TODO: add loader
    const parsedReport = parse(this.state.reportData);
    this.props.reportLoaded(parsedReport);
    // TODO: check errors
    this.props.closeModal();
  }

  render() {
    return (
      <React.Fragment>
        <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Load Report</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Select Report File</label>
                    <input type="file" className="form-control-file" onChange={this.onFileSelect} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>
                  Load
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => dispatch(closeModal()),
    reportLoaded: report => dispatch(reportLoaded(report))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadReportModal);
