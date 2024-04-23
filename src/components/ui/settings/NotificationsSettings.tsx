import { useState } from "react";
import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { useAppDispatch } from "user/redux/store";
import close_btn from "../../../../public/images/close_btn.svg";
import {
  deleteAllNotifications,
  deleteAllNotificationsAsync,
  deleteNotification,
  deleteNotificationAsync,
} from "../../../user/redux/userSlice";
import { PartialUser, UserNotification } from "../../../user/types";

const NotificationsSettings = () => {
  const user = useSelector((state: { user: PartialUser }) => state.user);
  const [notifications, setNotifications] = useState<
    UserNotification[] | undefined
  >(user.notifications);
  const dispatch = useAppDispatch();
  const handleDeleteMessage = async (messageId: number) => {
    const updatedNotifications = notifications!.filter(
      (notification: any) => notification.id !== messageId
    );
    setNotifications(updatedNotifications);
    dispatch(deleteNotification(messageId));
    dispatch(deleteNotificationAsync(messageId));
  };
  const handleDeleteAllNotifications = () => {
    setNotifications([]);
    dispatch(deleteAllNotifications());
    dispatch(deleteAllNotificationsAsync());
  };
  return (
    <div className="flex flex-col gap-2.5">
      {notifications !== undefined ? (
        notifications.map((notification: any, i: number) => (
          <div
            className="flex justify-between items-center px-2 py-3 bg-[#f8fafc]"
            key={i}
          >
            <div className="mx-3">
              {notification.success_number === 0 ? (
                <BsInfoCircle color="blue" size={35} />
              ) : notification.success_number === 1 ? (
                <BsCheckCircle color="green" size={35} />
              ) : notification.success_number === 2 ? (
                <FiAlertTriangle color="orange" size={35} />
              ) : (
                <MdCancel color="red" size={35} />
              )}
            </div>
            <span className="w-[50%]">{notification.message}</span>
            <span className="text-sm text-primary-text-color">
              {new Date(notification.created_at).toLocaleString()}
            </span>
            <button onClick={() => handleDeleteMessage(notification.id)}>
              <div className="rounded-full p-[2px]">
                <img src={close_btn} alt="close" className="w-5 h-5" />
              </div>
            </button>
          </div>
        ))
      ) : (
        <span className="text-primary-text-color pl-10">No notifications</span>
      )}
    </div>
  );
};

export default NotificationsSettings;
