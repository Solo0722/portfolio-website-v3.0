import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingIcons } from "@/components/ui/infinite-moving-icons";
import { gridItems, skillset } from "@/data";

const About = () => {
  return (
    <section className="px-24 -mt-10" id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <InfiniteMovingIcons items={skillset} direction="left"/>
    </section>
  );
};

export default About;
