import styles from "./our_services_page.module.css";

import { Service } from "./service/service";

import serviceImage from "./service.jpg";
import backgroundDotPatternImage from "./background_dot_pattern.jpg";

const services = [
    {
        "name": "App Development",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptates natus, tempore velit quas aperiam consequatur magnam alias eos! Delectus possimus perspiciatis ab veritatis ratione quam itaque minus velit sint.",
        "image": serviceImage,
    },
    
    {
        "name": "System Integration",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptates natus, tempore velit quas aperiam consequatur magnam alias eos! Delectus possimus perspiciatis ab veritatis ratione quam itaque minus velit sint.",
        "image": serviceImage,
    },

    {
        "name": "Cloud Based Solutions",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptates natus, tempore velit quas aperiam consequatur magnam alias eos! Delectus possimus perspiciatis ab veritatis ratione quam itaque minus velit sint.",
        "image": serviceImage,
    }
];

export function OurServicesPage() {
    return (
        <div className={styles.our_services_page}>
            <h1>Our Services</h1>

            <p>
                With an innovative and fresh perspective, we approach challenges head-on, leveraging cutting-edge technology to provide creative solutions
                for all your needs. Our range of services includes:
            </p>

            <div className={styles.services_list}>
                {services.map(
                    (value, index) => {
                        return (
                            <Service 
                                key={index}
                                name={value.name} description={value.description} image={value.image} 
                                direction={(index % 2 !== 0) ? 'left-to-right' : 'right-to-left'}
                                className={styles.service}
                            />
                        );
                    }
                )}
            </div>

            {/* <img className={styles.background_dot_pattern} src={backgroundDotPatternImage} /> */}
        </div>
    );
}