import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import wagichira from "../assets/photos/tributes/wagichira-mburu.jpg";
import wairimuGathonI from "../assets/photos/tributes/wairimu-gathoni.jpg";
import ngariukuWamai from "../assets/photos/tributes/ngariuku-wamai.jpg";
import vincent from "../assets/photos/tributes/vincent.jpg";
import ndiritu from "../assets/photos/tributes/ndiritu.jpg";

const tributes = [
  {
    name: "Isaac Ngariuku",
    relationship: "Grand son",
    image: ngariukuWamai,
    message: `Guka, I wish a had a chance to say goodbye to you, You left just when I was to pay you a visit the previous day but I failed. Did you get tired of waiting for me, or was it a bad timing for me, How I wish you would stay longer. But I'll take heart for you always told me, " wa Ngai ndûrî mûgarûri". You have taught me alot, I shall always feel equiped with the knowledge you shared. You shall always remain in my heart. Rest in eternal peace Guka`,
  },
  {
    name: "Suzanne Wairimu",
    relationship: "Grand child",
    image: wairimuGathonI,
    message: `GUKA HEAVEN’S LUCKY TO HAVE YOU SO WAS I\n\nToday, I find myself reflecting on the incredible journey of my grandfather, Isaac Ngariuku, a man whose presence was a constant source of love, wisdom, and unwavering support throughout my life. As I put pen to paper, I am filled with immense sorrow and heartache but also immense gratitude for the profound impact he had on me and the countless ways he enriched my life.\n\nMy grandfather was not just a loving family member; he was a steadfast companion through every milestone and challenge I faced. From my earliest memories to the pivotal moments of my adulthood, he was always there, walking beside me with a gentle strength and a heart full of unconditional love. His support was a steady beacon that guided me through life’s uncertainties, offering reassurance when I needed it most.\n\nHis love was a constant, unchanging force. In a world that often feels unpredictable, his presence provided a comforting sense of stability and security. He had an extraordinary way of making me feel valued and understood, no matter what I was going through. His love was not only expressed in words but in the countless actions that demonstrated his deep commitment to my well-being and happiness.\nGuka was also a wellspring of wisdom. His counsel was always given with such thoughtfulness and clarity, helping me navigate life's complexities with greater insight and confidence. Whenever I sought guidance, his advice always aimed at helping me grow and find my own path.\n\nThe moments we shared together, whether through joyous celebrations or quiet conversations, are cherished treasures.\n\nAs I celebrate your life today, I am reminded of the values you instilled in me: kindness, integrity, and the importance of being present for those we love.\n\nThank you Guka, for being a guiding light in my life. Your love and wisdom have shaped me in ways words can scarcely capture. I will carry your memory with me always, and your influence will continue to guide me as I navigate my own path.\n\nRest in Eternal peace my beloved Guka.\nWith all my love and deepest gratitude,\nWairimu wa Ngariuku\n(Your wife as you oftenly called me)\nSpecial dedication:
    `,
    video: "https://youtu.be/UYNilQ_u09o?feature=shared",
  },
  {
    name: "Ndiritu wa Wamai",
    relationship: "Grand Child",
    image: ndiritu,
    message: `A Tribute to Guka ✨\n\nToday, we celebrate the life of a man who was not just our grandfather but the very foundation of our family. Guka, you lived a long and fulfilling life, reaching 98 years with grace, strength, and wisdom. You were the pillar of the Ngariuku family, always guiding us with your steady hand and kind heart. ❤️\n\nYou never needed to say much; your actions spoke louder than words. You taught us the value of hard work 💪, the importance of kindness 🌿, and the strength that comes from standing together as a family. You were always there, ready to correct us when we strayed and to encourage us when we faced challenges.\n\nGuka, you saw something in me that I sometimes doubted—a future as an engineer. You believed in me and pushed me to believe in myself. I want you to know that I will work hard to fulfill that dream, to make you proud, and to carry on the legacy you’ve left behind. 👷‍♂️\n\nIt’s hard to accept that we’ll never have another conversation, never hear your voice again. But even though you’re not with us physically, your presence will always be felt. Your wisdom, your love, and your lessons are deeply rooted in each of us. 🌟\n\nI promise to be the person you always knew I could be—strong, courageous, and kind, just like you could tell us; Wiyumiririe wa kahii ti wa kairitu. We will continue to honor you by living the values you instilled in us. Huroka uhoro Guka, Huroka uhoro njamba. 🕊️`
  },
  {
    name: "Loise Mburu",
    relationship: "Grand daughter",
    image: wagichira,
    message:
      "Only sweet memories are left in my heart with GUKA...How we visited with my late mom may God continue resting her soul in peace,and GUKA would slaughter a jogoo for me that felt so special. Countless time when he visited us in math are north and his amazing archive of family photos. I celebrate a Brilliant Man...a man of honour...a very peaceful grandpa even at his last moment he just left peacefully to be with the Lord. Something I learn from and bless the lord for gifting me GUKA. Just as you always say WA NGAI NDURI MUGARURI. yote tunayakubali. May your soul rest in perfect peace...till we meet again.",
  },
  {
    name: "Allan Muchangi Munuhe ",
    relationship: "GrandChild",
    message: `Today I celebrate a life well lived of a  renowned patriarch and a hero. My Guka! Apparently, the only grandfather I've had the whole of my life (now that my other grandfather passed away, way before I was born)\n\nVisiting Gachika was definitely a moment to long for knowing that I will find you and listen to your encouraging words and Counsel.\n\nNow that you're no more, my heart is shattered! 💔 I am however encouraged that you're somewhere better and definitely watching over us.\n\nI thank God for the years I've had to know you. I will miss you dearly!\n\nRest in Perfect Peace Grandpa 🕊️🕊️\n\nBy Muchangi Munuhe`,
  },
  {
    name: "Vincent",
    relationship: "Grand child",
    image: vincent,
    message: `TRIBUTE TO GRANDPA\n\nDear Grandpa,I still can't fathom how you're gone when it's just few days since we were together. I still recall the way we shared a cup of tea and how you'd ask for more tea to be prepared till we had our fill. However, 98 years of age is no mean achievement and I thank God for every moment he allowed me to be with you.\n\nDespite the fact that you're gone I still carry your name and I'm more proud than ever to be named after you. I thank the Almighty God for granting you good health throughout the years,despite the advancement in age. Most importantly I thank the Lord for having granted me a chance to bid you farewell and have final moments with you just before your demise, despite having procrastinated visiting your for a long time. You'll remain forever in my heart, you the pinnacle of our family tree. \n\nContinue resting in peace Grandpa 🕊️ \n“Naked I came from my mother’s womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised.” (Job 1:21)`,
  },
];

const Tributes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='tributes-section py-10 px-4 mb-24' id="tributes">
      <h2 className='text-3xl font-bold text-darkBlue text-center mb-8'>
        Tributes
      </h2>
      <div className='tributes-container max-w-2xl mx-auto'>
        {tributes.map((tribute, index) => (
          <div key={index} className='mb-4'>
            <button
              onClick={() => toggleAccordion(index)}
              className='flex justify-between items-center w-full bg-darkBlue text-creamWhite p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue-light'
            >
              <span className='text-lg font-semibold'>
                {tribute.name} - {tribute.relationship}
              </span>
              <span>
                {activeIndex === index ? (
                  <FaChevronUp className='text-xl' />
                ) : (
                  <FaChevronDown className='text-xl' />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className='bg-creamWhite text-gray-800 p-4 rounded-b-lg'>
                {tribute.image && (
                  <img
                    src={tribute.image}
                    alt={tribute.name}
                    className='h-[350px] w-full md:h-auto mb-2'
                  />
                )}
                <p style={{ whiteSpace: "pre-wrap" }}>{tribute.message}</p>
                {tribute.video && (
                    <a href={tribute.video} target="_blank" className="underline text-blue-500">{tribute.video}</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tributes;
