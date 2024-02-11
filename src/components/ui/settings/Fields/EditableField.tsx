import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../../user/types";
import { updateUserAsync } from "../../../../user/redux/userSlice";

const EditableField = ({ label, value, fieldName }: any) => {
  const ref = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);
  const startEditing = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    // @ts-ignore
    const newValue = ref.current!.value;
    if (newValue !== undefined) {
      dispatch(
        // @ts-ignore
        updateUserAsync({
          ...user,
          [fieldName]: newValue,
        })
      );
    }
    setIsEditing(false);
  };
  return (
    <div className="flex pt-6 border-t-2 border-primary-text-color">
      <dt className="w-[18rem] font-semibold pr-6">
        <label htmlFor={fieldName + "Id"}>{label}</label>
      </dt>
      <dd className="flex justify-between flex-auto">
        <div>
          {isEditing ? (
            <input
              type="text"
              defaultValue={value ? value : "Not specified"}
              name={fieldName}
              id={fieldName + "Id"}
              ref={ref}
            ></input>
          ) : (
            <span className="text-primary-text-color">
              {value ? value : "Not specified"}
            </span>
          )}
        </div>
        <div className="font-bold cursor-pointer [&>*]:no-underline">
          {isEditing ? (
            <a
              type="button"
              className="text-primary-text-color "
              onClick={() => handleSave()}
            >
              Save
            </a>
          ) : (
            <a
              type="button"
              className="text-primary-text-color "
              onClick={startEditing}
            >
              Update
            </a>
          )}
        </div>
      </dd>
    </div>
  );
};

export default EditableField;
