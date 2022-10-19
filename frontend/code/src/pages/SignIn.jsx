import Background from "../components/Background";
import Form from "../components/Form";

export default function SignIn() {
  return (
    <div className="signIn">
      <Background>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </Background>
    </div>
  );
}
