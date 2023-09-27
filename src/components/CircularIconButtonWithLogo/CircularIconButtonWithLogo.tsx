import { FunctionComponent } from "react";
import styles from "./CircularIconButtonWithLogo.module.scss";
import Link from "next/link";
import Image from "next/image";
interface ICircularIconButtonWithLogo {
  name: string;
  href: string;
}

const CircularIconButtonWithLogo: FunctionComponent<
  ICircularIconButtonWithLogo
> = ({ href, name }) => {
  return (
    <Link {...{ href }} className={styles.container}>
      <Image
        src={`https://cdn.lolskill.net/img/social_${name}.png`}
        alt={name}
        width={70}
        height={71}
      />
    </Link>
  );
};

export default CircularIconButtonWithLogo;
