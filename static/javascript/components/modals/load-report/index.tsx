import React, { ChangeEvent, useState, useEffect } from "react";
import _ from "lodash";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import parse, { IReport } from "../../../parser";
import { ICombinedReducersState } from "../../../reducers";
import { closeModal, showLoader, hideLoader } from "../../../actions/navigation-actions";
import { reportLoaded } from "../../../actions/report-actions";

interface IProps {
  reportLoaded: (report: IReport) => void;
  closeModal: () => void;
  hideLoader: () => void;
  showLoader: () => void;
}

const LoadReportModal = (props: IProps) => {
  const [onFileSelect, onSubmit] = useReportData(props);

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
                  <input type="file" className="form-control-file" onChange={onFileSelect} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={props.closeModal}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={onSubmit}>
                Load
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </React.Fragment>
  );
};

type IUseReporData = [(e: ChangeEvent<HTMLInputElement>) => void, () => void];
const useReportData = (props: IProps): IUseReporData => {
  const [reportData, setReportData] = useState<string | ArrayBuffer | null>("");

  function onFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = () => {
      setReportData(reader.result);
    };
    if (e.target.files) {
      reader.readAsText(e.target.files[0]);
    } else {
      // TODO: display error
      console.error("File can not be read");
    }
  }

  async function onSubmit() {
    try {
      props.showLoader();
      const parsedReport = await parse(String(reportData));
      props.hideLoader();
      if (!parsedReport) {
        return;
      }
      props.reportLoaded(parsedReport);
      props.closeModal();
    } catch (err) {
      props.hideLoader();
      console.error(err);
    }
  }

  return [onFileSelect, onSubmit];
};

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
