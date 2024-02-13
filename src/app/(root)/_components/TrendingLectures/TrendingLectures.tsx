"use client";

import LectureCardsList from "@/components/LectureCardsList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function TrendingLectures() {
  const { data: lectures } = useQuery({
    queryKey: ["lectures", { type: "trending" }],
    queryFn: () =>
      axios
        .get(
          "https://time-attack-frontend.vercel.app/"
          // "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app "
        )
        .then((response) => response.data),
  });
  return <LectureCardsList title="Trending" lectures={lectures || []} />;
}

export default TrendingLectures;
