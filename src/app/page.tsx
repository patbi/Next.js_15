import { Hello } from "./components/hello";
import { Inc } from "./components/increment";

export default function Home() {
  return (
      <>   
        <h1>Welcome To Next.js 15</h1>

        <Hello />
        <Inc />
      </>
    )
}
