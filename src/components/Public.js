import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Vishwakarma University</span></h1>
            </header>
            <main className="public__main">
                <p>Vishwakarma University is one of the top Universities in Pune with futuristic academic programmes that meet the learning and career needs of a variety </p>
                <address className="public__addr">
                    Vishwakarma University <br />
                    is located in Pune ,Maharastra ,India <br/>
                    Address: Survey No 2, 3,4, Kondhwa Main Rd, Laxmi Nagar, Betal Nagar, Kondhwa, Pune, Maharashtra 411048 <br />
                    <a href="095903 00911">095903 00911</a>
                </address>
                <br />
                <p>VU</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public