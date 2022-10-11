import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Background from "../src/components/Background";
import Form from "../src/components/Form";

export default function SignIn() {
  return (
    <div className="signIn">
      <Header />
      <Background>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </Background>
      <Footer />
    </div>
  );
}
