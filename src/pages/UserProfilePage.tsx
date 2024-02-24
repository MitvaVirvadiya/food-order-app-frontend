import { UserProfileForm } from "@/forms/user-profile-form/UserProfileForm";
import { useUpdateUser, useGetUser } from "@/api/userApi";

export default function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
}
