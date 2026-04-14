import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import AthleteShved from "@/pages/AthleteShved";
import AthleteKhorkina from "@/pages/AthleteKhorkina";
import AthleteEmelianenko from "@/pages/AthleteEmelianenko";
import AthleteKislyak from "@/pages/AthleteKislyak";
import AuthorPage from "@/pages/AuthorPage";

type Page = "home" | "shved" | "khorkina" | "emelianenko" | "kislyak" | "author";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      {currentPage === "home" && <HomePage onNavigate={navigate} />}
      {currentPage === "shved" && <AthleteShved onNavigate={navigate} />}
      {currentPage === "khorkina" && <AthleteKhorkina onNavigate={navigate} />}
      {currentPage === "emelianenko" && <AthleteEmelianenko onNavigate={navigate} />}
      {currentPage === "kislyak" && <AthleteKislyak onNavigate={navigate} />}
      {currentPage === "author" && <AuthorPage onNavigate={navigate} />}
    </div>
  );
}
