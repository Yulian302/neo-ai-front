import React from "react";
import { useSelector } from "react-redux";
import { PartialUser } from "../../../user/types";
import EditableField from "./Fields/EditableField";
const GeneralSettings = () => {
  const user = useSelector((state: { user: PartialUser }) => state.user);
  return (
    <main className="flex-auto">
      <h2 className="text-xl leading-7 font-bold text-primary-text-color">
        Profile
      </h2>
      <p>
        <span className="text-sm leading-7 text-primary-text-color">
          This information will be displayed publicly so be careful what you
          share
        </span>
      </p>
      <dl className="mt-6 border-t-[1px] leading-6 border-primary-text-color">
        <div className="[&>*]:border-t-[1px] [&>*]:pb-4">
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
          <div className="flex pt-6 border-t-2 border-primary-text-color">
            <dt className="w-[18rem] font-semibold pr-6 text-primary-text-color">
              Password
            </dt>
            <dd className="flex justify-between flex-auto">
              <div className="text-primary-text-color text-sm">
                *********
                <span className="alert alert-danger mx-2">[encrypted]</span>
              </div>
            </dd>
          </div>
        </div>
      </dl>
      <div className="alert" id="updateSuccess"></div>
    </main>
  );
};

export default GeneralSettings;
