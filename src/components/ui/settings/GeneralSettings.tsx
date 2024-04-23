import { useSelector } from "react-redux";
import { PartialUser } from "../../../user/types";
import EditableField from "./Fields/EditableField";
const GeneralSettings = () => {
  const user = useSelector((state: { user: PartialUser }) => state.user);
  return (
    <div>
      <div className="[&>*]:pb-4 [&>*]:border-b-[1px] [&>*]:px-4">
        {/*Username*/}
        <EditableField
          label="Username"
          value={user.username}
          fieldName="username"
        />
        {/*First name*/}
        <EditableField
          label="First name"
          value={user.first_name}
          fieldName="first_name"
        />
        {/*Last name*/}
        <EditableField
          label="Last name"
          value={user.last_name}
          fieldName="last_name"
        />
        {/*Email*/}
        <EditableField label="Email" value={user.email} fieldName="email" />
        {/*Password*/}
        <div className="flex pt-6 border-primary-text-color">
          <dt className="w-[18rem] max-[620px]:w-[8rem] font-semibold pr-6 text-secondary-text-color">
            Password
          </dt>
          <dd className="flex justify-between flex-auto">
            <div className="text-primary-text-color text-sm opacity-80">
              *********
              <span className="alert alert-danger mx-2">[encrypted]</span>
            </div>
          </dd>
        </div>
      </div>
      <div className="alert" id="updateSuccess"></div>
    </div>
  );
};

export default GeneralSettings;
