import React from "react";
import style from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.detailsContainer}>
        <div className={style.details}>
          <div className={style.detail}>
            <i class="far fa-address-book"></i>
            <h6>ADDRESS</h6>
            <p>Nairobi,kenya</p>
          </div>
          <div className={style.detail}>
            <i class="fas fa-phone"></i>
            <h6>PHONE</h6>
            <p>+254 700 000 940</p>
          </div>
          <div className={style.detail}>
            <i class="fas fa-envelope-square"></i>
            <h6>EMAIL</h6>
            <p>
              <a>dancanmilgo73@gmail.com</a>
            </p>
          </div>
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
