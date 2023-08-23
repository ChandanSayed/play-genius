import Image, { StaticImageData } from 'next/image';
import img1 from '../../public/images/image1.png';
import thumb1 from '../../public/images/thumb1.jpg';
import img2 from '../../public/images/image2.png';
import thumb2 from '../../public/images/thumb2.png';
import img3 from '../../public/images/image3.png';
import thumb3 from '../../public/images/thumb3.png';
import img4 from '../../public/images/image4.png';
import thumb4 from '../../public/images/thumb4.jpg';
import img5 from '../../public/images/image5.png';
import thumb5 from '../../public/images/thumb5.png';

const OurApp = () => {
  interface Data {
    id: number;
    age: number;
    ageColor: string;
    image: StaticImageData;
    thumbnail: StaticImageData;
    title: string;
    subtitle: string;
    description: string;
  }
  const articleData: Data[] = [
    {
      id: 1,
      age: 2,
      ageColor: 'text-[#ff0a4c]',
      image: img1,
      thumbnail: thumb1,
      title: 'Coloring and Drawing for Kids',
      subtitle: 'Every child is an artist!',
      description: "Develop creative skills and patience! Coloring game is a great way to entertain your children with great benefit. Cute pictures with animals, dinosaurs, monsters, and other characters will touch everyone's feelings.",
    },
    {
      id: 2,
      age: 2,
      ageColor: 'text-[#fa8300]',
      image: img2,
      thumbnail: thumb2,
      title: 'Coloring and Drawing for Kids',
      subtitle: 'Every child is an artist!',
      description: "Develop creative skills and patience! Coloring game is a great way to entertain your children with great benefit. Cute pictures with animals, dinosaurs, monsters, and other characters will touch everyone's feelings.",
    },
    {
      id: 3,
      age: 3,
      ageColor: 'text-[#555]',
      image: img3,
      thumbnail: thumb3,
      title: 'Coloring and Drawing for Kids',
      subtitle: 'Every child is an artist!',
      description: "Develop creative skills and patience! Coloring game is a great way to entertain your children with great benefit. Cute pictures with animals, dinosaurs, monsters, and other characters will touch everyone's feelings.",
    },
    {
      id: 4,
      age: 3,
      ageColor: 'text-[#555]',
      image: img4,
      thumbnail: thumb4,
      title: 'Coloring and Drawing for Kids',
      subtitle: 'Every child is an artist!',
      description: "Develop creative skills and patience! Coloring game is a great way to entertain your children with great benefit. Cute pictures with animals, dinosaurs, monsters, and other characters will touch everyone's feelings.",
    },
    {
      id: 5,
      age: 3,
      ageColor: 'text-[#fa8300]',
      image: img5,
      thumbnail: thumb5,
      title: 'Coloring and Drawing for Kids',
      subtitle: 'Every child is an artist!',
      description: "Develop creative skills and patience! Coloring game is a great way to entertain your children with great benefit. Cute pictures with animals, dinosaurs, monsters, and other characters will touch everyone's feelings.",
    },
  ];
  return (
    <section className="ourApp pt-[80px] pb-[45px] relative z-40 bg-white">
      <h2 className="text-5xl mb-12 text-center text-primary">Our Apps</h2>
      <div className="app-container px-4 lg:px-7 max-w-[900px] mx-auto">
        <div className="flex flex-wrap">
          {articleData.map(({ id, age, ageColor, image, thumbnail, title, subtitle, description }) => {
            return (
              <div className="w-full md:w-1/2 px-0 md:px-4 pb-8" key={id}>
                <article className="h-full p-2 rounded-2xl transition-all bg-white shadow-article hover:shadow-articleHover">
                  <div className="flex flex-col app-body">
                    <div className="app-thumbnail rounded-lg overflow-hidden relative mb-9">
                      <Image src={image} alt="app thumbnail" className="w-full" />
                      <span className={`app-age h-10 md:h-12 flex flex-col items-center justify-center ${ageColor} absolute top-[-1px] right-[-1px] text-3xl w-14 z-10 rounded-bl-3xl bg-white`}>{age}+</span>
                    </div>
                    <div className="app-content px-2 mb-4">
                      <div className="flex">
                        <div className="app-content-thumbnail w-[115px] h-[115px] mr-2 border-[6px] border-white border-solid rounded-[18px] overflow-hidden" style={{ boxShadow: '0 4px 10px rgba(176,212,223,.25)' }}>
                          <Image src={thumbnail} alt="Content Thumbnail" />
                        </div>
                        <div className="app-content-info flex-1">
                          <h3 className="title text-base md:text-2xl font-bold">{title}</h3>
                          <h4 className="subtitle text-xs md:text-xl mt-3">{subtitle}</h4>
                        </div>
                      </div>
                      <p className="app-preview mt-5 md:mt-7 text-sm md:text-lg">{description}</p>
                    </div>
                    <div className="app-links flex mt-0 mb-1 md:my-2">
                      <div className="app-link-wrapper w-1/2 p-2">
                        <a href="https://apps.apple.com/app/id1546739987" className="app-link app-link__ios block h-[45px] md:h-14 w-full bg-[#2b2b2b] bg-[url(../../public/images/apple.svg)] bg-no-repeat bg-[50%] bg-contain rounded-md" target="_blank" rel="nofollow"></a>
                      </div>
                      <div className="app-link-wrapper w-1/2 p-2">
                        <a href="https://play.google.com/store/apps/details?id=com.epicat.coloring" className="app-link app-link__android block h-[45px] md:h-14 w-full bg-[#2b2b2b] bg-[url(../../public/images/google.svg)] bg-no-repeat bg-[50%] bg-contain rounded-md" target="_blank" rel="nofollow"></a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApp;
