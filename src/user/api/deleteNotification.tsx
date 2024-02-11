import axios from "../../axiosConfig";

const deleteUserNotification = async (notificationId: number) => {
  return await axios.delete(`user/notifications/${notificationId}/`);
};
const deleteAllUserNotifications = async () => {
  return await axios.delete(`user/notifications/delete_all/`);
};
export { deleteAllUserNotifications, deleteUserNotification };
