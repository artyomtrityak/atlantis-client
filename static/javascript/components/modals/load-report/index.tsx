import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { diff } from "deep-diff";
import { getParser } from "../../../parser";

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
    console.log(this.state.reportData);
    const parser = getParser();
    parser.feed(this.state.reportData);
    if (parser.results.length > 1) {
      console.log(diff(parser.results[0], parser.results[1]));
    }
    console.log("RES:", parser.results);
  }

  onCancel() {}

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
                <button type="button" className="btn btn-secondary" onClick={this.onCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>
                  OK
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadReportModal);
