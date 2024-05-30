import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then((reponse) => {
        console.log(reponse);
        toast.success(`Success!!! Contact "${reponse.name}" is delete`);
      })
      .catch((error) => {
        toast.error(`Error "${error}", please try againe`);
      });

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>
        <p className={css.nomber}>
          <FaPhone />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}