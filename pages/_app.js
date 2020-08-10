import "../styles/index.css";
import Logotype from "../molecules/Logotype";
import Motto from "../molecules/Motto";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full flex flex-col items-center">
      <Logotype />
      <Component {...pageProps} />
      <Motto />
    </div>
  );
}
