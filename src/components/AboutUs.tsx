import Image, { StaticImageData } from 'next/image';
import ContactForm from './ContactForm';
import Logo from '../../public/images/logo.png';
import One from '../../public/images/1.png';
import Two from '../../public/images/2.png';
import Three from '../../public/images/3.png';

const AboutUs = () => {
  interface Data {
    id: number;
    color?: string;
    image: StaticImageData;
    title: string;
    titleBottom?: string;
    subtitle: string;
  }
  const aboutData: Data[] = [
    {
      id: 1,
      color: 'text-[#f12d83]',
      image: One,
      title: 'Designed for ',
      titleBottom: 'children',
      subtitle: 'Interface and graphics adapted specifically for preschoolers',
    },
    {
      id: 2,
      color: 'text-[#7ec14b]',
      image: Two,
      title: 'Develop all',
      titleBottom: 'basic skills',
      subtitle: 'Kids solve fundamental problems in a natural and fun way',
    },
    {
      id: 3,
      color: 'text-[#01b2b9]',
      image: Three,
      title: 'Games are',
      titleBottom: 'insanely fun',
      subtitle: 'Bright pictures and cute characters make learning easy and desirable!',
    },
  ];
  return (
    <section className="about-us container mx-auto py-32 px-4">
      <div className="about-container max-w-[1375px] mx-auto">
        <div className="top-section max-w-[840px] mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl text-center text-primary">About Us</h2>
          <Image src={Logo} alt="Logo" className="max-w-[300px] block my-6 mx-auto " />
          <h3 className="text-xl md:text-2xl text-primary mb-8">Fun Apps & Games For Kids</h3>
          <p className="text-base md:text-lg">We know that children learn much more willingly and faster if they like it! The best way to captivate kids is through play. We have combined these concepts in our educational mobile applications. A variety of games, funny characters, and exciting tasks allow every child to find something new and interesting for themselves. All applications are developed in accordance with the recommendations of a qualified child educator. Play and learn with Epicat Games!</p>
        </div>
        <div className="mid-section mb-24">
          <div className="flex flex-wrap">
            {aboutData.map(({ id, image, title, titleBottom, subtitle, color }) => {
              return (
                <div className="card mx-auto md:w-1/3 px-7 pb-12 text-center" key={id}>
                  <div className="max-w-[340px] mx-auto">
                    <Image src={image} alt="About" />
                    <h3 className={`text-2xl md:text-3xl font-bold ${color} mb-4`}>
                      {title} <br />
                      {titleBottom}
                    </h3>
                    <p className="text-base md:text-lg">{subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default AboutUs;
