import Image, { StaticImageData } from 'next/image';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image3.png';
import img4 from '../../public/images/image4.png';
import img5 from '../../public/images/image5.png';

interface menuDropProps {
  menuDrop: boolean;
}

const MenuDrop = ({ menuDrop }: menuDropProps) => {
  interface Data {
    id: number;
    image: StaticImageData;
    title: string;
  }
  const articleData: Data[] = [
    {
      id: 1,
      image: img1,
      title: 'Coloring and Drawing for Kids',
    },
    {
      id: 2,
      image: img2,
      title: 'Coloring and Drawing for Kids',
    },
    {
      id: 3,
      image: img3,
      title: 'Coloring and Drawing for Kids',
    },
    {
      id: 4,
      image: img4,
      title: 'Coloring and Drawing for Kids',
    },
    {
      id: 5,
      image: img5,
      title: 'Coloring and Drawing for Kids',
    },
  ];
  return (
    <div className={`hidden md:flex flex-wrap overflow-hidden transition-all ${menuDrop ? 'h-60  mt-5' : 'h-0'}`}>
      {articleData.map(({ id, image, title }) => {
        return (
          <div className="w-full md:w-1/5 px-0 md:px-4" key={id}>
            <article className="h-full p-2 rounded-2xl transition-all bg-white shadow-article hover:shadow-articleHover">
              <div className="flex flex-col app-body">
                <div className="app-thumbnail rounded-lg overflow-hidden mb-2">
                  <Image src={image} alt="app thumbnail" className="w-full" />
                </div>
                <div className="app-content px-2 mb-4">
                  <h3 className="title text-base md:text-2xl font-bold">{title}</h3>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default MenuDrop;
