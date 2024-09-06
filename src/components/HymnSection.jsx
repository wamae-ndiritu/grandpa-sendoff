import image8 from "../assets/photos/img-8.jpg";
import doveImage from "../assets/dove.png";

const HymnSection = () => {
  return (
    <div className='bg-lightBlue p-5 md:p-10 rounded-md shadow-lg relative'>
      {/* Image of the late at the top */}
      <div className='flex justify-center mb-6'>
        <img
          src={image8}
          alt='The Late Mzee'
          className='w-3/4 md:w-1/2 rounded-md shadow-lg'
        />
      </div>

      {/* Animated doves and flowers */}
      <div className='absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32'>
        {/* Dove animation (can be implemented using CSS animations or Lottie) */}
        <img src={doveImage} alt='Dove' className='animate-float' />
      </div>
      <div className='absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32'>
        {/* Flower animation (can be implemented using CSS animations or Lottie) */}
        <img src={doveImage} alt='Flower' className='animate-float' />
      </div>

      {/* Hymn text */}
      <div className='text-center text-black mt-6 md:mt-10'>
        <h3 className='text-lg font-semibold mb-4'>ANDU ME NYUMBA IMWE</h3>
        <p className='text-base leading-relaxed'>
          Andũ me nyũmba imwe
          <br />
          Mangikararania nyũmba iyo makĩte
          <br />
          Yaharagana
          <br />
          <br />
          [1]
          <br />
          Nĩ ũhoro mwega atĩa, o na wĩ gĩkeno
          <br />
          Andũ me nyũmba imwe maiguanite
          <br />
          <br />
          [2]
          <br />
          Acio nĩ ta tawa mũiyũru maguta
          <br />
          Ũgĩtherera andũ othe
          <br />
          Me nyũmba thĩĩni
          <br />
          <br />
          [3]
          <br />
          Mahana maguta maitĩrĩrio mutwe
          <br />
          Makaiyura ngũo-inĩ cia mũthĩnjĩrĩ
          <br />
          <br />
          [4]
          <br />
          Ngoro ciao ihana mũthamakĩ wa ma
          <br />
          Rĩĩra eguthamakira ndũrĩrĩ ciothe
          <br />
          <br />
          [5]
          <br />
          Ũthamaki wa thĩ Jehova nĩatuite
          <br />
          Ũhũrane guo mwene ũthuthĩke wothe
          <br />
        </p>
      </div>
    </div>
  );
};

export default HymnSection;
