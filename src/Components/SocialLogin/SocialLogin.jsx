import useAuth from "../../Hooks/useAuth";
import GithubImg from "../../assets/github.png";
import GoogleImg from "../../assets/google.png";

export default function SocialLogin() {
  const { googleLogin, githubLogin } = useAuth();
  return (
    <>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => googleLogin()}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <img className="w-8 h-8 object-contain" src={GoogleImg} alt="" />
        </button>

        <button
          onClick={() => githubLogin()}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
        >
          <img className="w-8 h-8 object-contain" src={GithubImg} alt="" />
        </button>
        {/* <button
          onClick={() => facebookLogin()}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
        >
          <img className="w-6 h-6 fill-current" src={Facebook} alt="" />
        </button> */}
      </div>
    </>
  );
}
