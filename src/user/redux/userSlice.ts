import {
  createAsyncThunk,
  createSlice,
  Slice,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { PartialUser, User } from "../types";
import updateUserInfo from "../api/updateUserInfo";
import {
  deleteAllUserNotifications,
  deleteUserNotification,
} from "../api/deleteNotification";
import { AxiosResponse } from "axios";

const updateUserAsync = createAsyncThunk(
  "user/updateUserAsync",
  async (updatedUserInfo: User) => {
    const response: AxiosResponse<PartialUser> = await updateUserInfo(
      updatedUserInfo
    );
    const messagePanel = document.getElementById("updateSuccess");
    setTimeout(() => {
      messagePanel?.classList.remove("alert-danger");
      messagePanel?.classList.remove("alert-success");
      messagePanel!.innerText = "";
    }, 5000);
    if (response.status == 200) {
      messagePanel!.innerText = "User updated successfully";
      messagePanel?.classList.remove("alert-danger");
      messagePanel?.classList.add("alert-success");
      return response.data;
    } else {
      messagePanel!.innerText = <string>response.data.username;
      messagePanel?.classList.remove("alert-success");
      messagePanel?.classList.add("alert-danger");
    }
  }
);
const deleteNotificationAsync = createAsyncThunk(
  "user/deleteNotificationAsync",
  async (notificationId: number) => {
    await deleteUserNotification(notificationId);
  }
);
const deleteAllNotificationsAsync = createAsyncThunk(
  "user/deleteAllNotificationsAsync",
  async () => {
    await deleteAllUserNotifications();
  }
);
export const userSlice: Slice<
  PartialUser,
  {
    setUser: (state: any, action: any) => any;
    updateUser: (state: any, action: any) => any;
    deleteNotification: (state: any, action: any) => any;
    deleteAllNotifications: (state: any, action: any) => any;
  },
  string,
  "user",
  SliceSelectors<PartialUser>
> = createSlice({
  name: "user",
  initialState: {} as PartialUser,
  reducers: {
    setUser: (state: any, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateUser: (state: any, action: any) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    deleteNotification: (state: any, action: any) => {
      const id = action.payload;
      const updatedNotifications = state.notifications.filter(
        (notification: any) => notification.id !== id
      );
      return {
        ...state,
        notifications: updatedNotifications,
      };
    },
    deleteAllNotifications: (state: any, action: any) => {
      return {
        ...state,
        notifications: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(deleteNotificationAsync.fulfilled, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(deleteAllNotificationsAsync.fulfilled, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export {
  updateUserAsync,
  deleteNotificationAsync,
  deleteAllNotificationsAsync,
};
export const {
  setUser,
  updateUser,
  deleteNotification,
  deleteAllNotifications,
} = userSlice.actions;
export default userSlice.reducer;
