import SingIn from "./SingIn";

function SingInContainer() {
  const openGoogleSignIn = () => {
    window.open("https://accounts.google.com/login", "_blank");
  };

  return (
    <div>
      <SingIn openGoogleSignIn={openGoogleSignIn} />
    </div>
  );
}

export default SingInContainer;
