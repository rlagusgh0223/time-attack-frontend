import { ComponentProps } from "react";
import LectureCard from "../LectureCard";

interface LectureCardsListProps {
  title: string;
  lectures: Array<ComponentProps<typeof LectureCard>["lecture"]>;
}

function LectureCardsList({ title, lectures }: LectureCardsListProps) {
  return (
    <section>
      <h3>{title}</h3>
      <ol>
        {lectures.map((lecture) => (
          <li key={lecture.id}>
            <LectureCard lecture={lecture} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default LectureCardsList;
