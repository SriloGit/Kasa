import '../styles/App.css';
import Thumb from '../components/thumb'
import data from '../datas/logements.json'
import homebg from '../assets/Home_background.png'

function Home() {
    return (
	    <main className="page component home">
            <article>
                <div className="home_illustration">
                    <img src={homebg} alt="" />
                    <h1>
                        Chez vous,
                        <br className="mobile-break" /> partout et ailleurs
                    </h1>
                </div>
                <div className="home_thumbs">
                    <ul>
                        {data.map((log) => (
                        <Thumb
                            key={log.id}
                            id={log.id}
                            title={log.title}
                            cover={log.cover}
                        />
                        ))}
                    </ul>
                </div>
            </article>
        </main>
	)
}

export default Home;
