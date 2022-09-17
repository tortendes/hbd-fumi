import style from '../styles/Footer.module.scss';


const Footer = (): JSX.Element => {
    return (
        <footer className={style.footer}>
           <div>
            &copy; 2022
            Website design by <a href="https://torten.xyz" target="_blank" rel="noreferrer">Torten</a>
           </div>
           <div>
                The Fumi Experience made by <a href="https://twitter.com/LitBlu22" target="_blank" rel="noopener noreferrer">Sushi</a>
           </div>
           <div>
                Animation made by <a href="http://twitter.com/fishuu9" target="_blank" rel="noopener noreferrer">Fish</a>
           </div>
           <div>
            and with the contributions from the community
           </div>
        </footer>
    )
}

export default Footer;