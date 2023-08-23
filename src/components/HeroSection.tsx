import Image from 'next/image';
import promoBg from '../../public/images/promo-bg.png';
import promoBgSmall from '../../public/images/promo-bg-mobile.png';

const HeroSection = () => {
  return (
    <section className="relative md:min-h-[100vh] bg-gradient-to-t	from-[#9cf3ff] to-[#31c1ff] pt-28 md:pt-[180px] pb-[120px]  before:bg-[url(../../public/images/sky-paralapse.svg)] before:w-full before:inline-block before:absolute before:top-[100px] before:left-1/2 before:transform before:translate-x-[-50%] before:h-[646px] before:z-10 before:bg-cover before:bg-[50%] text-center mt-[57px]">
      <div className="hero-text relative z-30 pb-24 md:pb-28 lg:pb-40">
        <h1 className="text-white text-center text-5xl md:text-8xl font-bold mb-4">
          Smart apps <br />
          <span className="text-center text-4xl md:text-6xl">
            for{' '}
            <span className="text-[#ff2c86]" style={{ WebkitTextStroke: '2px #d70a61', textShadow: '0 3px 0 #ac0e5a' }}>
              k
            </span>
            <span className="text-[#ffd117]" style={{ WebkitTextStroke: '2px #ff950a', textShadow: '0 3px 0 #ff9c27' }}>
              i
            </span>
            <span className="text-[#89da53]" style={{ WebkitTextStroke: '2px #62b336', textShadow: '0 3px 0 #64a83b' }}>
              d
            </span>
            <span className="text-[#ff9114]" style={{ WebkitTextStroke: '2px #ff6004', textShadow: '0 3px 0 #da5a0f' }}>
              s
            </span>
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white font-bold">Learning through play!</h2>
        <a href="#apps" className="btn bg-white text-[#31c1ff] rounded-full py-4 px-11 pointer text-2xl inline-block " style={{ boxShadow: '0 16px 17px rgba(0,191,200,.17)' }}>
          <span className="relative pl-10 before:bg-[url(../../public/images/apps.svg)] before:h-[24px] before:w-[24px] before:absolute before:top-1/2 before:left-0 transform before:translate-y-[-50%] before:bg-contain before:bg-[50%] before:inline-block before:bg-no-repeat ">Apps</span>
        </a>
      </div>
      <Image src={promoBg} alt="background" className="absolute z-20 left-0 bottom-0 hidden sm:block w-full" />
      <Image src={promoBgSmall} alt="background" className="absolute z-20 left-0 bottom-0 block sm:hidden w-full h-[307px]" />
      <svg viewBox="0 0 1980 116" xmlns="http://www.w3.org/2000/svg" className="absolute h-[44px] lg:h-[116px] bottom-0 lg:bottom-[-7px] fill-white left-0 z-30 w-full " preserveAspectRatio="none">
        <path d="M0 0C8.54831 53.3435 92.5409 66.434 132.615 31.8475C144.58 64.6003 205.405 72.6625 229.335 52.5069C234.321 72.6625 276.599 91.1049 322.067 68.1275C334.531 83.2442 394.357 94.8337 426.264 72.6625C437.732 93.322 489.481 97.7562 520.99 83.2442C525.976 88.2831 539.437 95.6399 553.396 84.7559C561.041 90.6346 582.911 99.2679 609.234 86.7714C612.724 93.9938 624.391 104.408 643.136 88.2831C647.291 92.4822 657.894 98.5624 667.067 89.2909C676.706 94.4977 700.171 102.19 716.923 91.3064C729.885 96.0094 761.294 102.997 783.231 93.322C787.053 96.3453 802.875 105.113 811.65 97.857C821.622 108.943 852.964 114.041 871.476 101.384C878.789 104.743 918.74 112.067 930.306 104.408C936.086 112.336 970.56 111.888 978.666 104.408L980.66 115.997H0C0 115.997 0 45.2997 0 0Z"></path>
        <path d="M2000 0C1991.45 53.3435 1907.46 66.434 1867.39 31.8475C1855.42 64.6003 1794.59 72.6625 1770.67 52.5069C1765.68 72.6625 1723.4 91.1049 1677.93 68.1275C1665.47 83.2442 1605.64 94.8337 1573.74 72.6625C1562.27 93.322 1510.52 97.7562 1479.01 83.2442C1474.02 88.2831 1460.56 95.6399 1446.6 84.7559C1438.96 90.6346 1417.09 99.2679 1390.77 86.7714C1387.28 93.9938 1375.61 104.408 1356.86 88.2831C1352.71 92.4822 1342.11 98.5624 1332.93 89.2909C1323.29 94.4977 1299.83 102.19 1283.08 91.3064C1270.16 110.914 1206.01 106.927 1194.33 93.322C1176.09 106.423 1158.45 107.935 1137.71 99.8725C1137.71 112.47 1090.84 112.47 1072.39 104.408C1062.32 109.037 1036.93 112.34 1029.52 104.408C1013.07 115.997 1001.6 119.02 978.666 104.408C978.666 116.501 978.666 115.997 978.666 115.997H2000V0Z"></path>
      </svg>
    </section>
  );
};

export default HeroSection;
