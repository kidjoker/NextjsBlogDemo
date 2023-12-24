import styles from './singlePage.module.css'
import Menu from '../components/menu/Menu'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>10.10.2021</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis
                    </p>
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default page