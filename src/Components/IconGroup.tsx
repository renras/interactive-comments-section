import ButtonWithIcon from "./ButtonWithIcon";
import editIcon from "../Assets/images/icon-edit.svg";
import deleteIcon from "../Assets/images/icon-delete.svg";

const IconGroup = () => {
  return (
    <div className="flex gap-6 ml-auto">
      <ButtonWithIcon
        src={deleteIcon}
        alt="delete-icon"
        text="Delete"
        textStyle="text-soft-red font-medium text-lg"
      />
      <ButtonWithIcon
        src={editIcon}
        alt="edit-icon"
        text="Edit"
        textStyle="text-moderate-blue font-medium text-lg"
      />
    </div>
  );
};

export default IconGroup;
