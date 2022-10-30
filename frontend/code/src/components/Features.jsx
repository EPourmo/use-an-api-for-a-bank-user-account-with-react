import Feature from "./Feature";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

export default function Features() {
  // data from homepage
  const homepageData = [
    {
      id: 1,
      image: iconChat,
      alternativeText: "Chat Icon",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      image: iconMoney,
      alternativeText: "Money Icon",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      image: iconSecurity,
      alternativeText: "Security  Icon",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  // create component using reusable component
  const featuresData = homepageData.map((item) => {
    return (
      <Feature
        key={item.id}
        image={item.image}
        alternativeText={item.alternativeText}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData}
    </section>
  );
}
