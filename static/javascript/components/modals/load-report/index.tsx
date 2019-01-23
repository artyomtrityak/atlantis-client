import React, { ChangeEvent } from "react";
import _ from "lodash";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import parse, { IReport } from "../../../parser";
import { ICombinedReducersState } from "../../../reducers";
import { closeModal, showLoader, hideLoader } from "../../../actions/navigation-actions";
import { reportLoaded } from "../../../actions/report-actions";

interface IFileEvent {
  target: {
    files: [Blob];
  };
}

interface IProps {
  reportLoaded: (report: IReport) => void;
  closeModal: () => void;
  hideLoader: () => void;
  showLoader: () => void;
}

interface IState {
  reportData: string | ArrayBuffer | null;
}

class LoadReportModal extends React.PureComponent<IProps, IState> {
  state = {
    reportData: ""
  };

  constructor(props: IProps) {
    super(props);
    this.onFileSelect = this.onFileSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ reportData: reader.result });
    };
    if (e.target.files) {
      reader.readAsText(e.target.files[0]);
    } else {
      // TODO: display error
      console.error("File can not be read");
    }
  }

  async onSubmit() {
    try {
      this.props.showLoader();
      const parsedReport = await parse(this.state.reportData);
      this.props.hideLoader();
      if (!parsedReport) {
        return;
      }
      this.props.reportLoaded(parsedReport);
      this.props.closeModal();
    } catch (err) {
      this.props.hideLoader();
      console.error(err);
    }
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

const mapStateToProps = (state: ICombinedReducersState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    reportLoaded: (report: IReport) => dispatch(reportLoaded(report)),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadReportModal);
