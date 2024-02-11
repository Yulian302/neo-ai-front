interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile: UserProfile;
  notifications?: UserNotification[];
}
interface UserProfile {
  avatar_url?: string;
}
interface UserNotification {
  id: number;
  message: string;
  success_number: number;
  created_at: string;
}
type PartialUser = Partial<User>;

type UserState = {
  user: PartialUser;
};
type DeleteSuccess = {
  detail: string;
};

type UpdateUserData = Exclude<User, "profile" | "notifications">;
export {
  User,
  PartialUser,
  UserState,
  UpdateUserData,
  UserNotification,
  DeleteSuccess,
};
