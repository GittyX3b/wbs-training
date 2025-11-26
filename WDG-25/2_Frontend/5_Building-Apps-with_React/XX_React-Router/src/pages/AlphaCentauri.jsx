// import { useEffect } from 'react';

const AlphaCentauri = () => {
  // useEffect(() => {
  //   document.title = 'Alpha Centauri | Stars Gallery';
  // }, []);

  return (
    <div className="star">
      {/* title und andere Tags, die in den <head> gehören, können seit React19 */}
      {/* in eine Komponente geschireben werden. Der obige useEffect ist nicht mehr nötig */}
      <title>Alpha Centauri | Stars Gallery</title>
      <div>
        <img src="/alpha-centauri.jpeg" alt="Alpha Centauri, the closest Star System to us." />
      </div>
      <h3 className="star__heading">Alpha Centauri - A Stellar Marvel</h3>
      <p className="star__description">
        Alpha Centauri stands as one of the most intriguing systems in our galactic neighborhood.
        Comprising three stars—Alpha Centauri A, Alpha Centauri B, and Proxima Centauri—it offers a
        unique opportunity to study different stages of stellar evolution and the dynamics of
        multiple-star systems.
      </p>
      <p className="star__description">
        Proxima Centauri, the closest star to our solar system, has long captivated astronomers as a
        potential host for habitable exoplanets. Webb&apos;s scrutiny of Proxima Centauri will delve
        into its stellar activity, unveiling insights into flares and magnetic fields. Such
        knowledge is crucial for assessing the habitability and potential existence of exoplanetary
        systems within its vicinity.
      </p>
      <p className="star__description">
        The presence of multiple stars in the Alpha Centauri system offers a unique opportunity to
        study stellar evolution and the intricate dynamics of triple star systems. Webb&apos;s
        observations will help unravel the complex interactions between these stars, shedding light
        on their formation, evolution, and potential orbital resonances. These findings will enhance
        our understanding of star formation processes and the overall dynamics of stellar systems.
      </p>
    </div>
  );
};

export default AlphaCentauri;
