import React, { Dispatch, SetStateAction, useState } from "react";
import { PartialUser, UserNotification } from "../../../user/types";
import close_btn from "../../../../public/images/close_btn.svg";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import {
  deleteNotification,
  deleteAllNotifications,
} from "../../../user/redux/userSlice";
import {
  deleteNotificationAsync,
  deleteAllNotificationsAsync,
} from "../../../user/redux/userSlice";

const NotificationsSettings = () => {
  const user = useSelector((state: { user: PartialUser }) => state.user);
  const [notifications, setNotifications]: [
    UserNotification[],
    Dispatch<SetStateAction<UserNotification[]>>
    // @ts-ignore
  ] = useState<UserNotification[]>(user.notifications);
  const dispatch = useDispatch();
  const handleDeleteMessage = async (messageId: number) => {
    const updatedNotifications = notifications.filter(
      (notification: any) => notification.id !== messageId
    );
    setNotifications(updatedNotifications);
    // @ts-ignore
    dispatch(deleteNotification(messageId));
    // @ts-ignore
    dispatch(deleteNotificationAsync(messageId));
  };
  const handleDeleteAllNotifications = () => {
    setNotifications([]);
    // @ts-ignore
    dispatch(deleteAllNotifications());
    // @ts-ignore
    dispatch(deleteAllNotificationsAsync());
  };
  return (
    <main className="flex-auto">
      <div>
        <h2 className="text-xl leading-7 font-bold text-primary-text-color">
          Notifications
        </h2>
        <p className="flex justify-between [&>*]:text-sm [&>*]:leading-7">
          <span className="text-primary-text-color">
            These are your account notifications
          </span>
          <span className="text-blue-800">
            <button name="clear_all" onClick={handleDeleteAllNotifications}>
              clear all
            </button>
          </span>
        </p>
        <dl className="mt-6 border-t-[1px] border-primary-text-color leading-6"></dl>
        <div className="flex flex-col gap-2.5">
          {notifications.length > 0 ? (
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
            <span className="text-primary-text-color">No notifications</span>
          )}
        </div>
      </div>
    </main>
  );
};

export default NotificationsSettings;
