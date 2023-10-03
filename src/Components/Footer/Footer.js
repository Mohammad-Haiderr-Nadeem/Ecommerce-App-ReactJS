import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  const handleOnClick= () =>{
    navigate('/shop');
  } 

  return (
    <main>
      <div>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerLinks}>
                <ul>
                  <li>
                    <p onClick={handleOnClick}>About</p>
                    <p>bloomwatch is specialized software for</p>
                    <p>watersports schools(surfing, kiotesurfing,</p>
                    <p>sailing and diving) and outdoor activity</p>
                    <p>providers(sking and climbing)</p>
                  </li>
                  <li>
                    <p onClick={handleOnClick}>Contacts</p>
                    <p>0900-786-01</p>
                    <p>wave@bloomwatch.com</p>
                    <p>Spain</p>
                  </li>
                  <li>
                    <p onClick={handleOnClick}>Useful Links</p>
                    <p>About Us</p>
                    <p>History</p>
                    <p>Contact Us</p>
                  </li>
                  <li>
                    <p onClick={handleOnClick}>Instagram</p>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzc2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                        alt="diving"
                        height="50px"
                        width="50px"
                      ></img>
                      <img
                        style={{ marginLeft: "5px" }}
                        src="https://images.unsplash.com/photo-1561983779-7d7e065befa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzIxODg2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                        alt="diving"
                        height="50px"
                        width="50px"
                      ></img>
                      <img
                        style={{ marginLeft: "5px" }}
                        src="https://images.unsplash.com/photo-1694901551644-8aa452288808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTMwNjQ5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                        alt="diving"
                        height="50px"
                        width="50px"
                      ></img>
                      <img
                        style={{ marginLeft: "5px" }}
                        src="https://images.unsplash.com/photo-1694630515448-344264b30507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTMwNjU2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                        alt="diving"
                        height="50px"
                        width="50px"
                      ></img>
                      <img
                        style={{ marginLeft: "5px", marginTop: "5px" }}
                        src="https://images.unsplash.com/photo-1688317220026-621e3058cc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODU2MjYzNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                        alt="diving"
                        height="50px"
                        width="50px"
                      ></img>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
