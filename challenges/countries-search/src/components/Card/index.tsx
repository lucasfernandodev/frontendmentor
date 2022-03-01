import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';
import { CountryType } from '../../types/country';

interface dataProps {
  data : CountryType
}
const Card: React.FunctionComponent<dataProps> = ({data}) => {

  const {
    name,
    region,
    population,
    capital,
    flags,
    code
  } = data;

  return (
    <div className={style.card}>
      <div className={style.header}>
        <Image src={flags.png} alt={name} width={265} height={160} layout="responsive"/>
      </div>
      <div className={style.main}>
        <Link href={`/country/${code}`} passHref><a><h3>{name}</h3></a></Link>
        <ul className="content">
          <li className="content-item">
            <span className={style.question}>Population:</span>
            <span className={style.response}>{population}</span>
          </li>
          <li className="content-item">
            <span className={style.question}>Region:</span>
            <span className={style.response}>{region}</span>
          </li>
          <li className="content-item">
            <span className={style.question}>Capital:</span>
            <span className={style.response}>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Card;