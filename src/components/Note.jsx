import React from "react";
// تم التحديث لاستيراد الأيقونة من المكتبة الحديثة @mui/icons-material
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
   
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
