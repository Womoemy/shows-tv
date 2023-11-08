import Navbar from "../ui/navbar";
import LoginForm from "../ui/login-form";
import backdrop from "public/backdrop_image.jpg"
export default function LoginPage() {
  return (
    <main className="flex justify-center bg-neutral-900 md:h-screen">
      <div
        className="flex flex-col w-full"
        style={{
          backgroundImage: `url(${backdrop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="flex h-20">
          <Navbar />
        </div>
        <div className="justify-center h-full relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
