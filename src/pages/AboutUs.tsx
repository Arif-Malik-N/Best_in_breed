import React from "react";
import { aboutPageDog, certificates } from "../assets/images";
import NavigationTopBar from "../components/NavigationTopBar";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      {/* Top bar */}
      <NavigationTopBar name="About App" onClick={() => navigate("/")} />

      {/* Middle Text With Image */}
      <div className="my-3 sm:my-10">
        {/* Text Section */}
        <div className="xxs:text-xs xs:text-sm sm:text-lg text-gray-800 space-y-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui
          purus sit hac ac, ornare a nibh etiam. Diam eget mauris, iaculis
          pellentesque hendrerit turpis dolor facilisi velit. Ullamcorper sit
          adipiscing sed id nisl at integer. Tristique in lectus interdum nisi
          augue pellentesque laoreet ullamcorper sagittis. Lectus leo ut diam
          laoreet sit. Sed non netus cum faucibus blandit. Non non ut donec
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui
          purus sit hac ac, ornare a nibh etiam. Diam eget mauris, iaculis
          pellentesque hendrerit turpis dolor facilisi velit. Ullamcorper sit
          adipiscing sed id nisl at integer. Tristique in lectus interdum nisi
          augue pellentesque laoreet ullamcorper sagittis. Lectus leo ut diam
          laoreet sit. Sed non netus cum faucibus blandit. Non non ut donec
          <img
            src={aboutPageDog}
            alt="Dog"
            className="rounded-xl float-right ml-3 my-3"
            // className="rounded-xl w-full h-[600px]"
          />{" "}
          Tristique in lectus interdum nisi augue pellentesque laoreet
          ullamcorper sagittis. Lectus leo ut diam laoreet sit. Sed non netus
          cum faucibus blandit. Non non ut donec Ullamcorper sit adipiscing sed
          id nisl at integer Diam eget mauris, iaculis pellentesque hendre ipsum
          dolor sit amet, consectetur adipiscing elit. Ullamcorper sit
          adipiscing sed id nisl at integer Sed non netus cum faucibus blandit.
          Non non u lectus interdum nisi augue pellentesque laoreet Lorem ipsum
          dolor sit amet, consectetur adipisci Lorem ipsum dolor sit amet,
          consectetur adipis Ullamcorper sit adipiscing sed id nisl at integer.
          ipsum dolor sit amet, consectetur adipiscing elit. lectus interdum
          nisi augue pellentesque laoree Sed non netus cum faucibus blandit. Non
          non ut Ullamcorper sit adipiscing sed id nisl at integ ipsum dolor sit
          amet, consectetur adipiscing elit Sed non netus cum faucibus blandit.
          Non non ut sit adipiscing sed id nisl at integ ipsum dolor sit amet,
          consectetur adipiscing elit Sed non netus cum faucibus blandit. Non
          non ut sit adipiscing sed id nisl at integ ipsum dolor sit amet,
          consectetur adipiscing elit Sed non netus cum faucibus blandit. Non
          non ut
        </div>
      </div>

      {/* Certificate Section */}
      <div className="2xl:mt-[9rem] 3xl:mt-[15rem]">
        <div className="text-center xxs:my-5 sm:my-12">
          <h1 className="xxs:text-xl xs:text-2xl sm:text-4xl font-bold">
            Training That Earns a Title
          </h1>
          <h3 className="xxs:text-xs xs:text-sm sm:text-lg">
            Every session brings your dog one step closer to certified
            obedience.
          </h3>
        </div>
        <img src={certificates} alt={"certificates"} className="w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
