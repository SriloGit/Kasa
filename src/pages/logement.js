import { useParams, Navigate } from "react-router-dom";
import datas from "../datas/logements.json";
import Carrousel from "../components/carrousel";
import TagList from "../components/tagList";
import Stars from "../components/starrate";
import Dropdown from "../components/dropdown";

function Logement() {
  let { id } = useParams();
  const logement = datas.filter((element) => element.id === id)[0];
  if (logement === undefined) {
    return <Navigate replace to="/error" />;
  }
  return (
    <main className="page component logement">
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
        <div className="logement_Dropdown">
          <Dropdown title="Description">{logement.description}</Dropdown>
          <Dropdown title="Équipements">
            <ul>
              {logement.equipments.map((item) => (
                <li key={logement.id + "_" + item}>{item}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </article>
    </main>
  );
}

export default Logement;