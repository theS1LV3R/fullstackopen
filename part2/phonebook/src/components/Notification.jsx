import "./notification.css";

export const NOTIFICATION_SEVERETIES = {
  INFO: 0,
  ERROR: 1,
};

/**
 * @param {{message: string, severety: number}} {message, severety}
 */
export default function Notification({ message, severety, setNotification }) {
  return (
    <div
      className={`
        notification
        ${severety === NOTIFICATION_SEVERETIES.ERROR ? "error" : ""}
        ${severety === NOTIFICATION_SEVERETIES.INFO ? "info" : ""}
        ${severety === undefined ? "none" : ""}
      `}
    >
      {message}
      <button onClick={() => setNotification(undefined)}>Close</button>
    </div>
  );
}
