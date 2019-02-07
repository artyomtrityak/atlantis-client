import React from "react";

export default function ReportBugMenu() {
  return (
    <form className="form-inline">
      <a
        href="https://github.com/artyomtrityak/atlantis-client/issues/new"
        target="_blank"
        className="btn btn-sm btn-info mr-5"
        role="button"
        style={{ lineHeight: "1rem" }}
      >
        Report a bug
      </a>
    </form>
  );
}
