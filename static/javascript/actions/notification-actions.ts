import Noty from "noty";

/**
 * Notification actions
 */

export function showErrorNotification(message) {
  new Noty({
    theme: "bootstrap-v4",
    type: "error",
    layout: "topRight",
    text: message
  }).show();
}

export function showInfoNotification(message) {
  new Noty({
    theme: "bootstrap-v4",
    type: "success",
    layout: "topRight",
    text: message
  }).show();
}

export function showConfirmation(message) {
  return new Promise((resolve, reject) => {
    const n = new Noty({
      theme: "bootstrap-v4",
      text: message,
      type: "success",
      layout: "topRight",
      buttons: [
        Noty.button("YES", "btn btn-success", () => {
          resolve();
          n.close();
        }),
        Noty.button("NO", "btn btn-error", () => {
          reject();
          n.close();
        })
      ]
    });
    n.show();
  });
}
