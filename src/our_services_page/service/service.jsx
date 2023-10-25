import styles from "./service.module.css";

import { RiVerifiedBadgeFill } from "react-icons/ri";


export function Service(props) {
    return (
        <div className={`${styles.service} ${props.className}`}>
            <img src={props.image} className={styles.image} style={{order: calculateImageOrder(props.direction) }} />

            <div className={styles.text_grid_cell}>
                <div className={styles.text_area}>
                    <div className={styles.badge_container}>
                        <RiVerifiedBadgeFill style={{ fontSize: '2rem'}} className="ab" />
                    </div>

                    <h2>{props.name}</h2>

                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

function calculateImageOrder(direction) {
    if (Number.parseInt(window.innerWidth) <= 512) {
        return "unset";
    }
    else {
        return (direction === "left-to-right") ? 1 : 0;
    }
}