import React from "react";
import "./Card.scss";
import Link from "next/link";
import Image from "next/image";

interface CardProp {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  descriptionShort: string;
}

interface CardProps {
  val: CardProp;
}

const Card = ({ val }: CardProps) => {
  return (
    <div>
      <Link prefetch={true} href={`/blog/${val.id.toString()}`}>
        <article id={val.id.toString()}>
          <div className="card">
            <div className="card-img">
              <Image
                width={"300"}
                height={"300"}
                src={val.image}
                alt={val.alt}
                priority={true}
              />
            </div>
            <div className="card-body">
              <p className="card-date">
                Publié le <span>{val.date}</span> par DevEvoke
              </p>
              <h2 className="card-title">{val.title}</h2>
              <div className={"card-text"}>
                <p className="card-text">{val.descriptionShort}</p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
