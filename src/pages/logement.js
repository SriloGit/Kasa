import { useParams, Navigate } from "react-router-dom";
import datas from "../datas/logements.json";
import Carrousel from "../components/carrousel";
import TagList from "../components/tagList";
import Stars from "../components/starrate";
import Dropdown from "../components/dropdown";
import Footer from '../components/footer'

function Logement() {
  //Get the id param from the URL
  let { id } = useParams();
  //Get the data of the correct accomodation with his id
  const logement = datas.filter((element) => element.id === id)[0];
  if (logement === undefined) {
    return <Navigate replace to="/error" />;
  }
  return (
    <><main className="page component logement">
      <article>
        <Carrousel arrayOfImg={logement.pictures} />
        <div className="logement_informations">
          <div className="logement_infos">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <TagList
              listOfTags={logement.tags}
            />
          </div>
          <div className="logement_infosPlus">
            <Stars rating={parseInt(logement.rating)} />
            <div className="logement_infosPlus-host">
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
          </div>
        </div>
        <div className="logement_dropdown">
          <Dropdown title="Description" description={logement.description}></Dropdown>
          <Dropdown title="Équipements"description={<ul>
              {logement.equipments.map((item) => (
                <li key={logement.id + "_" + item}>{item}</li>
              ))}
            </ul>}>
          </Dropdown>
        </div>
      </article>
    </main>
    <Footer /></>
  );
}

export default Logement;