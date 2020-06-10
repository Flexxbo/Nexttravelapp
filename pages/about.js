/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";
import Imageboxcontainer from "../components/Imageboxcontainer";
import Topbox from "../components/Topbox";

/*Start coding from here */

const about = () => {
  return (
    <Layout>
      <div className="pagetop">
        <h1 className="justText">Havanna</h1>
        <p className="justText">
          Havana is a surprisingly expensive city to stay in; if you stay in
          hotels and eat in restaurants it can work out to be nearly as
          expensive as other popular international destinations. The problem is
          that Cuba has a dual economy, if you could live on pesos it would be
          incredibly cheap. Sadly, as a tourist this is virtually impossible.
          Most peso hotels won't take foreigners or, if they do you have to pay
          in CUC. If you are on any kind of a budget it is advised to stay in
          casas particulares; it is much cheaper, often more comfortable and the
          food (a recurring theme in Cuba) is almost invariably better. Food,
          transport, but also certain souvenirs you can buy both in CUC and CUP.
          In the old town you will find many expensive places, especially on
          pedestrian roads like O'Reilly, Obispo and Obrapia. Some parallel
          streets can be a lot cheaper and even peso restaurants can be found.
          Don't get fooled by the art and souvenir shops on those main roads.{" "}
        </p>
        <Topbox />
        <h2 className="justText">
          <br></br>Things to do
        </h2>
        <p className="justText">
          Havana is a surprisingly expensive city to stay in; if you stay in
          hotels and eat in restaurants it can work out to be nearly as
          expensive as other popular international destinations. The problem is
          that Cuba has a dual economy, if you could live on pesos it would be
          incredibly cheap. Sadly, as a tourist this is virtually impossible.
          Most peso hotels won't take foreigners or, if they do you have to pay
          in CUC. If you are on any kind of a budget it is advised to stay in
          casas particulares; it is much cheaper, often more comfortable and the
          food (a recurring theme in Cuba) is almost invariably better. Food,
          transport, but also certain souvenirs you can buy both in CUC and CUP.
          In the old town you will find many expensive places, especially on
          pedestrian roads like O'Reilly, Obispo and Obrapia. Some parallel
          streets can be a lot cheaper and even peso restaurants can be found.
          Don't get fooled by the art and souvenir shops on those main roads.{" "}
        </p>
        <Imageboxcontainer />
        {/*<MapComponent /> */}
        <style jsx>{`
          .pagetop {
            text-align: center;
            border: 1px black solid;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default about;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
