import Link from 'next/link';
import { NavigationRoutes } from '../configs';
import style from '../styles/Navigation.module.scss'

const Navigation = (): JSX.Element => {
    return (
        <>
            <nav className={style.navbar}>
                <h1 className={style.navbar_title}>Happy Birthday Fumi!</h1>
                <ul className={style.navbar_links}>
                    {
                        NavigationRoutes.map((route) => (
                            <li key={route.key} className="route">
                                { route.onsite && <Link href={route.route}>
                                    {route.name}
                                </Link> }
                                { route.onsite == false && <a href={route.route} target="_blank" rel="noreferrer">
                                    {route.name}
                                </a> }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navigation