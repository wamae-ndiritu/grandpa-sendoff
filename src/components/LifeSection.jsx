const LifeSection = () => {
  return (
    <div className='bg-gray-100 p-5 md:p-10'>
      {/* Download Button */}
      <div className='mb-5 w-full flex justify-center'>
        <a
          href='/gukas-eulogy.pdf'
          download
          className='px-4 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-600'
        >
          Download Eulogy (PDF)
        </a>
      </div>
      <div className='flex flex-col md:flex-row justify-between' id='eulogy'>
        {/* English Version */}
        <div className='w-full md:w-1/2 bg-white border-2 border-black rounded-md p-4 mb-6 md:mb-0 md:mr-4'>
          <h2 className='text-center text-lg font-semibold border-b-2 border-black pb-2 mb-4'>
            LIFE OF THE LATE MZEE NGARIUKU WA MATU
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-base font-semibold'>Birth</h3>
              <p className='text-lg mt-2'>
                The late Mzee Ngariuku Wa Matu was born in 1926 at Gachika
                Village, Kirichu Sub-location, Kiganjo Location, Nyeri County.
                His parents were the Late Mata Wamai and the Late Kabugo Matu.
                He was brother to Theuri Matu and many others who shared the
                same father.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Childhood</h3>
              <p className='text-lg mt-2'>
                The Late Mzee Ngariuku grew up being obedient and respectful to
                his parents. He helped his parents in farming and looking after
                his father’s cattle.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Education</h3>
              <p className='text-lg mt-2'>
                The late Ngariuku wa Matu attended Kirichu Primary School up to
                class two. He later began working as a casual laborer.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Marriage</h3>
              <p className='text-lg mt-2'>
                During the year 1946, the late Mzee Ngariuku was married to the
                love of his life the late Ann Wairimu. They were blessed with
                eight children namely; the late Purity Nyaruai Rukwaro, Winrose
                Gathoni, the late Nancy Wangui Mburu, Margaret Wangeci Waweru,
                William Matu, the late Gibert Maina, Tabitha Muringi Munuhe, and
                Phillip Wamai.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>
                Contribution to the Struggle for Independence
              </h3>
              <p className='text-lg mt-2'>
                The Late Mzee Ngariuku wa Matu contributed to the struggle for
                independence. Without even being an active fighter, he found
                himself contributing to the early struggle for independence. Him
                and many others were detained, what is popularly known as
                (Gutwarwo ithamirioni). In their detainment, they were forced to
                work under the colonial government as casual labourers. They
                participated in various constructions and development projects
                carried out by the colonial government including the
                construction of the Jomo Kenyatta International Airport. They
                worked as slaves following their failure to collaborate with the
                Mzungu. He never collaborated with them unlike the so called
                Kamatimu/Ngati. He has lived to enjoy the fruits of the struggle
                for independence and always called for unity of our country
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Church</h3>
              <p className='text-lg mt-2'>
                The Late Mzee Ngariuku wa Matu was baptized with the Orthodox
                Church. He has been a believer till his demise.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Work</h3>
              <p className='text-lg mt-2'>
                The Late Mzee Ngariuku wa Matu worked in masonry both as a
                casual labourer and employed. He was employed by the Kenya
                Police College, Kiganjo as a mason. He worked there up to his
                retirement. He was industrious and has equipped several people
                with the same skills that has earned them a living.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Demise</h3>
              <p className='text-lg mt-2'>
                The Late Mzee Ngariuku wa Matu has been healthy up to his aged
                days. On Monday, 2<sup>nd</sup> September early morning, he
                passed away. He has left many sons and daughters, grand-children
                and great grand-children. He passed at the age of 98yrs. We are
                grateful to the Almighty Lord for the many years he had given us
                to live with one who was a father, grandfather and
                great-grandfather, Mzee Ngariuku wa Matu. May the name of the
                Lord be blessed.
              </p>
            </div>
          </div>
        </div>

        {/* Gikuyu Version */}
        <div className='w-full md:w-1/2 bg-white border-2 border-black rounded-md p-4 md:ml-4'>
          <h2 className='text-center text-lg font-semibold border-b-2 border-black pb-2 mb-4'>
            RUGANO RWA MUTIGA-IRI MUTHEE NGARIUKU WA MATU (KARIUKI MATU )
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-base font-semibold'>Guciarwo Gwake</h3>
              <p className='text-lg mt-2'>
                Mutiga-iri Muthee Ngariuku wa Matu ni aciarirwo mwaka-ini wa
                1926 itura-ini ria Gachika Sub-location, Kiganjo location, Nyeri
                County. Aciciari ake ni Mutiga-iri Matu Wamai na Mwendwani-iri
                Kabugo Matu. Aciaranirwo na mutiga-iri Theuri Matu, na ni a ithe
                umwe na angi aingi.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Unyinyi Wake</h3>
              <p className='text-lg mt-2'>
                Muthee Ngariuku ari munini ni akurire ena wathiki muingi na
                wendo kuri aciari ake. Ni ateithagia aciari ake wiraina wa
                kurima na kurithia ng’ombe cia ithe.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Githomo Giake</h3>
              <p className='text-lg mt-2'>
                Muthee Ngariuku wa Matu ni athomire o-nginya kirathi gia keri
                cukuru-ini wa Kirichu Primary School. Kuma hau niathire wiraini
                wa marimia.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Kuhikania Gwake</h3>
              <p className='text-lg mt-2'>
                Kuri mwaka-ini wa 1946, Muthee Ngariuku niahikirie mwendwa wake
                niwe mwendwani-iri Ann Wairimu. Nimatanahirwo na ciana inyanya
                nio mwendwani-iri Purity Nyaruai Rukwaro, Winrose Gathoni,
                mwendwani-iri Nancy Wangui Mburu, Margaret Wangeci Waweru,
                William Matu, Mutiga-iri Gilbert Maina, Tabitha Muringi Munuhe
                na Phillip Wamai.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>
                Wirutiri Wake Bara-Ini ya Wiyathi
              </h3>
              <p className='text-lg mt-2'>
                Nianyitanagira na njamba cia mau mau maundu-ini ta makumethera
                irio na kumathiganira maria muthungu athugundaga. Kuri mwaka-ini
                wa 1948 nimanyitirwo na magitwarwo ithamirio mari ta ngombo cia
                muthungu. Ihinda-ini riu nimarutire wira muingi hamwe na gwaka
                Jomo Kenyatta International Airport. Ni akenagirira wiyathi wa
                bururi witu wa Kenya na akamenereria ari manyitanagira na
                muthungu, nio Kamatimu kana Ngati. Arari muitikia munene wa andu
                maikare maiguanite ta bururi.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Kanitha</h3>
              <p className='text-lg mt-2'>
                Mutiga-iri Muthee Ngariuku wa Matu arari murumiriri wa kanitha
                wa Orthodox o-ginya kuhuruka gwake.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Wira Wake</h3>
              <p className='text-lg mt-2'>
                Muthee Ngariuku niathire na mbere na wira wake wa marimia ta
                fundi wa miako ya mahiga. Niacokire akiandikwa Kenya Police
                College, Kiganjo ari fundi, kuria arutire wira wake ginya
                kuritaya gwake. Niari na kio wira-ini wake na agitiga aruta andu
                aingi wira ucio arutaga.
              </p>
            </div>

            <div>
              <h3 className='text-base font-semibold'>Kuhuruka Gwake</h3>
              <p className='text-lg mt-2'>
                Mutiga-iri Muthee Ngariuku niarakoretwo ari na ugima mwega wa
                mwiri nginya ihinda-ini riri ria ukuru wake. Kuri muthenya wa
                Jumatatu, tariki 2 mweri wa 9 ruciini, Muthee Ngariuku
                niahurokirio ni mwathani. Arari Baba, Guka na Guka ria-keri kuri
                aingi. Ni turacokeria Ngai ngatho niundu wa mahinda maria
                aratuhete maguikarania na uria ukoretwo ari Baba na Guka witu
                Muthee Ngariuku wa Matu. Arahurukire ari na ukuru wa miaka
                mirongo kenda na inana(98yrs). Ritwa ria Mwathani rirogocwo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSection;
