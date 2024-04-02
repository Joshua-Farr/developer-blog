import { BlogPost } from "./BlogPost";
import { Footer } from "./Footer";
import { Header } from "./Header";

import styled from "styled-components";

const BlogPostWrapepr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogPostWrapepr>
        <BlogPost
          blogInfo={{
            title:
              "The rise of VR/AR headsets – and how businesses stand to benefit",
            subTitle: "Subtitle",
            image:
              "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            blogText: "",
          }}
        >
          When Apple® launches a new product, headlines abound – and its new
          Vision Pro™ headset is no exception. From general praise as the next
          big thing in mixed reality to warnings not to wear the headset while
          driving (or crossing the street), it’s safe to say the launch has
          renewed public interest in VR/AR technology (or “spatial computing,”
          if you’re fancy). Starting at $3,500, the Vision Pro™ isn’t for
          everybody – but its considerable buzz reflects consumers’ growing
          appetite for mixed reality devices. In fact, data from Asurion’s 2024
          Tech Lifestyle Report suggests that 1 in 4 U.S. adults will own a
          VR/AR device in the next 12 months. The rise in mixed reality headsets
          is yet another indication of the “connected home” revolution. Smart
          home technology is moving along the tech adoption curve. No longer are
          these devices just in the hands of the early adopters and tech savvy.
          We are seeing tech move into the tech acceptance phase and into the
          homes of everyday people. While devices like these continue to change
          how we experience life at home, they also create new opportunities for
          businesses to reach, engage and serve homeowners. In other words,
          those who support the devices that run the home can become just as
          essential as the tech itself. If your business already provides
          homeowners insurance, for instance, why not become even more
          integrated in the customer’s home with a protection and support
          program for connected devices that glitch and break every day? VR/AR
          headset adoption is a microcosm of the broader business opportunity –
          read on to find out how.
        </BlogPost>
      </BlogPostWrapepr>
      <Footer />
    </>
  );
};
