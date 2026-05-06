"use client";
import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import Events from "../../app/(site)/events/sections/EventsSection/EventsSection";
import Movement from "./sections/movement/Movement";
import { useQuery } from "@tanstack/react-query";
import { getNewsList, newsKeys } from "@/src/entities/news";
export const HomePage: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: newsKeys.list(),
    queryFn: getNewsList,
  });
  console.log(data);
  return (
    <>
      <Banner />
      <Movement />
      <Events />
    </>
  );
};
