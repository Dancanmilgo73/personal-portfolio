import React from "react";
import style from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.detailsContainer}>
        <div className={style.details}>
          <i class="far fa-address-book"></i>
          <h6>ADDRESS</h6>
          <i class="fas fa-phone"></i>

          <h6>PHONE</h6>
          <i class="fas fa-envelope-square"></i>
          <h6>EMAIL</h6>
        </div>
      </div>
      <div className={style.formarea}>
        <form>
          <input type="text" placeholder="Name" required="required" />
          <input type="email" placeholder="Email" required="required" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
